import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/portfolio_v1",
  base: "/",
  plugins: [react()],
})
