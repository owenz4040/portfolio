<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="splash" role="status" aria-live="polite" aria-label="Loading">
    <div class="bg-orb orb-1" aria-hidden="true"></div>
    <div class="bg-orb orb-2" aria-hidden="true"></div>

    <div class="splash-card">
      <div class="mark" aria-hidden="true">
        <div class="ring"></div>
        <div class="dot"></div>
      </div>

      <div class="text">
        <div class="hello">Welcome</div>
        <div class="name">{{ name }}</div>
        <div class="tagline">Full-Stack Developer • Tech Innovator</div>
      </div>

      <div class="loader" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: radial-gradient(circle at 20% 20%, rgba(224, 64, 95, 0.18) 0%, transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(131, 58, 180, 0.18) 0%, transparent 50%),
    radial-gradient(circle at 40% 90%, rgba(64, 93, 230, 0.16) 0%, transparent 55%),
    linear-gradient(135deg, #0a0a0a 0%, #0b1220 55%, #07070a 100%);
  overflow: hidden;
}

.bg-orb {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.55;
  animation: orbFloat 6s ease-in-out infinite;
}

.orb-1 {
  top: -180px;
  left: -160px;
  background: radial-gradient(circle, rgba(224, 64, 95, 0.45) 0%, transparent 70%);
}

.orb-2 {
  bottom: -220px;
  right: -180px;
  background: radial-gradient(circle, rgba(64, 93, 230, 0.4) 0%, transparent 70%);
  animation-delay: 0.8s;
}

@keyframes orbFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(20px, -25px, 0);
  }
}

.splash-card {
  position: relative;
  width: min(560px, 100%);
  border-radius: 1.5rem;
  padding: 2.4rem 2.2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(96, 165, 250, 0.22);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(14px);
  display: grid;
  gap: 1.4rem;
  justify-items: center;
  animation: cardIn 700ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.mark {
  position: relative;
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
}

.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-top-color: rgba(224, 64, 95, 0.9);
  border-right-color: rgba(131, 58, 180, 0.9);
  border-bottom-color: rgba(64, 93, 230, 0.9);
  animation: spin 1.1s linear infinite;
  box-shadow: 0 0 0 8px rgba(224, 64, 95, 0.04);
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary-gradient);
  box-shadow: 0 0 22px rgba(224, 64, 95, 0.55);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.text {
  text-align: center;
}

.hello {
  color: rgba(226, 232, 240, 0.85);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.name {
  margin-top: 0.45rem;
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 1.1;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  margin-top: 0.55rem;
  color: rgba(148, 163, 184, 0.95);
  font-weight: 600;
}

.loader {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
}

.loader span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(96, 165, 250, 0.9);
  box-shadow: 0 0 18px rgba(96, 165, 250, 0.25);
  animation: bounce 900ms ease-in-out infinite;
}

.loader span:nth-child(2) {
  background: rgba(167, 139, 250, 0.9);
  animation-delay: 120ms;
}

.loader span:nth-child(3) {
  background: rgba(224, 64, 95, 0.9);
  animation-delay: 240ms;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.65;
  }
  50% {
    transform: translateY(-7px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bg-orb,
  .splash-card,
  .ring,
  .loader span {
    animation: none !important;
  }
}

@media (max-width: 480px) {
  .splash-card {
    padding: 2rem 1.4rem;
    border-radius: 1.2rem;
  }

  .name {
    font-size: 1.85rem;
  }
}
</style>
