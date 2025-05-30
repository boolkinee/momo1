import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// ❌ ไม่มี package ชื่อ '@tailwindcss/vite'
//
// Tailwind ทำงานผ่าน postcss.config.js อยู่แล้ว
// ไม่ต้อง import tailwindcss มาจากไหน

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: '/',
    server: {
  proxy: {
    "/silo": "http://localhost:3001",
  },
}
  }
})
