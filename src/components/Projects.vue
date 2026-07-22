<template>
  <section id="writing" class="writing section">
    <div class="container">
      <div class="head" v-reveal>
        <span class="eyebrow">The archive</span>
        <h2 class="section-title">Writing &amp; projects</h2>
        <p class="section-lead">
          Long-form notes on the things I build — the problems, the decisions, and the
          code behind them. Filter by what you're curious about.
        </p>
      </div>

      <div class="filters" v-reveal>
        <button
          v-for="c in categories"
          :key="c"
          class="filter"
          :class="{ active: active === c }"
          @click="active = c"
        >{{ c }}</button>
      </div>

      <div class="grid">
        <article
          v-for="(post, i) in filtered"
          :key="post.title"
          class="post"
          v-reveal="{ delay: (i % 3) * 90 }"
        >
          <a
            class="post-link"
            :href="post.link || '#newsletter'"
            :target="post.link && !isInternal(post.link) ? '_blank' : undefined"
            :rel="post.link && !isInternal(post.link) ? 'noopener' : undefined"
            @click="onClick(post, $event)"
          >
            <div class="thumb" :style="{ background: post.grad }">
              <img :src="post.img" :alt="post.title" loading="lazy" @error="hide" />
              <span v-if="post.flagship" class="thumb-flag">★ Flagship</span>
              <span class="thumb-cat">{{ post.category }}</span>
            </div>
            <div class="post-body">
              <div class="post-meta">
                <span>{{ post.date }}</span>
                <span class="dot">·</span>
                <span>{{ post.read }}</span>
              </div>
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <span class="post-read ulink">
                {{ post.cta || (post.link ? 'Read more' : 'Notes coming soon') }} →
              </span>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const hide = (e: Event) => {
  ;(e.target as HTMLElement).style.display = 'none'
}

type Post = {
  title: string
  category: string
  date: string
  read: string
  excerpt: string
  img: string
  grad: string
  link?: string
  flagship?: boolean
  cta?: string
}

