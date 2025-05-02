import { resolve } from 'node:path'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'
import litLightningcss from 'vite-plugin-lit-lightningcss'
import tsconfigPaths from 'vite-tsconfig-paths'

const host = process.env.TAURI_DEV_HOST

export default defineConfig({
  plugins: [
    litLightningcss({
      include: /src\/.*\.ts$/,
      exclude: /node_modules/,
      lightningcss: { minify: true },
    }),
    tsconfigPaths(),
  ],
  publicDir: resolve('public'),
  envPrefix: ['PUBLIC_', 'VITE_'],
  clearScreen: false,
  build: {
    manifest: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024 * 4,
    rollupOptions: { input: resolve('index.html') },
    terserOptions: { format: { comments: false } },
    cssMinify: 'lightningcss',
    outDir: resolve('dist'),
    minify: process.env.NODE_ENV === 'production',
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host ? { protocol: 'ws', host, port: 1421 } : undefined,
    watch: { ignored: ['**/src-tauri/**'] },
  },
  esbuild: { legalComments: 'inline' },
  optimizeDeps: { force: true },
})
