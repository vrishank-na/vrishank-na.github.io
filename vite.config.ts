import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This is a user-site repository, so it is served from the domain root.
  base: '/',
  plugins: [react()],
})
