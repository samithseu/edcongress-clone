import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    cssMinify: false,
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        "each-news": "each-news.html",
        "all-news": "all-news.html",
      },
      output: {
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/imgs/[name][extname]";
          }
          if (/\.(ttf|otf|eot|woff2?)$/.test(name ?? "")) {
            return "assets/fonts/[name][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          // Default for other assets
          return "assets/[ext]/[name][extname]";
        },
      },
    },
  },
});
