// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sunnyside-Agency-Landing-Page/', // must match repo name
  plugins: [react()],
})
