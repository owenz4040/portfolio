<template>
  <section id="home" class="hero" @mousemove="onMove" @mouseleave="reset">
    <div class="orb orb-a" aria-hidden="true"></div>
    <div class="orb orb-b" aria-hidden="true"></div>
    <div class="dots" aria-hidden="true"></div>

    <div class="container hero-grid">
      <div class="intro">
        <span class="eyebrow">Personal blog · est. 2025</span>

        <h1 class="headline">
          Hi, I'm Colin.<br />
          I write about <span class="hl">code</span>,
          <span class="hl">security</span>, <span class="hl">AI</span>
          &amp; build <span class="hl">games</span>.
        </h1>

        <p class="lede">
          A Computer Science graduate from Catholic University of Eastern Kenya,
          documenting what I build and what I learn — from full-stack platforms and
          real-time computer-vision systems to <strong>games you can play right here</strong>.
        </p>

        <div class="cta">
          <a href="#play" class="btn btn-primary" @click="scrollTo">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Play the game
          </a>
          <a href="#writing" class="btn btn-ghost" @click="scrollTo">
            Read the blog
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="#about" class="btn btn-ghost" @click="scrollTo">More about me</a>
        </div>

        <div class="socials">
          <span class="follow">Find me</span>
          <a href="https://github.com/owenz4040" target="_blank" rel="noopener" aria-label="GitHub"><img src="/icons/github.svg" alt="GitHub" /></a>
          <a href="https://linkedin.com/in/OwenCmn" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://twitter.com/CmnOwen" target="_blank" rel="noopener" aria-label="X"><img src="/icons/x.svg" alt="X" /></a>
          <a href="mailto:owenzcolin@gmail.com" aria-label="Email"><img src="/icons/email.svg" alt="Email" /></a>
        </div>
      </div>

      <div class="portrait" :style="parallax">
        <div class="blob" aria-hidden="true"></div>
        <div class="photo">
          <img src="/images/profilephoto.jpeg" alt="Colin Owen Mutwiri Nyaga" />
        </div>
        <span class="chip chip-1">Web Dev</span>
        <span class="chip chip-2">Cybersecurity</span>
        <span class="chip chip-3">AI / ML</span>
        <span class="chip chip-4">Game Dev</span>
        <svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" /></svg>
      </div>
    </div>

    <a href="#featured" class="scroll-hint" @click="scrollTo" aria-label="Scroll down">
      <span>Latest post</span>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M6 13l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tilt = ref({ x: 0, y: 0 })
const parallax = computed(() => ({
  transform: `translate3d(${tilt.value.x}px, ${tilt.value.y}px, 0)`,
}))

const onMove = (e: MouseEvent) => {
  const rx = (e.clientX / window.innerWidth - 0.5) * 2
  const ry = (e.clientY / window.innerHeight - 0.5) * 2
  tilt.value = { x: rx * 12, y: ry * 12 }
}
const reset = () => (tilt.value = { x: 0, y: 0 })

const scrollTo = (e: Event) => {
  e.preventDefault()
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--banner-h));
  display: flex;
  align-items: center;
  padding: calc(var(--banner-h) + var(--nav-h) + 2rem) 0 4rem;
  overflow: hidden;
  background:
    radial-gradient(140% 90% at 85% 0%, var(--paper-2) 0%, transparent 55%),
    var(--paper);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.55;
  z-index: 0;
}
.orb-a {
  width: 460px; height: 460px;
  top: -120px; right: -80px;
  background: radial-gradient(circle, rgba(214, 72, 43, 0.28), transparent 70%);
  animation: floaty 12s ease-in-out infinite;
}
.orb-b {
  width: 380px; height: 380px;
  bottom: -140px; left: -100px;
  background: radial-gradient(circle, rgba(200, 145, 42, 0.22), transparent 70%);
  animation: floatyReverse 14s ease-in-out infinite;
}
.dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(29, 27, 24, 0.06) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  mask-image: radial-gradient(80% 60% at 50% 40%, #000 30%, transparent 75%);
  z-index: 0;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.intro > * { animation: fadeUp 0.9s var(--ease) both; }
.intro > *:nth-child(1) { animation-delay: 0.05s; }
.intro > *:nth-child(2) { animation-delay: 0.15s; }
.intro > *:nth-child(3) { animation-delay: 0.28s; }
.intro > *:nth-child(4) { animation-delay: 0.4s; }
.intro > *:nth-child(5) { animation-delay: 0.52s; }

.headline {
  font-size: clamp(2.4rem, 5.6vw, 4.1rem);
  font-weight: 600;
  line-height: 1.04;
  margin: 1.1rem 0 1.3rem;
}
.hl {
  position: relative;
  font-style: italic;
  color: var(--accent);
  white-space: nowrap;
}
.hl::after {
  content: '';
  position: absolute;
  left: -2px; right: -2px;
  bottom: 0.06em;
  height: 0.34em;
  background: var(--accent-soft);
  z-index: -1;
  border-radius: 3px;
}

.lede {
  max-width: 33rem;
  font-size: 1.12rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.cta {
  display: flex;
  gap: 1rem;
  margin: 1.9rem 0 1.6rem;
  flex-wrap: wrap;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.follow {
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-right: 0.3rem;
}
.socials a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s var(--ease), border-color 0.25s var(--ease);
}
.socials a:hover { transform: translateY(-4px); border-color: var(--accent); }
.socials img { width: 17px; height: 17px; }

/* Portrait */
.portrait {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  max-width: 440px;
  margin: 0 auto;
  transition: transform 0.5s var(--ease);
  animation: fadeUp 1s var(--ease) 0.2s both;
}
.blob {
  position: absolute;
  inset: 6%;
  background: linear-gradient(150deg, var(--accent) 0%, #e8834f 55%, var(--gold) 100%);
  border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%;
  animation: blob 9s ease-in-out infinite;
  box-shadow: var(--shadow-lg);
}
.photo {
  position: relative;
  width: 78%;
  height: 78%;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--paper);
  box-shadow: var(--shadow-md);
  z-index: 2;
}
.photo img { width: 100%; height: 100%; object-fit: cover; }
.ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--ink);
  stroke-width: 0.6;
  stroke-dasharray: 4 6;
  opacity: 0.25;
  animation: spinSlow 40s linear infinite;
  z-index: 1;
}

.chip {
  position: absolute;
  z-index: 3;
  font-family: var(--sans);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
  background: #fff;
  border: 1px solid var(--line);
  padding: 0.5rem 0.95rem;
  border-radius: 100px;
  box-shadow: var(--shadow-md);
}
.chip-1 { top: 6%; left: -4%; animation: floaty 6s ease-in-out infinite; }
.chip-2 { top: 42%; right: -12%; animation: floatyReverse 7s ease-in-out infinite; }
.chip-3 { bottom: 8%; left: 4%; animation: floaty 8s ease-in-out infinite; }
.chip-4 { bottom: 20%; right: -6%; animation: floatyReverse 6.5s ease-in-out infinite; }

.scroll-hint {
  position: absolute;
  bottom: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-hint svg { animation: floaty 2s ease-in-out infinite; color: var(--accent); }

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
  .portrait { grid-row: 1; max-width: 320px; margin-bottom: 1rem; }
  .scroll-hint { display: none; }
}
</style>
