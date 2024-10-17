import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    server: {
        proxy: {
            '/base': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite: path => {path.replace(/^\/base/, '')}
                // instead of localhost:8000 we'll use /base/ + endpoint
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
