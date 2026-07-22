<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">Elsewhere</span>
        <h2 class="section-title">Say hello</h2>
        <p class="section-lead">
          Prefer a quicker channel? I'm around on these — always happy to talk shop.
        </p>
      </div>

      <div class="cards">
        <a
          v-for="(c, i) in channels"
          :key="c.label"
          class="card"
          :href="c.href"
          :target="c.blank ? '_blank' : undefined"
          :rel="c.blank ? 'noopener' : undefined"
          v-reveal="{ delay: i * 80 }"
        >
          <span class="ic"><img :src="c.icon" :alt="c.label" /></span>
          <span class="c-label">{{ c.label }}</span>
          <span class="c-sub">{{ c.sub }}</span>
          <span class="c-val ulink">{{ c.value }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const channels = [
  { label: 'Email', sub: 'Best for details', value: 'owenzcolin@gmail.com', icon: '/icons/email.svg', href: 'mailto:owenzcolin@gmail.com', blank: false },
  { label: 'LinkedIn', sub: 'Let’s connect', value: 'in/OwenCmn', icon: '/icons/linkedin.svg', href: 'https://linkedin.com/in/OwenCmn', blank: true },
  { label: 'GitHub', sub: 'See the code', value: '@owenz4040', icon: '/icons/github.svg', href: 'https://github.com/owenz4040', blank: true },
  { label: 'Twitter / X', sub: 'Follow along', value: '@CmnOwen', icon: '/icons/x.svg', href: 'https://twitter.com/CmnOwen', blank: true },
]
</script>

<style scoped>
.contact { background: var(--paper); }
.head { margin-bottom: 2.6rem; }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.7rem;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.35s var(--ease);
}
.card:hover { transform: translateY(-8px); box-shadow: var(--shadow-md); border-color: var(--accent); }

.ic {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--paper-2);
  border: 1px solid var(--line);
  margin-bottom: 0.6rem;
}
.ic img { width: 22px; height: 22px; }

.c-label { font-family: var(--serif); font-size: 1.2rem; font-weight: 600; color: var(--ink); }
.c-sub { font-size: 0.82rem; color: var(--muted); }
.c-val { color: var(--accent); font-size: 0.92rem; font-weight: 600; align-self: flex-start; margin-top: 0.3rem; }

@media (max-width: 520px) {
  .cards { grid-template-columns: 1fr 1fr; }
}
</style>
