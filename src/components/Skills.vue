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
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(167, 139, 250, 0.08) 100%);
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.15);
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(96, 165, 250, 0.2);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-category h3 {
  color: #e2e8f0;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-list li {
  color: #cbd5e1;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.badge.java { background: rgba(244, 117, 0, 0.2); color: #f47500; border-color: rgba(244, 117, 0, 0.3); }
.badge.python { background: rgba(53, 102, 165, 0.2); color: #3566a5; border-color: rgba(53, 102, 165, 0.3); }
.badge.javascript { background: rgba(240, 193, 33, 0.2); color: #f0c121; border-color: rgba(240, 193, 33, 0.3); }
.badge.flutter { background: rgba(0, 188, 212, 0.2); color: #00bcd4; border-color: rgba(0, 188, 212, 0.3); }
.badge.visualbasic { background: rgba(0, 120, 215, 0.2); color: #0078d7; border-color: rgba(0, 120, 215, 0.3); }
.badge.firebase { background: rgba(255, 193, 7, 0.2); color: #ffc107; border-color: rgba(255, 193, 7, 0.3); }
.badge.mongodb { background: rgba(19, 194, 98, 0.2); color: #13c262; border-color: rgba(19, 194, 98, 0.3); }
.badge.rest { background: rgba(100, 200, 255, 0.2); color: #64c8ff; border-color: rgba(100, 200, 255, 0.3); }
.badge.vue { background: rgba(52, 211, 153, 0.2); color: #34d399; border-color: rgba(52, 211, 153, 0.3); }
.badge.seo { background: rgba(167, 139, 250, 0.2); color: #a78bfa; border-color: rgba(167, 139, 250, 0.3); }
.badge.pen { background: rgba(239, 68, 68, 0.2); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }
.badge.net { background: rgba(96, 165, 250, 0.2); color: #60a5fa; border-color: rgba(96, 165, 250, 0.3); }
.badge.vpn { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; border-color: rgba(139, 92, 246, 0.3); }
.badge.encryption { background: rgba(244, 63, 94, 0.2); color: #f43f5e; border-color: rgba(244, 63, 94, 0.3); }
.badge.security { background: rgba(20, 184, 166, 0.2); color: #14b8a6; border-color: rgba(20, 184, 166, 0.3); }
.badge.arch { background: rgba(0, 188, 212, 0.2); color: #00bcd4; border-color: rgba(0, 188, 212, 0.3); }
.badge.speech { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; border-color: rgba(139, 92, 246, 0.3); }
.badge.detection { background: rgba(82, 82, 82, 0.2); color: #52525b; border-color: rgba(82, 82, 82, 0.3); }
.badge.responsive { background: rgba(96, 165, 250, 0.2); color: #60a5fa; border-color: rgba(96, 165, 250, 0.3); }
.badge.camera { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; border-color: rgba(139, 92, 246, 0.3); }
.badge.yolo { background: rgba(244, 117, 0, 0.2); color: #f47500; border-color: rgba(244, 117, 0, 0.3); }
.badge.flask { background: rgba(100, 100, 100, 0.2); color: #888888; border-color: rgba(100, 100, 100, 0.3); }
.badge.realtime { background: rgba(239, 68, 68, 0.2); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }
.badge.integration { background: rgba(167, 139, 250, 0.2); color: #a78bfa; border-color: rgba(167, 139, 250, 0.3); }
.badge.ui { background: rgba(236, 72, 153, 0.2); color: #ec4899; border-color: rgba(236, 72, 153, 0.3); }
.badge.automation { background: rgba(59, 130, 246, 0.2); color: #3b82f6; border-color: rgba(59, 130, 246, 0.3); }
.badge.validation { background: rgba(168, 85, 247, 0.2); color: #a855f7; border-color: rgba(168, 85, 247, 0.3); }
.badge.performance { background: rgba(34, 197, 94, 0.2); color: #22c55e; border-color: rgba(34, 197, 94, 0.3); }
.badge.creative { background: rgba(226, 232, 240, 0.2); color: #e2e8f0; border-color: rgba(226, 232, 240, 0.3); }

@media (max-width: 768px) {
  .skills {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-category h3 {
    font-size: 1.1rem;
  }
}
</style>
