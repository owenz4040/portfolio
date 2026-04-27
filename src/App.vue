<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Featured from './components/Featured.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Collaboration from './components/Collaboration.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    showSplash.value = false
  }, 1600)
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

    <Navbar />
    <Hero />
    <About />
    <Featured />
    <Skills />
    <Projects />
    <Education />
    <Collaboration />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
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
