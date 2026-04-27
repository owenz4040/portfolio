<script setup lang="ts">
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
</script>

<template>
  <div class="app">
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
</style>
