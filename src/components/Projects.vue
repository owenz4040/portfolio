<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" 
          :class="['project-card', { 'featured-card': project.tags.includes('Featured'), 'clickable': project.link }]"
          @click="project.link && openProject(project.link)">
          <div class="project-header">
            <div class="project-icon">{{ project.icon }}</div>
            <div class="project-meta">
              <span v-for="tag in project.tags" :key="tag" :class="['project-tag', tag.toLowerCase()]">{{ tag }}</span>
            </div>
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <ul class="project-features">
            <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
          </ul>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="project-link">
            Visit Website ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openProject = (link: string) => {
  window.open(link, '_blank')
}

const projects = [
  {
    id: 0,
    title: "Comrades WiFi",
    icon: "🌐",
    description: "A beautiful, modern Vue.js frontend for Comrades WiFi - Kenya's premier telecommunication system with AI-powered chatbot assistance, entertainment hub, and responsive design.",
    features: [
      "Full-stack platform with real user base",
      "10k+ active customers across 50+ areas",
      "AI-powered chatbot (OpenRouter/Llama 3.2)",
      "Entertainment hub with movies & sports",
      "99.9% uptime production system",
      "24/7 customer support infrastructure",
    ],
    tags: ["Live", "Full-Stack", "Featured"],
    tech: ["Vue 3", "Vite", "OpenAI API", "TMDB API"],
    link: "https://comradeswifi.net"
  },
  {
    id: 1,
    title: "Customer Service Ticketing System",
    icon: "🎫",
    description: "Full desktop application for managing customer support tickets and records with real-time dashboard analytics.",
    features: [
      "Add, view, search, and delete tickets",
      "Comprehensive customer record management",
      "Dashboard with statistics (open, closed, feedback)",
      "Data validation and error handling",
    ],
    tags: ["Desktop"],
    tech: ["Java", "Swing", "ArrayList"],
  },
  {
    id: 2,
    title: "VisionTrack",
    icon: "👁️",
    description: "Real-time object detection mobile application designed to assist users with environment awareness using AI.",
    features: [
      "Real-time object detection via camera",
      "Flutter responsive UI",
      "Python YOLOv8 backend integration",
      "Low-latency processing pipeline",
    ],
    tags: ["Mobile", "AI"],
    tech: ["Flutter", "Python", "YOLOv8"],
  },
  {
    id: 3,
    title: "Church Management System",
    icon: "⛪",
    description: "Comprehensive mobile app for managing church operations, roles, and engagement at Ark Youth Church.",
    features: [
      "Role-based access control (Admin, Pastor, Shepherd, etc.)",
      "Real-time attendance tracking",
      "Department & squad management",
      "Email authentication system",
    ],
    tags: ["Mobile", "Production"],
    tech: ["Flutter", "Firebase"],
  },
  {
    id: 4,
    title: "Transportation Logistics System",
    icon: "🚚",
    description: "Backend system for managing transportation logistics with robust data processing and validation.",
    features: [
      "Regex-based ID validation",
      "Modular menu systems",
      "Structured data processing",
      "Real-time input handling",
    ],
    tags: ["Backend"],
    tech: ["Python", "Regex", "Data Processing"],
  },
  {
    id: 5,
    title: "Rental Management Website",
    icon: "🏠",
    description: "Live rental management website for browsing and managing rental properties with a modern UI and smooth user flows.",
    features: [
      "Live deployed frontend on Render",
      "Property browsing and listing UI",
      "Admin access panel experience",
      "Responsive design for mobile and desktop",
    ],
    tags: ["Web", "Full-Stack", "Live"],
    tech: ["Vue 3", "Vite", "Render"],
    link: "https://cynthia-frontend.onrender.com"
  },
  {
    id: 6,
    title: "Tourism Fund Website Redesign",
    icon: "✈️",
    description: "Complete redesign project focusing on modern design, SEO optimization, and performance improvements.",
    features: [
      "Modern, responsive UI/UX",
      "SEO optimization",
      "Performance improvements",
      "Project planning & costing",
    ],
    tags: ["Web", "Design"],
    tech: ["Vue.js", "SEO", "UX Design"],
  },
  {
    id: 7,
    title: "Library Management System",
    icon: "📚",
    description: "Desktop-based library system for managing book records and borrowing/return operations.",
    features: [
      "Complete book record management",
      "Borrowing and return tracking",
      "Library inventory system",
      "Member management",
    ],
    tags: ["Desktop"],
    tech: ["Visual Basic", "Database"],
  },
  {
    id: 8,
    title: "Voice Assistant System",
    icon: "🎤",
    description: "Accessibility-focused voice assistant for visually impaired users with speech-to-text navigation.",
    features: [
      "Voice command processing",
      "Speech-to-text navigation",
      "Accessibility-first design",
      "Mobile integration",
    ],
    tags: ["Mobile", "Accessibility"],
    tech: ["Flutter", "TTS/STT", "Voice"],
  },
  {
    id: 9,
    title: "YOLOv8 Flask Backend",
    icon: "🔧",
    description: "Converted object detection system into scalable Flask API backend for real-time processing.",
    features: [
      "REST API endpoints",
      "Real-time image processing",
      "Flask framework integration",
      "Mobile app connectivity",
    ],
    tags: ["Backend", "AI"],
    tech: ["Flask", "Python", "YOLOv8", "API"],
  },
  {
    id: 10,
    title: "Routing & Navigation Backend",
    icon: "🗺️",
    description: "Advanced location services backend with real-time tracking, route calculation, and voice navigation.",
    features: [
      "Real-time location tracking",
      "Route calculation engine",
      "Distance measurement",
      "Voice navigation integration",
      "Saved locations management",
    ],
    tags: ["Backend", "Location Services"],
    tech: ["MongoDB", "TomTom API", "Real-time"],
    link: "https://github.com/owenz4040/Rental_System"
  },
  {
    id: 11,
    title: "Vue.js Login Page",
    icon: "🔐",
    description: "Clean and modern authentication interface built with Vue.js for user account access.",
    features: [
      "Email/password authentication",
      "Form validation",
      "Responsive design",
      "Vue.js framework",
    ],
    tags: ["Web"],
    tech: ["Vue.js"],
    link: "https://github.com/owenz4040/vuejs-project"
  },
  {
    id: 12,
    title: "Final Year Project",
    icon: "🎓",
    description: "Comprehensive final year project featuring content moderation, analytics, and real-time monitoring systems.",
    features: [
      "Content analysis & moderation",
      "Real-time monitoring dashboard",
      "Analytics visualization",
      "Multi-language support",
    ],
    tags: ["Academic", "Full-Stack"],
    tech: ["JavaScript", "Python", "MongoDB"],
    link: "https://github.com/owenz4040/final-year-project"
  },
  {
    id: 13,
    title: "Portfolio & GitHub Pages",
    icon: "👨‍💻",
    description: "Personal portfolio website hosted on GitHub Pages with custom domain integration (colinowen.me).",
    features: [
      "Custom domain setup",
      "GitHub Pages hosting",
      "Responsive portfolio layout",
      "Project showcase",
    ],
    tags: ["Web", "Portfolio"],
    tech: ["GitHub Pages", "Custom Domain"],
    link: "https://github.com/owenz4040/owenz4040.github.io"
  },
];
</script>

