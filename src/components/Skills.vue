<template>
  <section class="skills">
    <div class="container">
      <h2 class="section-title">Core Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <div class="category-icon">💻</div>
          <h3>Programming & Development</h3>
          <ul class="skill-list">
            <li><span class="badge java">Java</span> - Desktop Applications (Swing)</li>
            <li><span class="badge python">Python</span> - AI, Scripting, Backend</li>
            <li><span class="badge javascript">JavaScript</span> - Web Development</li>
            <li><span class="badge flutter">Flutter</span> - Mobile Apps</li>
            <li><span class="badge visualbasic">Visual Basic</span> - Legacy Systems</li>
          </ul>
        </div>

        <div class="skill-category">
          <div class="category-icon">🌐</div>
          <h3>Web & Backend</h3>
          <ul class="skill-list">
            <li><span class="badge firebase">Firebase</span> - Auth & Realtime DB</li>
            <li><span class="badge mongodb">MongoDB</span> - Database Systems</li>
            <li><span class="badge rest">REST APIs</span> - Backend Integration</li>
            <li><span class="badge vue">Vue.js</span> - Frontend Framework</li>
            <li><span class="badge seo">SEO & UX</span> - Optimization</li>
          </ul>
        </div>

        <div class="skill-category">
          <div class="category-icon">🔐</div>
          <h3>Cybersecurity & Networking</h3>
          <ul class="skill-list">
            <li><span class="badge pen">Vulnerability Testing</span></li>
            <li><span class="badge net">Network Administration</span></li>
            <li><span class="badge vpn">VPNs & Secure Systems</span></li>
            <li><span class="badge encryption">Encryption & Protocols</span></li>
            <li><span class="badge security">Mobile Security</span></li>
          </ul>
        </div>

        <div class="skill-category">
          <div class="category-icon">📱</div>
          <h3>Mobile Development</h3>
          <ul class="skill-list">
            <li><span class="badge arch">Flutter Architecture</span></li>
            <li><span class="badge speech">Speech-to-Text/TTS</span></li>
            <li><span class="badge detection">Real-time Object Detection</span></li>
            <li><span class="badge responsive">Responsive Design</span></li>
            <li><span class="badge camera">Camera Integration</span></li>
          </ul>
        </div>

        <div class="skill-category">
          <div class="category-icon">🤖</div>
          <h3>AI & Machine Learning</h3>
          <ul class="skill-list">
            <li><span class="badge yolo">YOLOv8</span> - Object Detection</li>
            <li><span class="badge flask">Flask</span> - Backend APIs</li>
            <li><span class="badge python">Python</span> - ML Implementation</li>
            <li><span class="badge realtime">Real-time Processing</span></li>
            <li><span class="badge integration">System Integration</span></li>
          </ul>
        </div>

        <div class="skill-category">
          <div class="category-icon">⚡</div>
          <h3>Other Strengths</h3>
          <ul class="skill-list">
            <li><span class="badge ui">UI/UX Design</span></li>
            <li><span class="badge automation">System Automation</span></li>
            <li><span class="badge validation">Data Validation & Regex</span></li>
            <li><span class="badge performance">Performance Optimization</span></li>
            <li><span class="badge creative">Creative Problem Solving</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.skills {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
}

