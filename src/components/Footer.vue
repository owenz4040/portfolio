<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Colin Owen Mutwiri Nyaga</h3>
          <p class="footer-tagline">CS Graduate | Full-Stack Developer | Cybersecurity Enthusiast</p>
        </div>
        <div class="footer-section">
          <p class="footer-copyright">
            © 2025 Colin Owen Mutwiri Nyaga. All rights reserved.
          </p>
        </div>
        <div class="footer-links">
          <a href="#hero" class="footer-link">Home</a>
          <a href="#about" class="footer-link">About</a>
          <a href="#projects" class="footer-link">Projects</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Made with <span class="heart">❤️</span> using Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
  border-top: 1px solid rgba(96, 165, 250, 0.1);
  padding: 3rem 2rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section:first-child {
  text-align: left;
}

.footer-title {
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.footer-tagline {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.footer-copyright {
  color: #64748b;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.footer-link {
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #a78bfa;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(96, 165, 250, 0.1);
  color: #64748b;
  font-size: 0.85rem;
}

.heart {
  animation: heart-beat 1s infinite;
}

@keyframes heart-beat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  .footer-section:first-child {
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }

  .footer-title {
    font-size: 1.1rem;
  }
}
</style>
