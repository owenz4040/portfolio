<template>
  <section id="collaboration" class="collaboration">
    <div class="container">
      <h2 class="section-title">Let's Collaborate</h2>
      <p class="collaboration-intro">
        Tell me about your project or collaboration idea. Whether you need a web developer, mobile app creator, or technical consultant, let's explore how we can work together.
      </p>
      
      <div class="form-container">
        <form @submit.prevent="submitForm" class="collaboration-form">
          <!-- Name -->
          <div class="form-group">
            <label for="name" class="form-label">Your Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="John Doe"
              required
              class="form-input"
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email" class="form-label">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="john@example.com"
              required
              class="form-input"
            />
          </div>

          <!-- Company/Organization -->
          <div class="form-group">
            <label for="company" class="form-label">Company/Organization</label>
            <input 
              type="text" 
              id="company" 
              v-model="form.company" 
              placeholder="Your company name"
              class="form-input"
            />
          </div>

          <!-- Collaboration Type -->
          <div class="form-group">
            <label for="collaborationType" class="form-label">Type of Collaboration *</label>
            <select 
              id="collaborationType" 
              v-model="form.collaborationType" 
              required
              class="form-input"
            >
              <option value="">Select collaboration type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack">Full Stack Project</option>
              <option value="AI/ML Integration">AI/ML Integration</option>
              <option value="Consulting">Technical Consulting</option>
              <option value="Mentorship">Mentorship/Training</option>
              <option value="Partnership">Partnership/Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Project Description -->
          <div class="form-group">
            <label for="projectDescription" class="form-label">Project Description *</label>
            <textarea 
              id="projectDescription" 
              v-model="form.projectDescription" 
              placeholder="Describe what you're looking to build or collaborate on..."
              rows="5"
              required
              class="form-input textarea"
            ></textarea>
          </div>

          <!-- Timeline -->
          <div class="form-group">
            <label for="timeline" class="form-label">Timeline *</label>
            <select 
              id="timeline" 
              v-model="form.timeline" 
              required
              class="form-input"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP (Start immediately)</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">Around 1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3+ months">3+ months / Flexible</option>
            </select>
          </div>

          <!-- Budget Range -->
          <div class="form-group">
            <label for="budget" class="form-label">Budget Range (Optional)</label>
            <select 
              id="budget" 
              v-model="form.budget"
              class="form-input"
            >
              <option value="">Not specified</option>
              <option value="< KSH 50,000">Less than KSH 50,000</option>
              <option value="KSH 50,000 - KSH 150,000">KSH 50,000 - KSH 150,000</option>
              <option value="KSH 150,000 - KSH 200,000">KSH 150,000 - KSH 200,000</option>
              <option value="KSH 200,000 - KSH 300,000">KSH 200,000 - KSH 300,000</option>
              <option value="KSH 300,000 - KSH 500,000">KSH 300,000 - KSH 500,00０</option>
            </select>
          </div>

          <!-- Additional Notes -->
          <div class="form-group">
            <label for="notes" class="form-label">Additional Notes</label>
            <textarea 
              id="notes" 
              v-model="form.notes" 
              placeholder="Anything else you'd like to share..."
              rows="3"
              class="form-input textarea"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting" class="btn-text">Send Collaboration Request</span>
            <span v-else class="btn-text">Sending...</span>
            <span class="btn-icon">→</span>
          </button>

          <!-- Success Message -->
          <div v-if="submitSuccess" class="success-message">
            <span class="success-icon">✓</span>
            Thank you! I've received your collaboration request. I'll get back to you within 24 hours.
          </div>

          <!-- Error Message -->
          <div v-if="submitError" class="error-message">
            <span class="error-icon">✕</span>
            {{ submitError }}
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
    // Send email using EmailJS
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
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      collaborationType: '',
      projectDescription: '',
      timeline: '',
      budget: '',
      notes: '',
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Email error:', error)
    submitError.value = 'Failed to send email. Please try again or email me directly at owenzcolin@gmail.com'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.collaboration {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #0a0e27 0%, #0f172a 100%);
  position: relative;
  overflow: hidden;
}

.collaboration::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.5), transparent);
}

.collaboration::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-reverse 10s ease-in-out infinite;
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(50px) translateX(30px); }
}

.container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.collaboration-intro {
  text-align: center;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.form-container {
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%);
  border: 1px solid rgba(96, 165, 250, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.collaboration-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group:has(textarea) {
  grid-column: 1 / -1;
}

.form-label {
  color: #e2e8f0;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.form-input {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
}

.form-input::placeholder {
  color: #64748b;
}

.form-input:focus {
  border-color: rgba(96, 165, 250, 0.5);
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

.form-input.textarea {
  resize: vertical;
  min-height: 80px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

select.form-input {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2360a5fa' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.submit-btn {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  color: white;
  border: none;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(96, 165, 250, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon {
  font-size: 1.2rem;
}

.success-message,
.error-message {
  grid-column: 1 / -1;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  animation: slideIn 0.4s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-message {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.error-message {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.success-icon {
  font-size: 1.2rem;
}

.error-icon {
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .collaboration {
    padding: 4rem 1.5rem;
  }

  .form-container {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .collaboration-form {
    grid-template-columns: 1fr;
  }

  .form-group:has(textarea) {
    grid-column: 1;
  }
}
</style>
