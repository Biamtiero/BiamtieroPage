import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'prevent-windows-ebusy-crash',
      configureServer(server) {
        // Prevent Windows EBUSY file-lock errors on large .mp4 files from crashing Vite
        server.watcher.on('error', (err) => {
          console.warn('[vite-watcher] Ignored transient FS error:', err.message)
        })
      },
    },
  ],
})
