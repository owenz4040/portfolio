<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="intro" role="status" aria-live="polite" aria-label="Loading">
    <div class="mark" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="ring">
        <circle cx="50" cy="50" r="46" />
      </svg>
      <span class="mono">CO</span>
    </div>
    <div class="name">{{ name }}</div>
    <div class="sub">Writing · Building · Securing</div>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  background: var(--paper);
}

.mark {
  position: relative;
  width: 92px;
  height: 92px;
  display: grid;
  place-items: center;
}
.ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 289;
  stroke-dashoffset: 289;
  transform: rotate(-90deg);
  animation: draw 1.1s var(--ease) forwards;
}
@keyframes draw { to { stroke-dashoffset: 0; } }

.mono {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 2rem;
  color: var(--ink);
  opacity: 0;
  animation: fadeUp 0.6s ease 0.35s forwards;
}

.name {
  font-family: var(--serif);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--ink);
  opacity: 0;
  animation: fadeUp 0.7s ease 0.55s forwards;
}
.sub {
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  opacity: 0;
  animation: fadeUp 0.7s ease 0.75s forwards;
}

@media (prefers-reduced-motion: reduce) {
  .ring { animation: none; stroke-dashoffset: 0; }
  .mono, .name, .sub { animation: none; opacity: 1; }
}
</style>
