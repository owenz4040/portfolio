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
  background: linear-gradient(180deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  border-top: 1px solid var(--accent-border);
  padding: 4rem 2rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section:first-child {
  text-align: left;
}

.footer-title {
  color: var(--text-primary);
  font-size: 1.4rem;
  font-weight: 900;
  margin: 0 0 0.7rem 0;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.footer-tagline {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.footer-copyright {
  color: var(--text-muted);
  font-size: 0.95rem;
  text-align: center;
  margin: 0;
  font-weight: 600;
}

.footer-links {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.footer-link {
  color: var(--primary-cyan);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
}

.footer-link:hover {
  color: var(--primary-blue);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1px solid var(--accent-border);
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.heart {
  display: inline-block;
  animation: float-up 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-section:first-child {
    text-align: center;
  }

  .footer-links {
    justify-content: center;
    gap: 1.5rem;
  }

  .footer-link {
    font-size: 0.9rem;
  }

  .footer-title {
    font-size: 1.2rem;
  }
}
</style>
