<template>
  <section id="featured" class="featured">
    <div class="featured-container">
      <div class="featured-badge">⭐ FEATURED PROJECT</div>
      <h2 class="featured-title">Comrades WiFi</h2>
      <p class="featured-tagline">Fast, Affordable, and Reliable Internet For Students & Professionals</p>

      <div class="featured-grid">
        <div class="featured-content">
          <p class="featured-role">
            <span class="badge-role">👨‍💻 Creator & Active Developer</span>
          </p>
          <p class="featured-description">
            I designed and built Comrades WiFi from scratch, and I continue to work on this project as a live, 
            production internet service platform. This is a full-stack application serving Kenya with blazing-fast 
            connectivity, affordable pricing starting at KSh 999/month, and exceptional 24/7 customer support.
          </p>
          <p class="featured-description secondary">
            Currently serving 10k+ happy customers across 50+ coverage areas with 99.9% network uptime. 
            This project has been my opportunity to solve real-world problems in digital infrastructure 
            while working with a real user base.
          </p>

          <div class="featured-highlights">
            <div class="highlight">
              <div class="highlight-icon">⚡</div>
              <h4>Full-Stack Built</h4>
              <p>Entire platform designed & developed</p>
            </div>
            <div class="highlight">
              <div class="highlight-icon">📈</div>
              <h4>Live & Growing</h4>
              <p>10k+ active customers using daily</p>
            </div>
            <div class="highlight">
              <div class="highlight-icon">🛡️</div>
              <h4>99.9% Uptime</h4>
              <p>Production-grade reliability</p>
            </div>
          </div>

          <div class="featured-cta">
            <a href="https://comradeswifi.net" target="_blank" rel="noopener" class="btn btn-featured-primary">
              Visit Live Website ↗
            </a>
            <a href="https://comradeswifi.net/plans" target="_blank" rel="noopener" class="btn btn-featured-secondary">
              View Plans
            </a>
          </div>
        </div>

        <div class="featured-visual">
          <div class="featured-card" @click="openWebsite">
            <div class="card-header">
              <div class="card-icon">🌐</div>
              <span class="card-badge">LIVE</span>
            </div>
            <div class="card-content">
              <h3>Internet Plans</h3>
              <div class="plan-item">
                <span class="plan-speed">5 Mbps</span>
                <span class="plan-price">KSh 999</span>
              </div>
              <div class="plan-item">
                <span class="plan-speed">10 Mbps</span>
                <span class="plan-price">KSh 1,399</span>
              </div>
              <div class="plan-item">
                <span class="plan-speed">20 Mbps</span>
                <span class="plan-price">KSh 2,199</span>
              </div>
              <a href="https://comradeswifi.net" class="view-plans" target="_blank" rel="noopener">
                Click to Visit Website →
              </a>
            </div>
            <div class="card-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openWebsite = () => {
  window.open('https://comradeswifi.net', '_blank')
}
</script>

<style scoped>
.featured {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
  position: relative;
  overflow: hidden;
}

.featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
}

.featured::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-30px) translateX(20px); }
}

.featured-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.featured-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(167, 139, 250, 0.2) 100%);
  border: 1px solid rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  padding: 0.6rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.featured-title {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.featured-tagline {
  font-size: 1.3rem;
  color: #cbd5e1;
  margin: 0 0 3rem 0;
  font-weight: 500;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 2rem;
}

.featured-content {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.featured-description {
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.featured-description.secondary {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 2rem;
}

.featured-role {
  margin-bottom: 1.5rem;
}

.badge-role {
  display: inline-block;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #10b981;
  padding: 0.7rem 1.5rem;
  border-radius: 0.6rem;
  font-size: 0.9rem;
  font-weight: 700;
}

.featured-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.highlight {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(167, 139, 250, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.highlight:hover {
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(96, 165, 250, 0.1);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.8rem;
}

.highlight h4 {
  color: #e2e8f0;
  font-size: 1.05rem;
  margin: 0.5rem 0;
}

.highlight p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.featured-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  padding: 1.5rem;
  border-radius: 0.8rem;
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-desc {
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.featured-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.9rem 2rem;
  border-radius: 0.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-featured-primary {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
}

.btn-featured-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4);
}

.btn-featured-secondary {
  border: 2px solid #60a5fa;
  color: #60a5fa;
  background: transparent;
}

.btn-featured-secondary:hover {
  background: rgba(96, 165, 250, 0.1);
  border-color: #a78bfa;
  color: #a78bfa;
}

.featured-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.featured-card {
  position: relative;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  min-width: 300px;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.featured-card:hover {
  border-color: rgba(96, 165, 250, 0.5);
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(96, 165, 250, 0.15);
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(167, 139, 250, 0.15) 100%);
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 2.5rem;
}

.card-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-content h3 {
  color: #e2e8f0;
  font-size: 1.3rem;
  margin: 0 0 1.5rem 0;
}

.plan-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(96, 165, 250, 0.1);
  color: #cbd5e1;
}

.plan-item:last-of-type {
  border-bottom: none;
}

.plan-speed {
  font-weight: 600;
}

.plan-price {
  color: #60a5fa;
  font-weight: 700;
  font-size: 1.05rem;
}

.view-plans {
  display: inline-block;
  margin-top: 1rem;
  color: #60a5fa;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgba(96, 165, 250, 0.1);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.view-plans:hover {
  transform: translateX(5px);
  color: #a78bfa;
  border-color: rgba(167, 139, 250, 0.5);
  background: rgba(167, 139, 250, 0.1);
}

@media (max-width: 1024px) {
  .featured-title {
    font-size: 2.8rem;
  }

  .featured-highlights {
    grid-template-columns: 1fr;
  }

  .featured-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .featured {
    padding: 3rem 1.5rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-title {
    font-size: 2rem;
  }

  .featured-tagline {
    font-size: 1.05rem;
  }

  .featured-highlights {
    grid-template-columns: 1fr;
  }

  .featured-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .featured-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
