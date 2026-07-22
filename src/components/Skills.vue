<template>
  <section id="topics" class="topics section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">What I write about</span>
        <h2 class="section-title">Topics &amp; tools</h2>
        <p class="section-lead">
          The recurring threads across my work — and the technologies I reach for when
          building each one.
        </p>
      </div>

      <div class="topic-grid">
        <div
          v-for="(t, i) in topics"
          :key="t.name"
          class="topic"
          v-reveal="{ delay: (i % 3) * 80 }"
        >
          <div class="topic-top">
            <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="count">{{ t.count }} posts</span>
          </div>
          <h3 class="topic-name">{{ t.name }}</h3>
          <p class="topic-desc">{{ t.desc }}</p>
          <div class="tools">
            <span v-for="tool in t.tools" :key="tool">{{ tool }}</span>
          </div>
          <span class="bar" aria-hidden="true"></span>
        </div>
      </div>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="track">
        <span v-for="w in loop" :key="w.k" class="word">{{ w.t }}<i>◆</i></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const topics = [
  { name: 'Web Development', count: 12, desc: 'Full-stack platforms, front ends and the deploy pipelines that ship them.', tools: ['Vue.js', 'JavaScript', 'REST APIs', 'Render'] },
  { name: 'Cybersecurity', count: 6, desc: 'Pursuing (ISC)² CC — vulnerability testing, networks, encryption and secure systems.', tools: ['Vulnerability Testing', 'Networking', 'Encryption', 'VPNs'] },
  { name: 'AI & Machine Learning', count: 8, desc: 'Computer vision and intelligent systems, from model to production API.', tools: ['Python', 'YOLOv8', 'Flask', 'Real-time'] },
  { name: 'Game Development', count: 3, desc: 'Browser games and interactive experiences — with more headed to my Play Store channel soon.', tools: ['JavaScript', 'Canvas', 'Game Loops', 'AI Opponents'] },
  { name: 'Mobile Development', count: 7, desc: 'Cross-platform apps with a focus on accessibility and real-world use.', tools: ['Flutter', 'Firebase', 'TTS / STT', 'Camera'] },
  { name: 'Backend & Data', count: 5, desc: 'APIs, validation, databases and the plumbing that keeps products honest.', tools: ['MongoDB', 'Regex', 'Java', 'Node'] },
  { name: 'Design & UX', count: 4, desc: 'Interfaces, redesigns and performance work — making software feel effortless.', tools: ['UI/UX', 'SEO', 'Responsive', 'Prototyping'] },
]

const words = ['Vue.js', 'Python', 'Flutter', 'Firebase', 'MongoDB', 'YOLOv8', 'Flask', 'Cybersecurity', 'Game Dev', 'REST APIs', 'Java', 'Canvas', 'UI/UX']
const loop = [...words, ...words].map((t, k) => ({ t, k }))
</script>

<style scoped>
.topics { background: var(--paper); overflow: hidden; }
.head { margin-bottom: 2.6rem; }

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.4rem;
}

.topic {
  position: relative;
  padding: 1.8rem;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
}
.topic:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.topic:hover .bar { transform: scaleX(1); }

.topic-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.num {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--accent);
}
.count {
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
}

.topic-name { font-size: 1.35rem; margin-bottom: 0.55rem; }
.topic-desc { font-size: 0.95rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1.1rem; }

.tools { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.tools span {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--paper-2);
  border: 1px solid var(--line);
  padding: 0.28rem 0.65rem;
  border-radius: 100px;
}

.bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease);
}

.marquee {
  margin-top: 4rem;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 1.4rem 0;
  overflow: hidden;
  white-space: nowrap;
}
.track {
  display: inline-flex;
  align-items: center;
  animation: marquee 26s linear infinite;
}
.word {
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 1.6rem;
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--ink);
}
.word i { color: var(--accent); font-size: 0.7rem; font-style: normal; }
</style>
