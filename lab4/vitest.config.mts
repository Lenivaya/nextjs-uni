import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        branches: 40,
        functions: 40,
        lines: 40,
        statements: 40
      }
    },
    environment: 'jsdom'
  }
})
