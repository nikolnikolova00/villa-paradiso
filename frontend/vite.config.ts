import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const src = fileURLToPath(new URL('./src', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      admin: `${src}/admin`,
      components: `${src}/components`,
      data: `${src}/data`,
      features: `${src}/features`,
      i18n: `${src}/i18n`,
      pages: `${src}/pages`,
      providers: `${src}/providers`,
      router: `${src}/router`,
      theme: `${src}/theme`,
      types: `${src}/types`,
      utils: `${src}/utils`,
    },
  },
})
