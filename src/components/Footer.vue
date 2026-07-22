<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <a href="#home" class="brand" @click="scrollTo">
            <span class="mark">CO</span>
            <span class="name">Colin Owen</span>
          </a>
          <p class="blurb">
            Notes on code, security &amp; AI — and the projects behind the words.
            Written and built in Nairobi, Kenya.
          </p>
          <div class="social">
            <a href="https://github.com/owenz4040" target="_blank" rel="noopener" aria-label="GitHub"><img src="/icons/github.svg" alt="GitHub" /></a>
            <a href="https://linkedin.com/in/OwenCmn" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://twitter.com/CmnOwen" target="_blank" rel="noopener" aria-label="X"><img src="/icons/x.svg" alt="X" /></a>
            <a href="mailto:owenzcolin@gmail.com" aria-label="Email"><img src="/icons/email.svg" alt="Email" /></a>
          </div>
        </div>

        <nav class="cols">
          <div class="col">
            <h4>Explore</h4>
            <a href="#writing" @click="scrollTo">Writing</a>
            <a href="#topics" @click="scrollTo">Topics</a>
            <a href="#about" @click="scrollTo">About</a>
          </div>
          <div class="col">
            <h4>Connect</h4>
            <a href="#newsletter" @click="scrollTo">Work with me</a>
            <a href="#contact" @click="scrollTo">Say hello</a>
            <a href="mailto:owenzcolin@gmail.com">Email</a>
          </div>
        </nav>
      </div>

      <div class="bottom">
        <p>© 2026 Colin Owen Mutwiri Nyaga. All rights reserved.</p>
        <p>Built with Vue.js &amp; a lot of coffee.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollTo = (e: Event) => {
  e.preventDefault()
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--paper);
  padding: 4rem 0 2rem;
}

.top {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand { display: inline-flex; align-items: center; gap: 0.65rem; margin-bottom: 1rem; }
.mark {
  display: grid;
  place-items: center;
  width: 38px; height: 38px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-family: var(--serif);
  font-weight: 600;
}
.name { font-family: var(--serif); font-size: 1.3rem; font-weight: 600; color: var(--paper); }

.blurb {
  max-width: 30rem;
  color: rgba(251, 250, 247, 0.6);
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 1.4rem;
}

.social { display: flex; gap: 0.6rem; }
.social a {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.08);
  transition: transform 0.25s var(--ease), background 0.25s var(--ease);
}
.social a:hover { transform: translateY(-4px); background: var(--accent); }
.social img { width: 17px; height: 17px; filter: invert(1) brightness(1.6); }

.cols { display: flex; gap: 3.5rem; }
.col { display: flex; flex-direction: column; gap: 0.7rem; }
.col h4 {
  font-family: var(--sans);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(251, 250, 247, 0.45);
  margin-bottom: 0.3rem;
}
.col a {
  color: rgba(251, 250, 247, 0.8);
  font-size: 0.96rem;
  transition: color 0.25s var(--ease), padding-left 0.25s var(--ease);
}
.col a:hover { color: var(--paper); padding-left: 4px; }

.bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.6rem;
}
.bottom p { color: rgba(251, 250, 247, 0.45); font-size: 0.86rem; }

@media (max-width: 720px) {
  .top { grid-template-columns: 1fr; gap: 2rem; }
  .bottom { flex-direction: column; }
}
</style>