<style scoped>
.projects {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
}

.container {
  max-width: 1400px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  border: 1.5px solid var(--accent-border);
  border-radius: 1.2rem;
  padding: 2.2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  border-color: var(--primary-cyan);
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(0, 212, 255, 0.25);
}

.project-card.featured-card {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(107, 95, 255, 0.12) 100%);
  border-color: var(--primary-cyan);
  position: relative;
  overflow: hidden;
}

.project-card.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--accent-gradient);
}

.project-card.featured-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 40px 100px rgba(0, 212, 255, 0.35);
}

.project-card.clickable {
  cursor: pointer;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.8rem;
}

.project-icon {
  font-size: 2.8rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: flex-end;
}

.project-tag {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(107, 95, 255, 0.15) 100%);
  color: var(--primary-cyan);
  padding: 0.35rem 0.9rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid rgba(0, 212, 255, 0.2);
  letter-spacing: 0.5px;
}

.project-tag.featured {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(107, 95, 255, 0.2) 100%);
  color: var(--primary-cyan);
  border-color: var(--accent-border);
}

.project-tag.live {
  background: rgba(255, 107, 107, 0.15);
  color: var(--primary-red);
  border-color: rgba(255, 107, 107, 0.3);
  animation: glowPulse 2s ease-in-out infinite;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.8rem 0;
  letter-spacing: -0.5px;
}

.project-description {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.3rem;
}

.project-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.8rem 0;
  flex-grow: 1;
}

.project-features li {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
  padding-left: 1.8rem;
  position: relative;
  line-height: 1.6;
}

.project-features li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--primary-cyan);
  font-weight: bold;
  letter-spacing: 0.5px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
}

.tech-badge {
  background: linear-gradient(135deg, rgba(107, 95, 255, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);
  color: var(--primary-purple);
  padding: 0.4rem 0.95rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid rgba(107, 95, 255, 0.3);
  letter-spacing: 0.3px;
}

.project-link {
  margin-top: 1.8rem;
  padding: 0.9rem 1.8rem;
  background: var(--accent-gradient);
  color: white;
  text-decoration: none;
  border-radius: 0.7rem;
  font-weight: 800;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  box-shadow: 0 12px 30px rgba(0, 212, 255, 0.3);
  letter-spacing: 0.5px;
}

.project-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 50px rgba(0, 212, 255, 0.5);
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .project-card {
    padding: 1.8rem;
  }

  .project-card.featured-card {
    grid-column: 1 / -1;
  }
}
</style>
