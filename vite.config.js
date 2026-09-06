import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/yossef-showcase-portfolio/',
  plugins: [react(), tailwindcss()],
})
