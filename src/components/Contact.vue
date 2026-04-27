<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-intro">
        Have an exciting project in mind? Let's collaborate and build something amazing together. 
        I'm always interested in new opportunities and challenges.
      </p>
      <div class="contact-methods">
        <a href="mailto:owenzcolin@gmail.com" class="contact-card">
          <div class="contact-icon">
            <img src="/icons/email.svg" alt="Email" class="contact-icon-img" />
          </div>
          <h3>Email</h3>
          <p>Send me a message</p>
          <span class="contact-link">owenzcolin@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/OwenCmn" class="contact-card" target="_blank" rel="noopener">
          <div class="contact-icon">
            <img src="/icons/linkedin.svg" alt="LinkedIn" class="contact-icon-img" />
          </div>
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
          <span class="contact-link">View Profile →</span>
        </a>
        <a href="https://github.com/owenz4040" class="contact-card" target="_blank" rel="noopener">
          <div class="contact-icon">
            <img src="/icons/github.svg" alt="GitHub" class="contact-icon-img" />
          </div>
          <h3>GitHub</h3>
          <p>Check my code</p>
          <span class="contact-link">View Repos →</span>
        </a>
        <a href="https://twitter.com/CmnOwen" class="contact-card" target="_blank" rel="noopener">
          <div class="contact-icon">
            <img src="/icons/x.svg" alt="X" class="contact-icon-img" />
          </div>
          <h3>Twitter</h3>
          <p>Follow my journey</p>
          <span class="contact-link">@CmnOwen</span>
        </a>
      </div>
      <div class="contact-cta">
        <a href="mailto:owenzcolin@gmail.com" class="btn btn-primary-large">
          <span class="btn-text">Let's Work Together</span>
          <span class="btn-icon">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact {
  padding: 6rem 2rem;
  /* ensure anchor links don't get hidden behind the fixed navbar */
  scroll-margin-top: calc(var(--navbar-height) + 12px);
  background: linear-gradient(180deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-border), transparent);
}

.contact::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(107, 95, 255, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-slow 18s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-50px) translateX(-30px); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.8rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.contact-intro {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.3px;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.contact-card {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  padding: 2.2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(10px);
}

.contact-card:hover {
  border-color: var(--primary-cyan);
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(0, 212, 255, 0.25);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(107, 95, 255, 0.12) 100%);
}

.contact-icon {
  font-size: 3rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon-img {
  width: 48px;
  height: 48px;
  display: inline-block;
  object-fit: contain;
  filter: brightness(1.1);
}

.contact-card h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.contact-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
}

.contact-link {
  color: var(--primary-cyan);
  font-size: 0.95rem;
  font-weight: 700;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
}

.contact-card:hover .contact-link {
  color: var(--primary-blue);
  transform: translateX(4px);
}

.contact-cta {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.btn-primary-large {
  background: var(--accent-gradient);
  color: white;
  padding: 1.2rem 3.5rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--primary-cyan);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 20px 50px rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.btn-primary-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary-large:hover::before {
  left: 100%;
}

.btn-primary-large:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 212, 255, 0.5);
}

.btn-primary-large:hover .btn-icon {
  transform: translateX(6px);
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .contact-intro {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .contact-methods {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.8rem;
  }

  .btn-primary-large {
    padding: 1rem 2.2rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 500px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
