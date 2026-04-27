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
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.education-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education-card {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(167, 139, 250, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.education-card:hover {
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(96, 165, 250, 0.15);
}

.education-card.main {
  border-color: rgba(96, 165, 250, 0.3);
}

.education-card.main:hover {
  border-color: rgba(96, 165, 250, 0.6);
}

.education-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.education-body {
  flex-grow: 1;
}

.education-body h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0 0 0.5rem 0;
}

.institution {
  color: #60a5fa;
  font-weight: 600;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.year {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem 0;
  font-style: italic;
}

.description {
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .education {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .education-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .education-icon {
    font-size: 2.5rem;
    margin: 0 auto;
  }

  .institution {
    font-size: 0.9rem;
  }

  .education-body h3 {
    font-size: 1.2rem;
  }
}
</style>
