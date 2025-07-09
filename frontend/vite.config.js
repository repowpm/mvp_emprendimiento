import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons'],
          alerts: ['sweetalert2']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fa', 'sweetalert2']
  }
}) 