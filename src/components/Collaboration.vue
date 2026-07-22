<template>
  <section id="newsletter" class="collab section">
    <div class="container">
      <div class="shell" v-reveal>
        <div class="pitch">
          <span class="eyebrow">Let's talk</span>
          <h2 class="section-title">Have a project in mind?</h2>
          <p>
            Tell me about it. Whether you need a web developer, a mobile app, or a technical
            partner to think it through — send a few details and I'll reply within 24 hours.
          </p>
          <ul class="perks">
            <li>Full-stack web &amp; mobile builds</li>
            <li>AI/ML integration &amp; backends</li>
            <li>Consulting, mentorship &amp; redesigns</li>
          </ul>
        </div>

        <form @submit.prevent="submitForm" class="form">
          <div class="fg">
            <label for="name">Your name *</label>
            <input id="name" v-model="form.name" type="text" placeholder="Jane Doe" required />
          </div>
          <div class="fg">
            <label for="email">Email *</label>
            <input id="email" v-model="form.email" type="email" placeholder="jane@example.com" required />
          </div>
          <div class="fg">
            <label for="company">Company / organization</label>
            <input id="company" v-model="form.company" type="text" placeholder="Optional" />
          </div>
          <div class="fg">
            <label for="collaborationType">Type of work *</label>
            <select id="collaborationType" v-model="form.collaborationType" required>
              <option value="">Select…</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack">Full Stack Project</option>
              <option value="AI/ML Integration">AI/ML Integration</option>
              <option value="Consulting">Technical Consulting</option>
              <option value="Mentorship">Mentorship / Training</option>
              <option value="Partnership">Partnership / Business</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="fg full">
            <label for="projectDescription">Project description *</label>
            <textarea id="projectDescription" v-model="form.projectDescription" rows="4"
              placeholder="What are you looking to build?" required></textarea>
          </div>
          <div class="fg">
            <label for="timeline">Timeline *</label>
            <select id="timeline" v-model="form.timeline" required>
              <option value="">Select…</option>
              <option value="ASAP">ASAP</option>
              <option value="1-2 weeks">1–2 weeks</option>
              <option value="1 month">Around 1 month</option>
              <option value="2-3 months">2–3 months</option>
              <option value="3+ months">3+ months / Flexible</option>
            </select>
          </div>
          <div class="fg">
            <label for="budget">Budget (optional)</label>
            <select id="budget" v-model="form.budget">
              <option value="">Not specified</option>
              <option value="< KSH 50,000">Less than KSH 50,000</option>
              <option value="KSH 50,000 - KSH 150,000">KSH 50,000 – 150,000</option>
              <option value="KSH 150,000 - KSH 200,000">KSH 150,000 – 200,000</option>
              <option value="KSH 200,000 - KSH 300,000">KSH 200,000 – 300,000</option>
              <option value="KSH 300,000 - KSH 500,000">KSH 300,000 – 500,000</option>
            </select>
          </div>
          <div class="fg full">
            <label for="notes">Anything else</label>
            <textarea id="notes" v-model="form.notes" rows="2" placeholder="Optional notes"></textarea>
          </div>

          <button type="submit" class="btn btn-primary submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send message</span>
            <span v-else>Sending…</span>
          </button>

          <div v-if="submitSuccess" class="msg ok">
            <span>✓</span> Thank you! I've got your message and will reply within 24 hours.
          </div>
          <div v-if="submitError" class="msg err">
            <span>!</span> {{ submitError }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  company: '',
  collaborationType: '',
  projectDescription: '',
  timeline: '',
  budget: '',
  notes: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

onMounted(() => {
  // Initialize EmailJS with your public key
  emailjs.init('YOUR_PUBLIC_KEY_HERE')
})

const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID_HERE', // Replace with your Service ID
      'YOUR_TEMPLATE_ID_HERE', // Replace with your Template ID
      {
        to_email: 'owenzcolin@gmail.com',
        from_email: form.value.email,
        from_name: form.value.name,
        company: form.value.company || 'Not specified',
        collaboration_type: form.value.collaborationType,
        project_description: form.value.projectDescription,
        timeline: form.value.timeline,
        budget: form.value.budget || 'Not specified',
        notes: form.value.notes || 'None',
        submitted_at: new Date().toLocaleString(),
      }
    )

    submitSuccess.value = true
    form.value = {
      name: '', email: '', company: '', collaborationType: '',
      projectDescription: '', timeline: '', budget: '', notes: '',
    }
    setTimeout(() => { submitSuccess.value = false }, 5000)
  } catch (error) {
    console.error('Email error:', error)
    submitError.value = 'Failed to send. Please email me directly at owenzcolin@gmail.com'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.collab { background: var(--paper-2); }

.shell {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 5vw, 4rem);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.8rem, 4vw, 3.2rem);
  box-shadow: var(--shadow-md);
}

.pitch p { font-size: 1.05rem; line-height: 1.7; margin: 1rem 0 1.4rem; }
.perks { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
.perks li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--ink-soft);
  font-size: 0.98rem;
}
.perks li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.fg { display: flex; flex-direction: column; gap: 0.4rem; }
.fg.full { grid-column: 1 / -1; }

label {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--ink-soft);
}
input, select, textarea {
  font-family: inherit;
  font-size: 0.96rem;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0.7rem 0.85rem;
  outline: none;
  transition: border-color 0.25s var(--ease), box-shadow 0.25s var(--ease), background 0.25s var(--ease);
}
input::placeholder, textarea::placeholder { color: var(--muted); }
input:focus, select:focus, textarea:focus {
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 0 0 3px var(--accent-soft);
}
textarea { resize: vertical; }
select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23d6482b' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
  padding-right: 2.2rem;
}

.submit { grid-column: 1 / -1; margin-top: 0.3rem; }

.msg {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.95rem;
  animation: fadeUp 0.35s ease;
}
.msg span {
  display: grid;
  place-items: center;
  width: 22px; height: 22px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 800;
  flex-shrink: 0;
}
.msg.ok { background: rgba(23, 163, 92, 0.12); color: #0f7a43; }
.msg.ok span { background: #17a35c; color: #fff; }
.msg.err { background: var(--accent-soft); color: var(--accent-deep); }
.msg.err span { background: var(--accent); color: #fff; }

@media (max-width: 860px) {
  .shell { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .form { grid-template-columns: 1fr; }
}
</style>
