import { createApp } from 'vue'
import type { DirectiveBinding } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

/* Global scroll-reveal directive: `v-reveal` or `v-reveal="{ delay: 150 }"` */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
)

app.directive('reveal', {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add('reveal')
    if (binding.value?.delay) {
      el.style.setProperty('--reveal-delay', `${binding.value.delay}ms`)
    }
    observer.observe(el)
  },
  unmounted(el: HTMLElement) {
    observer.unobserve(el)
  },
})

app.mount('#app')
