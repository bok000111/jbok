import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "&": path.resolve(__dirname, "../wasm/pkg"),
    },
  },
  build: {
    target: "es2022",
  },
})
