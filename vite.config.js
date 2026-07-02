import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: this project lives inside a OneDrive-synced folder on Windows, where
// OneDrive intermittently locks files (e.g. images being synced). The native
// fs watcher then crashes with EBUSY. Polling avoids that lock contention.
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
