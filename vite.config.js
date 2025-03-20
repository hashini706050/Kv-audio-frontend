import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // specify the port explicitly
    strictPort: true, // ensures it doesn't try another port if 5173 is occupied
  },
})