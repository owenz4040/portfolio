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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(224, 64, 95, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -50%;
  left: -50%;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(131, 58, 180, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-reverse 20s ease-in-out infinite;
  z-index: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-50px) translateX(50px); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(50px) translateX(-50px); }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Profile Section */
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.profile-frame {
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3;
}

.profile-glow {
  position: absolute;
  inset: -10px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0.6;
  blur: 20px;
  z-index: -1;
  animation: pulse-glow 3s ease-in-out infinite;
}

.profile-ring {
  position: absolute;
  inset: -5px;
  border: 3px solid;
  border-image: var(--primary-gradient) 1;
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; filter: blur(20px); }
  50% { opacity: 0.8; filter: blur(30px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.floating-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.2) 0%, rgba(131, 58, 180, 0.2) 100%);
  border: 1px solid rgba(224, 64, 95, 0.4);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  animation: bounce 3s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.badge-icon {
  font-size: 1.2rem;
}

.badge-text {
  font-size: 0.9rem;
  font-weight: 600;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Content Section */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--text-primary);
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(64, 93, 230, 0.1) 0%, rgba(224, 64, 95, 0.1) 100%);
  border: 1px solid rgba(224, 64, 95, 0.3);
  border-radius: 50px;
  width: fit-content;
  font-size: 0.9rem;
  font-weight: 600;
  color: #e4405f;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #e4405f 0%, #fd1d1d 100%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
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
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  max-width: 500px;
  margin: 1rem 0;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.05) 0%, rgba(131, 58, 180, 0.05) 100%);
  border: 1px solid rgba(224, 64, 95, 0.2);
  border-radius: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-name {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
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
  background: var(--primary-gradient);
  border-color: #e4405f;
  color: white;
  box-shadow: 0 8px 24px rgba(224, 64, 95, 0.3);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(224, 64, 95, 0.5);
}

.btn-secondary {
  background: transparent;
  border-color: #e4405f;
  color: #e4405f;
}

.btn-secondary:hover {
  background: rgba(224, 64, 95, 0.1);
  transform: translateY(-4px);
}

.social-links {
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.1) 0%, rgba(131, 58, 180, 0.1) 100%);
  border: 1px solid rgba(224, 64, 95, 0.3);
  color: #e4405f;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.2) 0%, rgba(131, 58, 180, 0.2) 100%);
  border-color: rgba(224, 64, 95, 0.6);
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(224, 64, 95, 0.2);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.social-icon-img {
  width: 20px;
  height: 20px;
  display: block;
  object-fit: contain;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.scroll-arrow {
  display: flex;
  justify-content: center;
  animation: bounce-down 2s ease-in-out infinite;
}

@keyframes bounce-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .profile-frame {
    width: 300px;
    height: 300px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-container {
    gap: 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    padding: 0.8rem 2rem;
    font-size: 0.9rem;
  }

  .profile-frame {
    width: 250px;
    height: 250px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }
}
</style>
