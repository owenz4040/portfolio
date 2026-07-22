import { createApp } from 'vue'
import type { DirectiveBinding } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

/* Global scroll-reveal directive: `v-reveal` or `v-reveal="{ delay: 150 }"`.
   Guarded so an unsupported/failing IntersectionObserver can never leave the
   page blank (content stays hidden until 'revealed' is added). */
let observer: IntersectionObserver | null = null
try {
  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }
} catch {
  observer = null
}

app.directive('reveal', {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add('reveal')
    if (binding.value?.delay) {
      el.style.setProperty('--reveal-delay', `${binding.value.delay}ms`)
    }
    if (observer) {
      observer.observe(el)
    } else {
      // No observer available — reveal immediately so content is always visible.
      el.classList.add('revealed')
    }
  },
  unmounted(el: HTMLElement) {
    observer?.unobserve(el)
  },
})

app.mount('#app')

/* Final safety net: if anything stalls, make sure no revealable content
   is left invisible after load. */
window.addEventListener('load', () => {
  window.setTimeout(() => {
    document
      .querySelectorAll('.reveal:not(.revealed)')
      .forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) el.classList.add('revealed')
      })
  }, 1200)
})
