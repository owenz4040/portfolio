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
    title: "Rental House Booking System",
    icon: "🏠",
    description: "Full-stack rental house booking platform with Instagram-inspired design, MongoDB database, Flask backend, and Cloudinary image hosting for seamless property management.",
    features: [
      "Instagram-inspired gradient UI design",
      "Admin authentication with JWT tokens",
      "Complete CRUD operations for properties",
      "Multiple image upload with preview",
      "Real-time feedback with toast notifications",
      "MongoDB Atlas database integration",
      "Cloudinary cloud storage",
    ],
    tags: ["Web", "Full-Stack"],
    tech: ["Flask", "MongoDB", "JavaScript", "Cloudinary", "JWT"],
    link: "https://github.com/owenz4040/Rental_System"
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
  padding: 5rem 2rem;
  background: #0f172a;
}

.container {
  max-width: 1200px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(167, 139, 250, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(96, 165, 250, 0.5);
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(96, 165, 250, 0.2);
}

.project-card.featured-card {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.08) 100%);
  border-color: rgba(16, 185, 129, 0.2);
  position: relative;
  overflow: hidden;
}

.project-card.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #34d399, #10b981);
}

.project-card.featured-card:hover {
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 25px 60px rgba(16, 185, 129, 0.2);
}

.project-card.clickable {
  cursor: pointer;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.project-icon {
  font-size: 2.5rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.project-tag {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.project-tag.featured {
  background: rgba(34, 197, 94, 0.2);
  color: #10b981;
}

.project-tag.live {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  animation: pulse-red 2s ease-in-out infinite;
}

@keyframes pulse-red {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0 0 0.8rem 0;
}

.project-description {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.project-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

.project-features li {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  padding-left: 1.5rem;
  position: relative;
}

.project-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #60a5fa;
  font-weight: bold;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tech-badge {
  background: rgba(167, 139, 250, 0.15);
  color: #a78bfa;
  padding: 0.35rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(167, 139, 250, 0.3);
}

.project-link {
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.35);
}

@media (max-width: 768px) {
  .projects {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-card.featured-card {
    grid-column: 1 / -1;
  }
}
</style>
