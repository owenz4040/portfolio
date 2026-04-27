<template>
  <section class="education">
    <div class="container">
      <h2 class="section-title">Education & Certifications</h2>
      <div class="education-content">
        <div class="education-card main">
          <div class="education-icon">🎓</div>
          <div class="education-body">
            <h3>Bachelor of Science in Computer Science</h3>
            <p class="institution">Catholic University of Eastern Kenya, Nairobi</p>
            <p class="year">Graduated: 2025</p>
            <p class="description">
              Completed comprehensive computer science curriculum with focus on software development, 
              systems design, and emerging technologies.
            </p>
          </div>
        </div>

        <div class="education-card cert">
          <div class="education-icon">🔐</div>
          <div class="education-body">
            <h3>(ISC)² Certified in Cybersecurity (CC)</h3>
            <p class="institution">International Information System Security Certification Consortium</p>
            <p class="year">Currently Pursuing</p>
            <p class="description">
              Advancing expertise in security fundamentals, risk management, and information security 
              practices across domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.education {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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

.education-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.education-card {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  padding: 2.8rem;
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.education-card:hover {
  border-color: var(--primary-cyan);
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(0, 212, 255, 0.2);
}

.education-card.main {
  border-color: var(--accent-border);
}

.education-card.main:hover {
  border-color: var(--primary-cyan);
}

.education-icon {
  font-size: 3.5rem;
  flex-shrink: 0;
}

.education-body {
  flex-grow: 1;
}

.education-body h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.7rem 0;
  letter-spacing: -0.5px;
}

.institution {
  color: var(--primary-cyan);
  font-weight: 700;
  margin: 0.6rem 0;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
}

.year {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0.6rem 0 1.2rem 0;
  font-style: italic;
  font-weight: 600;
}

.description {
  color: var(--text-tertiary);
  line-height: 1.8;
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

@media (max-width: 768px) {
  .education {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .education-card {
    flex-direction: column;
    text-align: center;
    padding: 2.2rem;
    gap: 1.8rem;
  }

  .education-icon {
    font-size: 3rem;
    margin: 0 auto;
  }

  .institution {
    font-size: 1rem;
  }

  .education-body h3 {
    font-size: 1.3rem;
  }
}
</style>
