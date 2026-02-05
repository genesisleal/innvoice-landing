import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/brand/',
  build: {
    outDir: '../dist/brand',
    emptyOutDir: true,
  },
})
