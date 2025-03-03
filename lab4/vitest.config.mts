import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html']
    },
    environment: 'jsdom'
  }
})
