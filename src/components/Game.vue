<template>
  <section id="play" class="play section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">I make games too</span>
        <h2 class="section-title">Breach the firewall</h2>
        <p class="section-lead">
          Game development is one of my things — so here's one you can actually play. Slip
          your node across the grid to Owen's core; every time you move, his AI drops a
          firewall to cut you off. Reach the core before you run out of moves. He does
          <em>not</em> make it easy.
        </p>
      </div>

      <div class="game" v-reveal ref="gameEl">
        <div class="hud">
          <div class="owen">
            <img src="/images/profilephoto.jpeg" alt="Owen" />
            <div class="owen-text">
              <span class="owen-name">Owen <i>· firewall online</i></span>
              <span class="owen-quip">"{{ quip }}"</span>
            </div>
          </div>
          <div class="stats">
            <div class="stat" :class="{ low: movesLeft <= 6 }">
              <b>{{ movesLeft }}</b><span>Moves left</span>
            </div>
            <div class="stat"><b>{{ firewallsLeft }}</b><span>Owen's walls</span></div>
          </div>
        </div>

        <div class="board-wrap">
          <div class="board" :style="{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }">
            <button
              v-for="cell in cells"
              :key="cell.id"
              class="cell"
              :class="cellClass(cell)"
              :disabled="status !== 'playing' || !isNeighbor(cell)"
              @click="tryMove(cell)"
              :aria-label="`row ${cell.r + 1} column ${cell.c + 1}`"
            >
              <span v-if="isCore(cell)" class="core-mark"></span>
              <span v-else-if="isPlayer(cell)" class="node-mark"></span>
            </button>
          </div>

          <transition name="pop">
            <div v-if="status !== 'playing'" class="result" :class="status">
              <h3>{{ status === 'won' ? 'Breach successful' : 'Firewall holds' }}</h3>
              <p>{{ resultMsg }}</p>
              <button class="btn btn-primary" @click="reset">Play again</button>
            </div>
          </transition>
        </div>

        <div class="controls">
          <div class="dpad" role="group" aria-label="Move">
            <button class="pad up" @click="move(-1, 0)" :disabled="status !== 'playing'" aria-label="Up">▲</button>
            <button class="pad left" @click="move(0, -1)" :disabled="status !== 'playing'" aria-label="Left">◀</button>
            <button class="pad right" @click="move(0, 1)" :disabled="status !== 'playing'" aria-label="Right">▶</button>
            <button class="pad down" @click="move(1, 0)" :disabled="status !== 'playing'" aria-label="Down">▼</button>
          </div>

          <div class="panel">
            <p class="hint">
              <span class="key">↑↓←→</span> / <span class="key">WASD</span>, tap a neighbouring cell,
              or use the pad.
            </p>
            <label class="trace">
              <input type="checkbox" v-model="showTrace" />
              Show me a route
            </label>
            <button class="btn btn-ghost" @click="reset">New game</button>
          </div>
        </div>
      </div>

      <div class="soon" v-reveal>
        <div class="soon-copy">
          <span class="soon-tag">Coming soon</span>
          <p>
            <strong>Stay tuned — more games are on the way.</strong>
            They'll be going live on my Play Store channel soon. Breach is just the warm-up.
          </p>
        </div>
        <!-- TODO: replace href with your real Play Store channel URL when it's live -->
        <a
          class="btn btn-primary soon-btn"
          href="#"
          @click.prevent
          aria-disabled="true"
          title="Play Store channel — launching soon"
        >
          Play Store channel · soon
        </a>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

const ROWS = 8
const COLS = 8
const MAX_MOVES = 30
const FIREWALL_BUDGET = 20
const START = { r: ROWS - 1, c: 0 }
const CORE = { r: 0, c: COLS - 1 }

type Cell = { r: number; c: number; id: number }
type Status = 'playing' | 'won' | 'lost'

const cells: Cell[] = []
for (let r = 0; r < ROWS; r++)
  for (let c = 0; c < COLS; c++) cells.push({ r, c, id: r * COLS + c })

const walls = reactive(new Set<string>())
const player = ref({ ...START })
const moves = ref(0)
const wallsUsed = ref(0)
const status = ref<Status>('playing')
const quip = ref('')
const resultMsg = ref('')
const showTrace = ref(false)
const bump = ref(0) // pulse for a blocked move

