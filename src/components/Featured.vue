<template>
  <section id="featured" class="featured section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">Flagship project · In development</span>
        <h2 class="section-title">The work I'm proudest of</h2>
      </div>

      <a
        class="feature-card"
        href="https://comradeswifi.net"
        target="_blank"
        rel="noopener"
        v-reveal
      >
        <div class="cover" style="background: linear-gradient(135deg, #1d3a8a, #0ea5e9)">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
            alt="Network infrastructure"
            loading="lazy"
            @error="hide"
          />
          <span class="cover-badge">Flagship · In development</span>
        </div>

        <div class="body">
          <div class="meta">
            <span class="tag">Web Development</span>
            <span class="dot">·</span>
            <span>Jul 2026</span>
            <span class="dot">·</span>
            <span>8 min read</span>
          </div>
          <h3 class="title">Building Comrades WiFi — an ISP platform, in the open</h3>
          <p class="excerpt">
            An in-progress ISP platform for Kenya — an AI-powered support chatbot, an
            entertainment hub, and a Vue 3 front end. Still under active development: I'm
            sharing the architecture decisions, the trade-offs, and what I'm learning as it grows.
          </p>
          <span class="read ulink">Read the full story →</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const hide = (e: Event) => {
  ;(e.target as HTMLElement).style.display = 'none'
}
</script>

<style scoped>
.featured { background: var(--paper); }

.head { margin-bottom: 2.4rem; }

.feature-card {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  border-radius: var(--radius);
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}
.feature-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }

.cover {
  position: relative;
  min-height: 360px;
  overflow: hidden;
}
.cover img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}
.feature-card:hover .cover img { transform: scale(1.06); }
.cover-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: var(--accent);
  padding: 0.35rem 0.8rem;
  border-radius: 100px;
  box-shadow: var(--shadow-md);
}

.body {
  padding: clamp(1.8rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.86rem;
  color: var(--muted);
  margin-bottom: 1.1rem;
}
.dot { color: var(--line); }
.title {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.12;
  margin-bottom: 1rem;
}
.excerpt {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink-soft);
  margin-bottom: 1.6rem;
}
.read { color: var(--accent); align-self: flex-start; }

@media (max-width: 820px) {
  .feature-card { grid-template-columns: 1fr; }
  .cover { min-height: 240px; }
}
</style>
