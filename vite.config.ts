import { defineConfig } from "vite";

const viteConfig = defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },

  preview: {
    host: "localhost",
    port: 8080,
  },
});

export default viteConfig;
