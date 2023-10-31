import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  server: {
    // eslint-disable-next-line no-undef
    port: parseInt(process.env.PORT) || 8080,
    host: true
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
