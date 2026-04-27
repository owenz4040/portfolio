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
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-slow 18s ease-in-out infinite;
  z-index: 0;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(60px) translateX(-60px); }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 5rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.about-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-tertiary);
  letter-spacing: 0.3px;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 800;
}

.interests {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(107, 95, 255, 0.1) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  border-left: 5px solid var(--primary-cyan);
  backdrop-filter: blur(10px);
}

.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.graduation-frame {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 1.2rem;
  z-index: 2;
}

.graduation-frame::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: var(--accent-gradient);
  border-radius: 1.2rem;
  opacity: 0.5;
  z-index: -1;
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; filter: blur(20px); }
  50% { opacity: 0.6; filter: blur(40px); }
}

.graduation-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.graduation-frame:hover .graduation-image {
  transform: scale(1.08);
}

.frame-accent {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, transparent 50%, rgba(107, 95, 255, 0.15) 100%);
  border-radius: 1rem;
  pointer-events: none;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.stat {
  padding: 2.2rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.stat:hover {
  border-color: var(--primary-cyan);
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(0, 212, 255, 0.2);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 900;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
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
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .about-content {
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .graduation-frame {
    max-width: 320px;
  }

  .stat {
    padding: 1.8rem;
  }
}
</style>
