<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I'm a Computer Science graduate from <strong>Catholic University of Eastern Kenya</strong> 
            (2025) with a passion for building innovative solutions that solve real-world problems.
          </p>
          <p>
            My journey spans across full-stack development, cybersecurity, and AI/ML integration. 
            I'm currently pursuing the <strong>(ISC)² Certified in Cybersecurity (CC)</strong> certification 
            to deepen my expertise in security and risk management.
          </p>
          <p>
            What drives me is the challenge of creating systems that are not just functional, but 
            elegant, secure, and user-centric. I thrive on exploring emerging technologies and 
            applying them to practical challenges.
          </p>
          <p class="interests">
            <strong>Beyond code:</strong> I'm a pencil portrait artist, an avid learner in cybersecurity, 
            and always experimenting with new technologies.
          </p>
        </div>
        <div class="about-visual">
          <div class="graduation-frame">
            <img src="/images/graduation.jpeg" alt="Colin Owen Mutwiri Nyaga - Computing Graduate 2025" class="graduation-image" />
            <div class="frame-accent"></div>
          </div>
        </div>
      </div>
      <div class="about-stats">
        <div class="stat">
          <div class="stat-number">10+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat">
          <div class="stat-number">4+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat">
          <div class="stat-number">6</div>
          <div class="stat-label">Tech Domains</div>
        </div>
        <div class="stat">
          <div class="stat-number">100%</div>
          <div class="stat-label">Passion & Dedication</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(131, 58, 180, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-reverse 15s ease-in-out infinite;
  z-index: 0;
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(50px) translateX(-50px); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 700;
}

.interests {
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.1) 0%, rgba(131, 58, 180, 0.1) 100%);
  border: 1px solid rgba(224, 64, 95, 0.2);
  border-radius: 1rem;
  border-left: 4px solid #e4405f;
}

.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.graduation-frame {
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 20px;
  z-index: 2;
}

.graduation-frame::before {
  content: '';
  position: absolute;
  inset: -5px;
  background: var(--primary-gradient);
  border-radius: 20px;
  opacity: 0.6;
  z-index: -1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; filter: blur(10px); }
  50% { opacity: 0.8; filter: blur(20px); }
}

.graduation-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

.graduation-frame:hover .graduation-image {
  transform: scale(1.05);
}

.frame-accent {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.2) 0%, transparent 50%, rgba(131, 58, 180, 0.2) 100%);
  border-radius: 16px;
  pointer-events: none;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.05) 0%, rgba(131, 58, 180, 0.05) 100%);
  border: 1px solid rgba(224, 64, 95, 0.2);
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat:hover {
  border-color: rgba(224, 64, 95, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(224, 64, 95, 0.2);
  background: linear-gradient(135deg, rgba(224, 64, 95, 0.1) 0%, rgba(131, 58, 180, 0.1) 100%);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .graduation-frame {
    max-width: 280px;
  }
}
</style>
