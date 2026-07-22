<template>
  <section id="credentials" class="credentials section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">Background</span>
        <h2 class="section-title">Education &amp; certifications</h2>
      </div>

      <div class="timeline">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          class="entry"
          v-reveal="{ delay: i * 100 }"
        >
          <div class="marker"><span></span></div>
          <div class="card">
            <div class="card-top">
              <span class="year">{{ item.year }}</span>
              <span class="status" :class="item.state">{{ item.status }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p class="org">{{ item.org }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    year: '2025',
    status: 'Completed',
    state: 'done',
    title: 'BSc, Computer Science',
    org: 'Catholic University of Eastern Kenya, Nairobi',
    desc: 'A comprehensive CS curriculum with a focus on software development, systems design and emerging technologies.',
  },
  {
    year: 'In progress',
    status: 'Pursuing',
    state: 'progress',
    title: '(ISC)² Certified in Cybersecurity (CC)',
    org: 'International Information System Security Certification Consortium',
    desc: 'Deepening my expertise in security fundamentals, risk management and information-security practice across domains.',
  },
]
</script>

<style scoped>
.credentials { background: var(--paper); }
.head { margin-bottom: 2.8rem; }

.timeline {
  position: relative;
  max-width: 760px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--line));
}

.entry {
  position: relative;
  padding-left: 3.4rem;
  margin-bottom: 1.6rem;
}
.marker {
  position: absolute;
  left: 6px;
  top: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--accent);
  display: grid;
  place-items: center;
}
.marker span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.6rem 1.8rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
}
.card:hover { transform: translateX(4px); box-shadow: var(--shadow-md); }

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}
.year {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.status {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.22rem 0.65rem;
  border-radius: 100px;
}
.status.done { background: rgba(23, 163, 92, 0.14); color: #128a4c; }
.status.progress { background: var(--accent-soft); color: var(--accent-deep); }

.card h3 { font-size: 1.35rem; margin-bottom: 0.35rem; }
.org { color: var(--accent-deep); font-weight: 600; font-size: 0.96rem; margin-bottom: 0.7rem; }
.desc { color: var(--ink-soft); font-size: 0.98rem; line-height: 1.65; }
</style>