const isInternal = (l?: string) => !!l && l.startsWith('#')
const onClick = (post: Post, e: MouseEvent) => {
  if (isInternal(post.link)) {
    e.preventDefault()
    document.querySelector(post.link as string)?.scrollIntoView({ behavior: 'smooth' })
  }
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`

const posts: Post[] = [
  {
    title: 'Comrades WiFi — an ISP platform, in development',
    category: 'Web',
    date: 'Jul 2026',
    read: '8 min read',
    excerpt: 'My flagship: an ISP platform for Kenya with an AI support chatbot and a Vue 3 front end. Actively being built and refined — a work in progress.',
    img: u('1558494949-ef010cbdcc31'),
    grad: 'linear-gradient(135deg,#1d3a8a,#0ea5e9)',
    link: 'https://comradeswifi.net',
    flagship: true,
  },
  {
    title: 'Breach — a browser game you can play right now',
    category: 'Games',
    date: 'Jul 2026',
    read: 'Playable',
    excerpt: 'I build games too. Breach is a hacker-vs-firewall grid duel against an AI version of me — jump in and try to reach the core. More games coming to my Play Store channel soon.',
    img: u('1511512578047-dfb367046420'),
    grad: 'linear-gradient(135deg,#312e81,#7c3aed)',
    link: '#play',
    cta: 'Play now',
  },
  {
    title: 'Real-time object detection with YOLOv8 and Flutter',
    category: 'AI / ML',
    date: 'Jun 2026',
    read: '9 min read',
    excerpt: 'Wiring a low-latency computer-vision pipeline to a responsive mobile UI so the camera can describe the world in real time.',
    img: u('1526374965328-7f61d4dc18c5'),
    grad: 'linear-gradient(135deg,#4c1d95,#7c3aed)',
  },
  {
    title: 'Turning a YOLOv8 model into a scalable Flask API',
    category: 'AI / ML',
    date: 'May 2026',
    read: '7 min read',
    excerpt: 'From a research notebook to a REST backend: batching, image handling, and keeping response times honest under load.',
    img: u('1518770660439-4636190af475'),
    grad: 'linear-gradient(135deg,#7f1d1d,#ef4444)',
  },
  {
    title: 'A live rental platform, shipped on Render',
    category: 'Web',
    date: 'May 2026',
    read: '6 min read',
    excerpt: 'Building and deploying a property-management front end with clean flows, an admin panel, and a responsive layout.',
    img: u('1488590528505-98d2b5aba04b'),
    grad: 'linear-gradient(135deg,#064e3b,#10b981)',
    link: 'https://cynthia-frontend.onrender.com',
  },
  {
    title: 'Content moderation & analytics: my final-year project',
    category: 'AI / ML',
    date: 'Apr 2026',
    read: '11 min read',
    excerpt: 'A capstone in real-time monitoring — analysing content, visualising signals, and supporting multiple languages.',
    img: u('1451187580459-43490279c0fa'),
    grad: 'linear-gradient(135deg,#701a75,#ec4899)',
    link: 'https://github.com/owenz4040/final-year-project',
  },
  {
    title: 'Building a church management system in Flutter',
    category: 'Mobile',
    date: 'Mar 2026',
    read: '8 min read',
    excerpt: 'Role-based access, real-time attendance and email auth for a real congregation — and the data model that held it together.',
    img: u('1512941937669-90a1b58e7e9c'),
    grad: 'linear-gradient(135deg,#7c2d12,#f59e0b)',
  },
  {
    title: 'Designing an accessible voice assistant',
    category: 'Mobile',
    date: 'Feb 2026',
    read: '6 min read',
    excerpt: 'Speech-to-text navigation built accessibility-first, so visually impaired users can move through an app by voice.',
    img: u('1504384308090-c894fdcc538d'),
    grad: 'linear-gradient(135deg,#134e4a,#14b8a6)',
  },
  {
    title: 'A routing & navigation backend with TomTom',
    category: 'Security & Systems',
    date: 'Jan 2026',
    read: '7 min read',
    excerpt: 'Real-time tracking, route calculation and distance measurement — the server work behind turn-by-turn voice navigation.',
    img: u('1558494949-ef010cbdcc31'),
    grad: 'linear-gradient(135deg,#1e293b,#64748b)',
    link: 'https://github.com/owenz4040/Rental_System',
  },
  {
    title: 'Regex-driven logistics processing in Python',
    category: 'Security & Systems',
    date: 'Nov 2024',
    read: '5 min read',
    excerpt: 'Validating IDs, structuring records and building modular menus for a transportation-logistics backend.',
    img: u('1461749280684-dccba630e2f6'),
    grad: 'linear-gradient(135deg,#312e81,#6366f1)',
  },
  {
    title: 'Lessons from a Java Swing ticketing system',
    category: 'Web',
    date: 'Sep 2024',
    read: '5 min read',
    excerpt: 'A desktop app for support tickets and customer records, with a live dashboard of open, closed and feedback stats.',
    img: u('1519389950473-47ba0277781c'),
    grad: 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
  },
]

const categories = ['All', 'Web', 'Games', 'AI / ML', 'Mobile', 'Security & Systems']
const active = ref('All')
const filtered = computed(() =>
  active.value === 'All' ? posts : posts.filter((p) => p.category === active.value)
)
</script>

<style scoped>
.writing { background: var(--paper-2); }

.head { margin-bottom: 1.8rem; }

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.6rem;
}
.filter {
  font-family: var(--sans);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: #fff;
  border: 1px solid var(--line);
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  cursor: pointer;
  transition: color 0.25s var(--ease), background 0.25s var(--ease),
    border-color 0.25s var(--ease), transform 0.25s var(--ease);
}
.filter:hover { transform: translateY(-2px); border-color: var(--ink); }
.filter.active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 8px 18px rgba(214, 72, 43, 0.24);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.6rem;
}

.post {
  border-radius: var(--radius);
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}
.post:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.post-link { display: flex; flex-direction: column; height: 100%; }

.thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.thumb img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}
.post:hover .thumb img { transform: scale(1.07); }
.thumb-flag {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  font-family: var(--sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: var(--accent);
  padding: 0.32rem 0.72rem;
  border-radius: 100px;
  box-shadow: var(--shadow-md);
}

.thumb-cat {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  font-family: var(--sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink);
  background: rgba(251, 250, 247, 0.92);
  padding: 0.32rem 0.72rem;
  border-radius: 100px;
  backdrop-filter: blur(4px);
}

.post-body {
  padding: 1.4rem 1.5rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.post-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 0.7rem;
}
.dot { color: var(--line); }
.post-title {
  font-size: 1.32rem;
  line-height: 1.2;
  margin-bottom: 0.7rem;
}
.post-excerpt {
  font-size: 0.96rem;
  line-height: 1.6;
  color: var(--ink-soft);
  margin-bottom: 1.2rem;
  flex: 1;
}
.post-read { color: var(--accent); font-size: 0.95rem; align-self: flex-start; }

@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
