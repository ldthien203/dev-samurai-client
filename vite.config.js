import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      env: JSON.stringify(env.APP_ENV),
    },
    server: {
      historyApiFallback: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  }
})
