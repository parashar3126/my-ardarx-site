import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base को हटा दिया है या डिफ़ॉल्ट '/' पर सेट कर दिया है जो Vercel के लिए बेस्ट है
  base: '/', 
})