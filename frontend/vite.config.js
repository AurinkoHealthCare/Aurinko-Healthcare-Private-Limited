import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 6001,
  },
  base: './',
  build: {
    outDir: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../backend/dist'),
    emptyOutDir: true,
  },
})