.skill-category {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(107, 95, 255, 0.08) 100%);
  padding: 2.3rem;
  border-radius: 1.2rem;
  border: 1.5px solid var(--accent-border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.skill-category:hover {
  border-color: var(--primary-cyan);
  transform: translateY(-12px);
  box-shadow: 0 30px 80px rgba(0, 212, 255, 0.2);
}

.category-icon {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  display: inline-block;
}

.skill-category h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-list li {
  color: var(--text-tertiary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.badge {
  display: inline-block;
  padding: 0.4rem 0.95rem;
  border-radius: 0.6rem;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  background: rgba(0, 212, 255, 0.15);
  color: var(--primary-cyan);
  border: 1px solid rgba(0, 212, 255, 0.3);
  letter-spacing: 0.3px;
}

.badge.java { background: rgba(244, 117, 0, 0.15); color: #ff9500; border-color: rgba(244, 117, 0, 0.3); }
.badge.python { background: rgba(53, 102, 165, 0.15); color: #3b82f6; border-color: rgba(53, 102, 165, 0.3); }
.badge.javascript { background: rgba(240, 193, 33, 0.15); color: #fbbf24; border-color: rgba(240, 193, 33, 0.3); }
.badge.flutter { background: rgba(0, 188, 212, 0.15); color: #06b6d4; border-color: rgba(0, 188, 212, 0.3); }
.badge.visualbasic { background: rgba(0, 120, 215, 0.15); color: #0ea5e9; border-color: rgba(0, 120, 215, 0.3); }
.badge.firebase { background: rgba(255, 193, 7, 0.15); color: #fcd34d; border-color: rgba(255, 193, 7, 0.3); }
.badge.mongodb { background: rgba(19, 194, 98, 0.15); color: #10b981; border-color: rgba(19, 194, 98, 0.3); }
.badge.rest { background: rgba(100, 200, 255, 0.15); color: #00d4ff; border-color: rgba(100, 200, 255, 0.3); }
.badge.vue { background: rgba(52, 211, 153, 0.15); color: #2dd4bf; border-color: rgba(52, 211, 153, 0.3); }
.badge.seo { background: rgba(167, 139, 250, 0.15); color: #c084fc; border-color: rgba(167, 139, 250, 0.3); }
.badge.pen { background: rgba(239, 68, 68, 0.15); color: #f87171; border-color: rgba(239, 68, 68, 0.3); }
.badge.net { background: rgba(96, 165, 250, 0.15); color: #00d4ff; border-color: rgba(96, 165, 250, 0.3); }
.badge.vpn { background: rgba(139, 92, 246, 0.15); color: #c084fc; border-color: rgba(139, 92, 246, 0.3); }
.badge.encryption { background: rgba(244, 63, 94, 0.15); color: #ff6b9d; border-color: rgba(244, 63, 94, 0.3); }
.badge.security { background: rgba(20, 184, 166, 0.15); color: #14b8a6; border-color: rgba(20, 184, 166, 0.3); }
.badge.arch { background: rgba(0, 188, 212, 0.15); color: #06b6d4; border-color: rgba(0, 188, 212, 0.3); }
.badge.speech { background: rgba(139, 92, 246, 0.15); color: #c084fc; border-color: rgba(139, 92, 246, 0.3); }
.badge.detection { background: rgba(168, 85, 247, 0.15); color: #d8b4fe; border-color: rgba(168, 85, 247, 0.3); }
.badge.responsive { background: rgba(96, 165, 250, 0.15); color: #00d4ff; border-color: rgba(96, 165, 250, 0.3); }
.badge.camera { background: rgba(139, 92, 246, 0.15); color: #c084fc; border-color: rgba(139, 92, 246, 0.3); }
.badge.yolo { background: rgba(244, 117, 0, 0.15); color: #ff9500; border-color: rgba(244, 117, 0, 0.3); }
.badge.flask { background: rgba(100, 100, 100, 0.15); color: #d1d5db; border-color: rgba(100, 100, 100, 0.3); }
.badge.realtime { background: rgba(239, 68, 68, 0.15); color: #f87171; border-color: rgba(239, 68, 68, 0.3); }
.badge.integration { background: rgba(167, 139, 250, 0.15); color: #c084fc; border-color: rgba(167, 139, 250, 0.3); }
.badge.ui { background: rgba(236, 72, 153, 0.15); color: #f472b6; border-color: rgba(236, 72, 153, 0.3); }
.badge.automation { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.3); }
.badge.validation { background: rgba(168, 85, 247, 0.15); color: #d8b4fe; border-color: rgba(168, 85, 247, 0.3); }
.badge.performance { background: rgba(34, 197, 94, 0.15); color: #86efac; border-color: rgba(34, 197, 94, 0.3); }
.badge.creative { background: rgba(226, 232, 240, 0.15); color: #e2e8f0; border-color: rgba(226, 232, 240, 0.3); }

@media (max-width: 768px) {
  .skills {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .skill-category {
    padding: 1.8rem;
  }

  .skill-category h3 {
    font-size: 1.1rem;
  }
}
</style>
