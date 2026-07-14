import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Standalone static build of ONLY the Practice Studio page, for uploading
// to the onealphamed.com WordPress host as a /practice-studio/ folder.
//   npm run build:studio  →  dist-practice-studio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/practice-studio/',
  publicDir: 'public-studio', // .htaccess cache rules (NOT the .ai site's public/)
  build: {
    outDir: 'dist-practice-studio',
    rollupOptions: { input: 'practice-studio.html' },
  },
})
