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
  padding: 0 2rem; /* horizontal padding only - height controlled by --navbar-height */
  min-height: var(--navbar-height);
  display: flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  backdrop-filter: blur(0px);
}

.navbar-scrolled {
  background: linear-gradient(180deg, rgba(10, 14, 39, 0.98) 0%, rgba(10, 14, 39, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--accent-border);
  /* maintain same min-height when scrolled */
  min-height: var(--navbar-height);
  padding: 0 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
  font-size: 1.3rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-logo:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.logo-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent-border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-logo:hover .logo-avatar {
  border-color: var(--primary-cyan);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.navbar-menu {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-link {
  color: var(--text-tertiary);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
}

.nav-link:hover {
  color: var(--primary-cyan);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gradient);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after {
  width: 100%;
}

.btn-small {
  background: var(--accent-gradient);
  color: white;
  padding: 0.7rem 1.8rem;
  border-radius: 0.6rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  border: 1px solid transparent;
  letter-spacing: 0.5px;
}

.btn-small:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3);
  border-color: var(--primary-cyan);
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

  .logo-avatar {
    width: 36px;
    height: 36px;
  }
}
</style>