const key = (r: number, c: number) => `${r},${c}`
const inBounds = (r: number, c: number) => r >= 0 && r < ROWS && c >= 0 && c < COLS
const isCore = (c: Cell | { r: number; c: number }) => c.r === CORE.r && c.c === CORE.c
const isPlayer = (c: Cell | { r: number; c: number }) => c.r === player.value.r && c.c === player.value.c
const isNeighbor = (c: Cell) => Math.abs(c.r - player.value.r) + Math.abs(c.c - player.value.c) === 1

const movesLeft = computed(() => MAX_MOVES - moves.value)
const firewallsLeft = computed(() => FIREWALL_BUDGET - wallsUsed.value)

const quips = {
  start: ["You won't get through.", 'This grid is mine.', 'Go on. Try me.'],
  block: ['Blocked.', 'Not that way.', 'Nice try.', 'Rerouted.', 'Denied.'],
  skip: ['...out of walls there.', 'Hmm. Slippery.', 'Lucky gap.'],
  near: ['Getting close. Still no.', "Don't get comfortable.", 'I see you.'],
  win: ["Okay — you got me.", 'How did you...', 'Rematch. Now.'],
  lose: ['Firewall holds.', 'Access denied.', 'Better luck next time.'],
}
const pick = (a: string[]) => a[Math.floor(Math.random() * a.length)]

function neighbors(r: number, c: number) {
  return ([[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]] as const).filter(([nr, nc]) =>
    inBounds(nr, nc)
  )
}

// BFS shortest path from a start cell to the core, avoiding walls.
function bfs(start: { r: number; c: number }): { r: number; c: number }[] | null {
  const startK = key(start.r, start.c)
  const seen = new Set([startK])
  const prev = new Map<string, string>()
  const queue: { r: number; c: number }[] = [start]
  while (queue.length) {
    const cur = queue.shift()!
    if (isCore(cur)) {
      const path: { r: number; c: number }[] = []
      let ck: string | undefined = key(cur.r, cur.c)
      while (ck) {
        const [r, c] = ck.split(',').map(Number)
        path.unshift({ r, c })
        ck = prev.get(ck)
      }
      return path
    }
    for (const [nr, nc] of neighbors(cur.r, cur.c)) {
      const nk = key(nr, nc)
      if (seen.has(nk) || walls.has(nk)) continue
      seen.add(nk)
      prev.set(nk, key(cur.r, cur.c))
      queue.push({ r: nr, c: nc })
    }
  }
  return null
}

const traceCells = computed(() => {
  if (!showTrace.value || status.value !== 'playing') return new Set<string>()
  const p = bfs(player.value)
  const s = new Set<string>()
  if (p) for (const c of p) if (!isPlayer(c) && !isCore(c)) s.add(key(c.r, c.c))
  return s
})

// Owen places one firewall — greedily on the player's shortest path,
// but only if a path to the core still remains (keeps the game winnable).
function owenTurn() {
  if (firewallsLeft.value <= 0) {
    quip.value = pick(quips.skip)
    return
  }
  const path = bfs(player.value)
  if (!path || path.length < 2) return
  for (let i = 1; i < path.length; i++) {
    const c = path[i]
    if (isCore(c)) continue
    const k = key(c.r, c.c)
    if (walls.has(k)) continue
    walls.add(k)
    if (bfs(player.value)) {
      wallsUsed.value++
      const dist = Math.abs(player.value.r - CORE.r) + Math.abs(player.value.c - CORE.c)
      quip.value = dist <= 3 ? pick(quips.near) : pick(quips.block)
      return
    }
    walls.delete(k) // would trap the player — don't
  }
  quip.value = pick(quips.skip)
}

function move(dr: number, dc: number) {
  if (status.value !== 'playing') return
  const nr = player.value.r + dr
  const nc = player.value.c + dc
  if (!inBounds(nr, nc)) return
  if (walls.has(key(nr, nc))) {
    bump.value++ // flash "blocked"
    quip.value = pick(quips.block)
    return
  }

  player.value = { r: nr, c: nc }
  moves.value++

  if (isCore(player.value)) {
    status.value = 'won'
    quip.value = pick(quips.win)
    resultMsg.value = `You reached the core in ${moves.value} moves. Owen is not pleased.`
    return
  }
  if (movesLeft.value <= 0) {
    status.value = 'lost'
    quip.value = pick(quips.lose)
    resultMsg.value = 'Out of moves — the firewall held you off. Try a tighter route.'
    return
  }
  owenTurn()
}

