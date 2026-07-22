import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Transpile down for older phones / in-app browsers (default target is too modern).
    target: ['es2019', 'safari13', 'chrome80', 'firefox72'],
  },
})
