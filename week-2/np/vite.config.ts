
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react({
        jsxImportSource: 'react'
      })],
      root: '.',
      server: {
        port: 3000,
        open: true
      }
    }
  }

  // Build
  return {
    plugins: [
      react({
        jsxImportSource: 'react'
      }),
      dts({
        include: ['src/**/*.ts', 'src/**/*.tsx', 'index.ts'],
        outDir: 'dist',
        insertTypesEntry: true
      })
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, './index.ts'),
        formats: ['es', 'umd'],
        name: 'Example Form',
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react/jsx-dev-runtime'
        ],
        output: {
          assetFileNames: 'styles.css',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      },
      cssCodeSplit: false
    }
  }
})