function tryMove(cell: Cell) {
  if (!isNeighbor(cell)) return
  move(cell.r - player.value.r, cell.c - player.value.c)
}

function reset() {
  walls.clear()
  player.value = { ...START }
  moves.value = 0
  wallsUsed.value = 0
  status.value = 'playing'
  resultMsg.value = ''
  quip.value = pick(quips.start)
}

function cellClass(cell: Cell) {
  return {
    wall: walls.has(key(cell.r, cell.c)),
    core: isCore(cell),
    player: isPlayer(cell),
    neighbor: status.value === 'playing' && isNeighbor(cell) && !walls.has(key(cell.r, cell.c)),
    trace: traceCells.value.has(key(cell.r, cell.c)),
    bumped: isPlayer(cell) && bump.value > 0,
  }
}

// Keyboard — only when the game is on screen, so we never hijack page scrolling.
const gameEl = ref<HTMLElement | null>(null)
const inView = ref(false)
let io: IntersectionObserver | null = null

function onKey(e: KeyboardEvent) {
  if (!inView.value || status.value !== 'playing') return
  const map: Record<string, [number, number]> = {
    ArrowUp: [-1, 0], w: [-1, 0], W: [-1, 0],
    ArrowDown: [1, 0], s: [1, 0], S: [1, 0],
    ArrowLeft: [0, -1], a: [0, -1], A: [0, -1],
    ArrowRight: [0, 1], d: [0, 1], D: [0, 1],
  }
  const m = map[e.key]
  if (m) {
    e.preventDefault()
    move(m[0], m[1])
  }
}

onMounted(() => {
  reset()
  window.addEventListener('keydown', onKey)
  if (gameEl.value) {
    io = new IntersectionObserver(
      ([entry]) => (inView.value = entry.isIntersecting),
      { threshold: 0.3 }
    )
    io.observe(gameEl.value)
  }
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  io?.disconnect()
})
</script>

<style scoped>
.play { background: var(--paper-2); }
.head { margin-bottom: 2.4rem; }
.head em { font-style: italic; color: var(--accent); }

.game {
  position: relative;
  max-width: 620px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.2rem, 3vw, 1.8rem);
  box-shadow: var(--shadow-md);
}

/* HUD */
.hud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
}
.owen { display: flex; align-items: center; gap: 0.75rem; min-width: 0; }
.owen img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent);
  flex-shrink: 0;
}
.owen-text { display: flex; flex-direction: column; min-width: 0; }
.owen-name { font-family: var(--serif); font-weight: 600; font-size: 1.02rem; color: var(--ink); }
.owen-name i { font-style: normal; font-family: var(--sans); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: #17a35c; }
.owen-quip { font-size: 0.9rem; color: var(--ink-soft); font-style: italic; }

.stats { display: flex; gap: 0.7rem; }
.stat {
  text-align: center;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  background: var(--paper-2);
  border: 1px solid var(--line);
  min-width: 74px;
}
.stat b { display: block; font-family: var(--serif); font-size: 1.5rem; font-weight: 600; color: var(--ink); line-height: 1; }
.stat span { font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
.stat.low b { color: var(--accent); }

/* Board */
.board-wrap { position: relative; }
.board {
  display: grid;
  gap: 5px;
  padding: 5px;
  border-radius: var(--radius-sm);
  background: var(--paper-3);
  aspect-ratio: 1;
}
.cell {
  position: relative;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: default;
  padding: 0;
  display: grid;
  place-items: center;
  transition: background 0.25s var(--ease), transform 0.15s var(--ease), box-shadow 0.25s var(--ease);
}
.cell.neighbor { cursor: pointer; background: var(--accent-soft); }
.cell.neighbor:hover { transform: scale(1.06); box-shadow: inset 0 0 0 2px var(--accent); }
.cell.trace { background: rgba(214, 72, 43, 0.14); }
.cell.trace::after {
  content: '';
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent); opacity: 0.5;
}

.cell.wall {
  background: var(--ink);
  background-image: repeating-linear-gradient(
    -45deg, transparent 0 4px, rgba(214, 72, 43, 0.35) 4px 6px
  );
  box-shadow: inset 0 0 0 1px rgba(214, 72, 43, 0.4);
  animation: wallIn 0.3s var(--ease);
}
@keyframes wallIn { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }

.node-mark {
  width: 62%;
  height: 62%;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(214, 72, 43, 0.22), 0 0 16px rgba(214, 72, 43, 0.5);
  animation: nodePulse 1.6s ease-in-out infinite;
}
@keyframes nodePulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(214, 72, 43, 0.22), 0 0 14px rgba(214, 72, 43, 0.45); }
  50% { box-shadow: 0 0 0 7px rgba(214, 72, 43, 0.12), 0 0 22px rgba(214, 72, 43, 0.6); }
}
.cell.player.bumped { animation: shake 0.3s var(--ease); }
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}

