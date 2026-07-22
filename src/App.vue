<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Featured from './components/Featured.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Game from './components/Game.vue'
import Collaboration from './components/Collaboration.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    showSplash.value = false
  }, 1500)
})

watch(showSplash, (isShowing) => {
  document.body.style.overflow = isShowing ? 'hidden' : ''
})
</script>

<template>
  <div class="app">
    <Transition name="splash-fade" appear>
      <SplashScreen v-if="showSplash" name="Colin Owen" />
    </Transition>

    <div class="dev-banner" role="status">
      <span class="dev-dot" aria-hidden="true"></span>
      <span class="dev-text">
        <strong>Work in progress</strong>
        <span class="sep">·</span>
        <span class="dev-tail">This blog is still under active development — more posts &amp; features coming soon.</span>
      </span>
    </div>

    <Navbar />
    <Hero />
    <Featured />
    <Projects />
    <Skills />
    <About />
    <Education />
    <Game />
    <Collaboration />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}

.dev-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  height: var(--banner-h);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0 1rem;
  background: var(--ink);
  color: var(--paper);
  font-size: 0.82rem;
  text-align: center;
}
.dev-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dev-text strong { color: var(--accent); font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
.dev-text .sep { opacity: 0.4; margin: 0 0.2rem; }
.dev-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(214, 72, 43, 0.6);
  animation: devPulse 1.8s ease-out infinite;
}
@keyframes devPulse {
  0% { box-shadow: 0 0 0 0 rgba(214, 72, 43, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(214, 72, 43, 0); }
  100% { box-shadow: 0 0 0 0 rgba(214, 72, 43, 0); }
}

@media (max-width: 600px) {
  .dev-banner { font-size: 0.74rem; }
  .dev-text .sep,
  .dev-tail { display: none; }
}

.splash-fade-enter-active,
.splash-fade-leave-active {
  transition: opacity 450ms ease;
}

.splash-fade-enter-from,
.splash-fade-leave-to {
  opacity: 0;
}
</style>
