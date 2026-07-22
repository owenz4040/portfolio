<template>
  <section id="about" class="about section">
    <div class="container about-grid">
      <div class="photo-col" v-reveal="{ delay: 0 }">
        <div class="frame">
          <img src="/images/graduation.jpeg" alt="Colin Owen — Computing graduate, 2025" />
        </div>
        <div class="signature">Colin.</div>
      </div>

      <div class="text-col reveal-right" v-reveal>
        <span class="eyebrow">About the author</span>
        <h2 class="section-title">Nice to meet you</h2>

        <p class="lead-p">
          I'm <strong>Colin Owen Mutwiri Nyaga</strong> — a Computer Science graduate from
          <strong>Catholic University of Eastern Kenya</strong> (2025), based in Nairobi.
          I build software that's meant to be used, not just demoed.
        </p>
        <p>
          My work moves between full-stack development, cybersecurity, AI/ML and
          <strong>game development</strong>. What keeps me here is the same thing every time:
          turning a messy real-world problem into something clean, secure and genuinely
          pleasant to use. This blog is where I think out loud about that process — and
          where you can play a game or two of mine.
        </p>
        <p class="aside">
          When I'm away from the keyboard, I draw pencil portraits, dig into security
          write-ups, and tinker with whatever technology is new and slightly intimidating.
        </p>

        <div class="facts">
          <div class="fact"><span class="k">Based in</span><span class="v">Nairobi, Kenya</span></div>
          <div class="fact"><span class="k">Focus</span><span class="v">Web · Security · AI · Games</span></div>
          <div class="fact"><span class="k">Status</span><span class="v avail"><i></i> Open to collaborations</span></div>
        </div>

        <a href="#newsletter" class="btn btn-primary" @click="scrollTo">Work with me</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (e: Event) => {
  e.preventDefault()
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.about { background: var(--paper-2); }

.about-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 6vw, 4.5rem);
  align-items: center;
}

.photo-col { position: relative; }
.frame {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: var(--shadow-lg);
  transform: rotate(-2deg);
  transition: transform 0.5s var(--ease);
}
.frame::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius);
  pointer-events: none;
}
.photo-col:hover .frame { transform: rotate(0deg) scale(1.01); }
.frame img { width: 100%; height: 100%; object-fit: cover; }
.signature {
  position: absolute;
  right: -0.4rem;
  bottom: -1.4rem;
  font-family: var(--serif);
  font-style: italic;
  font-size: 2.6rem;
  color: var(--accent);
  transform: rotate(-4deg);
  text-shadow: 0 2px 0 var(--paper);
}

.lead-p { font-size: 1.14rem; line-height: 1.7; color: var(--ink); margin: 1rem 0 1rem; }
.text-col p { font-size: 1.02rem; line-height: 1.75; margin-bottom: 1rem; }
.text-col strong { color: var(--ink); font-weight: 700; }
.aside {
  padding-left: 1.1rem;
  border-left: 3px solid var(--accent);
  color: var(--ink-soft);
}

.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin: 1.8rem 0;
}
.fact { display: flex; flex-direction: column; gap: 0.2rem; }
.fact .k {
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
}
.fact .v { font-size: 1rem; font-weight: 600; color: var(--ink); }
.avail { display: inline-flex; align-items: center; gap: 0.45rem; color: #128a4c; }
.avail i {
  width: 8px; height: 8px; border-radius: 50%;
  background: #17a35c; box-shadow: 0 0 0 4px rgba(23, 163, 92, 0.15);
  animation: floaty 2s ease-in-out infinite;
}

@media (max-width: 860px) {
  .about-grid { grid-template-columns: 1fr; }
  .photo-col { max-width: 340px; }
  .signature { font-size: 2.1rem; }
}
</style>