.core {
  background: linear-gradient(135deg, #fff5e0, #fbe8c2);
}
.core-mark {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  border: 3px solid var(--gold);
  box-shadow: 0 0 0 3px rgba(200, 145, 42, 0.2), inset 0 0 8px rgba(200, 145, 42, 0.5);
  animation: coreSpin 3s linear infinite;
}
@keyframes coreSpin {
  0%, 100% { transform: scale(0.9); }
  50% { transform: scale(1.08); }
}

/* Result overlay */
.result {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-align: center;
  padding: 1.5rem;
  border-radius: var(--radius-sm);
  background: rgba(251, 250, 247, 0.9);
  backdrop-filter: blur(6px);
}
.result h3 { font-size: 1.9rem; }
.result.won h3 { color: #128a4c; }
.result.lost h3 { color: var(--accent-deep); }
.result p { max-width: 22rem; color: var(--ink-soft); }

/* Controls */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1.3rem;
  flex-wrap: wrap;
}
.dpad {
  display: grid;
  grid-template-columns: repeat(3, 44px);
  grid-template-rows: repeat(2, 44px);
  gap: 6px;
}
.pad {
  border: 1px solid var(--line);
  background: #fff;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.2s var(--ease), transform 0.15s var(--ease), border-color 0.2s var(--ease);
}
.pad:hover:not(:disabled) { background: var(--accent-soft); border-color: var(--accent); transform: translateY(-2px); }
.pad:disabled { opacity: 0.4; cursor: not-allowed; }
.pad.up { grid-column: 2; grid-row: 1; }
.pad.left { grid-column: 1; grid-row: 2; }
.pad.right { grid-column: 3; grid-row: 2; }
.pad.down { grid-column: 2; grid-row: 2; }

.panel { display: flex; flex-direction: column; gap: 0.6rem; align-items: flex-start; }
.hint { font-size: 0.86rem; color: var(--muted); }
.key {
  font-family: var(--mono, monospace);
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0.05rem 0.35rem;
  font-size: 0.8rem;
  color: var(--ink-soft);
}
.trace { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.88rem; color: var(--ink-soft); cursor: pointer; }
.trace input { accent-color: var(--accent); width: 15px; height: 15px; }

.pop-enter-active, .pop-leave-active { transition: opacity 0.3s var(--ease), transform 0.3s var(--ease); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.96); }

/* Coming-soon / Play Store teaser */
.soon {
  max-width: 620px;
  margin: 1.6rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  flex-wrap: wrap;
  padding: 1.3rem 1.6rem;
  border-radius: var(--radius);
  background: var(--ink);
  color: var(--paper);
  box-shadow: var(--shadow-md);
}
.soon-copy { flex: 1; min-width: 240px; }
.soon-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: var(--accent);
  padding: 0.24rem 0.65rem;
  border-radius: 100px;
  margin-bottom: 0.6rem;
}
.soon-copy p { color: rgba(251, 250, 247, 0.72); font-size: 0.96rem; line-height: 1.55; }
.soon-copy strong { color: var(--paper); font-weight: 700; }
.soon-btn { white-space: nowrap; }

@media (max-width: 520px) {
  .soon { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 560px) {
  .controls { justify-content: center; }
  .panel { align-items: center; text-align: center; }
}
</style>
