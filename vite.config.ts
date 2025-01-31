import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig((env) => {
  const idDevMode = env.mode.includes('development');

  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
    ],
    server: {
      host: 'localhost',
      port: 3000,
    },
    preview: {
      host: 'localhost',
      port: 8080,
    },
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: idDevMode
          ? '_[local]_-_[hash:base64:3]'
          : '_[hash:base64:6]_',
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});

export default viteConfig;
