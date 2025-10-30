import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  publicDir: "public",
  build: {
    assetsDir: "static",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/imgs/[name][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          // Default for other assets
          return "assets/[name][extname]";
        },
      },
    },
  },
});
