<template>
  <header class="nav" :class="{ solid: isScrolled }">
    <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>
    <div class="nav-inner">
      <a href="#home" class="brand" @click="scrollTo">
        <span class="brand-mark">CO</span>
        <span class="brand-name">Colin Owen</span>
      </a>

      <nav class="links">
        <a href="#writing" class="link" @click="scrollTo">Writing</a>
        <a href="#topics" class="link" @click="scrollTo">Topics</a>
        <a href="#about" class="link" @click="scrollTo">About</a>
        <a href="#newsletter" class="link" @click="scrollTo">Newsletter</a>
      </nav>

      <a href="#contact" class="say-hi" @click="scrollTo">Say hello</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const progress = ref(0)

const onScroll = () => {
  isScrolled.value = window.scrollY > 30
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
}

const scrollTo = (e: Event) => {
  e.preventDefault()
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: var(--banner-h);
  left: 0;
  right: 0;
  height: var(--nav-h);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: background 0.4s var(--ease), box-shadow 0.4s var(--ease), border-color 0.4s var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.solid {
  background: rgba(251, 250, 247, 0.86);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--line);
  box-shadow: var(--shadow-sm);
}

.progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  width: 100%;
  background: var(--accent);
  transform-origin: left;
  transform: scaleX(0);
}

.nav-inner {
  max-width: var(--maxw);
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1.2rem, 4vw, 2.5rem);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  transition: transform 0.3s var(--ease);
}
.brand:hover { transform: translateX(1px); }
.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--serif);
  font-weight: 600;
  font-size: 0.95rem;
}
.brand-name {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
}

.links {
  margin-left: auto;
  display: flex;
  gap: 1.9rem;
}
.link {
  font-size: 0.96rem;
  font-weight: 500;
  color: var(--ink-soft);
  position: relative;
  transition: color 0.25s var(--ease);
}
.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  width: 0;
  background: var(--accent);
  transition: width 0.3s var(--ease);
}
.link:hover { color: var(--ink); }
.link:hover::after { width: 100%; }

.say-hi {
  padding: 0.55rem 1.2rem;
  border-radius: 100px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--paper);
  background: var(--accent);
  transition: transform 0.25s var(--ease), background 0.25s var(--ease);
}
.say-hi:hover { transform: translateY(-2px); background: var(--accent-deep); }

@media (max-width: 780px) {
  .links { display: none; }
  .say-hi { margin-left: auto; }
}
@media (max-width: 420px) {
  .brand-name { display: none; }
}
</style>
