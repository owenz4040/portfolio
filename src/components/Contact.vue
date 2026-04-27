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
  background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
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
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
}

.contact::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-slow 8s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-50px) translateX(-30px); }
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-intro {
  text-align: center;
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(167, 139, 250, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 1.2rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-card:hover {
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(96, 165, 250, 0.15);
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(167, 139, 250, 0.12) 100%);
}

.contact-icon {
  font-size: 2.8rem;
}

.contact-icon-img {
  width: 44px;
  height: 44px;
  display: inline-block;
  object-fit: contain;
}

.contact-card h3 {
  color: #e2e8f0;
  font-size: 1.15rem;
  margin: 0 0 0.3rem 0;
  font-weight: 700;
}

.contact-card p {
  color: #94a3b8;
  font-size: 0.85rem;
  margin: 0 0 0.8rem 0;
}

.contact-link {
  color: #60a5fa;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
}

.contact-card:hover .contact-link {
  color: #a78bfa;
  transform: translateX(3px);
}

.contact-cta {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn-primary-large {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  padding: 1.1rem 3rem;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-primary-large::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.btn-primary-large:hover::before {
  left: 100%;
}

.btn-primary-large:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 55px rgba(59, 130, 246, 0.4);
}

.btn-primary-large:hover .btn-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-intro {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .contact-methods {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .btn-primary-large {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 500px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
