import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/voosh-portal/",
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})