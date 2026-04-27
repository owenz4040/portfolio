<template>
  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <img src="/images/profilephoto.jpeg" alt="Colin Owen Mutwiri Nyaga" class="logo-avatar" />
        <span class="logo-text">Colin O.M.N</span>
      </div>
      <nav class="navbar-menu">
        <a href="#home" class="nav-link" @click="scrollTo">Home</a>
        <a href="#about" class="nav-link" @click="scrollTo">About</a>
        <a href="#featured" class="nav-link" @click="scrollTo">Featured</a>
        <a href="#projects" class="nav-link" @click="scrollTo">Projects</a>
        <a href="#contact" class="nav-link" @click="scrollTo">Contact</a>
      </nav>
      <div class="navbar-cta">
        <a href="#contact" class="btn-small">Get In Touch</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (e: Event) => {
  e.preventDefault()
  const target = (e.target as HTMLAnchorElement).getAttribute('href')
  if (target) {
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar-scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(96, 165, 250, 0.1);
  padding: 1rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.05);
}

.logo-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(96, 165, 250, 0.5);
  transition: all 0.3s ease;
}

.navbar-logo:hover .logo-avatar {
  border-color: rgba(96, 165, 250, 1);
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.4);
}

.navbar-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #cbd5e1;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #60a5fa;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-small {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-small:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .navbar-menu {
    display: none;
  }

  .navbar-logo {
    font-size: 1rem;
  }

  .logo-icon {
    font-size: 1.3rem;
  }
}
</style>
