<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Profile Image Section -->
      <div class="profile-section">
        <div class="profile-image-wrapper">
          <div class="profile-frame">
            <img src="/images/profilephoto.jpeg" alt="Colin Owen Mutwiri Nyaga" class="profile-image" />
            <div class="profile-glow"></div>
            <div class="profile-ring"></div>
          </div>
          <div class="floating-badge">
            <span class="badge-icon">✨</span>
            <span class="badge-text">Available for Collaborations</span>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="hero-content">
        <div class="intro-badge">
          <span class="badge-dot"></span>
          Full-Stack Developer & Tech Innovator
        </div>
        
        <h1 class="hero-title">Colin Owen Mutwiri Nyaga</h1>
        
        <p class="hero-subtitle">
          Building Beautiful, Scalable Solutions
        </p>
        
        <p class="hero-description">
          Computer Science graduate from Catholic University of Eastern Kenya with expertise in web development, mobile apps, cybersecurity, and AI/ML. Transforming ideas into elegant digital experiences.
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">15+</span>
            <span class="stat-name">Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">4+</span>
            <span class="stat-name">Years</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-name">Tech Stacks</span>
          </div>
        </div>

        <div class="hero-cta">
          <a href="#collaboration" class="btn btn-primary">Let's Collaborate</a>
          <a href="#projects" class="btn btn-secondary">View My Work</a>
        </div>

        <div class="social-links">
          <a href="https://github.com/owenz4040" target="_blank" rel="noopener" class="social-icon" title="GitHub">
            <img src="/icons/github.svg" alt="GitHub" class="social-icon-img" />
          </a>
          <a href="https://linkedin.com/in/OwenCmn" target="_blank" rel="noopener" class="social-icon" title="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" class="social-icon-img" />
          </a>
          <a href="https://twitter.com/CmnOwen" target="_blank" rel="noopener" class="social-icon" title="Twitter">
            <img src="/icons/x.svg" alt="X" class="social-icon-img" />
          </a>
          <a href="mailto:owenzcolin@gmail.com" class="social-icon" title="Email">
            <img src="/icons/email.svg" alt="Email" class="social-icon-img" />
          </a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Scroll to explore</span>
      <div class="scroll-arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v10M16 13l-6 6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--dark-bg) 0%, rgba(15, 23, 42, 0.8) 50%, var(--darker-bg) 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 1200px;
  height: 1200px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: -50%;
  width: 1200px;
  height: 1200px;
  background: radial-gradient(circle, rgba(107, 95, 255, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-reverse 20s ease-in-out infinite;
  z-index: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-60px) translateX(60px); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(60px) translateX(-60px); }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Profile Section */
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInLeft 1s ease-out;
}

.profile-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.profile-frame {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3;
  box-shadow: 0 40px 80px rgba(0, 212, 255, 0.2);
}

.profile-glow {
  position: absolute;
  inset: -15px;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(30px);
  z-index: -1;
  animation: pulse-glow 4s ease-in-out infinite;
}

.profile-ring {
  position: absolute;
  inset: -8px;
  border: 3px solid;
  border-image: var(--accent-gradient) 1;
  border-radius: 50%;
  animation: spin-slow 20s linear infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; filter: blur(20px); }
  50% { opacity: 0.6; filter: blur(40px); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
}

.floating-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(107, 95, 255, 0.12) 100%);
  border: 1.5px solid var(--accent-border);
  padding: 1rem 1.8rem;
  border-radius: 50px;
  backdrop-filter: blur(15px);
  animation: float-up 3s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
}

.badge-icon {
  font-size: 1.3rem;
}

.badge-text {
  font-size: 0.95rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
}

/* Content Section */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  color: var(--text-primary);
  animation: slideInRight 1s ease-out;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(107, 95, 255, 0.1) 100%);
  border: 1px solid var(--accent-border);
  border-radius: 50px;
  width: fit-content;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-cyan);
  letter-spacing: 0.5px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-gradient);
  border-radius: 50%;
  animation: glowPulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.2;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.6rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-tertiary);
  max-width: 550px;
  margin: 0.5rem 0 1rem 0;
  letter-spacing: 0.3px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2.5rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  backdrop-filter: blur(10px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-name {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 1.1rem 2.8rem;
  border-radius: 0.8rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: var(--accent-gradient);
  border-color: var(--primary-cyan);
  color: white;
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.5);
  border-color: var(--primary-blue);
}

.btn-secondary {
  background: transparent;
  border-color: var(--accent-border);
  color: var(--primary-cyan);
}

.btn-secondary:hover {
  background: rgba(0, 212, 255, 0.1);
  transform: translateY(-5px);
  border-color: var(--primary-cyan);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.social-icon {
  width: 55px;
  height: 55px;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(107, 95, 255, 0.12) 100%);
  border: 1.5px solid var(--accent-border);
  color: var(--primary-cyan);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.social-icon:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(107, 95, 255, 0.2) 100%);
  border-color: var(--primary-cyan);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.25);
}

.social-icon-img {
  width: 22px;
  height: 22px;
  display: block;
  object-fit: contain;
  filter: brightness(1.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.scroll-arrow {
  display: flex;
  justify-content: center;
  color: var(--primary-cyan);
  animation: float-up 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .profile-frame {
    width: 320px;
    height: 320px;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1.5rem;
  }

  .hero-container {
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }

  .profile-frame {
    width: 280px;
    height: 280px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
