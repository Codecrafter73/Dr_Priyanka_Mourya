import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,tailwindcss()],
   server: {
    host: "0.0.0.0", // Allows access from any IP address on the local network
    port: 3000, // Port number
    strictPort: true, // Prevents Vite from using a different port if the default is taken
  },
  
})
