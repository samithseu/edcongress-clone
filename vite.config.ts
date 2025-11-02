import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "each-news": "each-news.html",
        "all-news": "all-news.html",
      },
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
