import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Include Lottie files as assets
  assetsInclude: ["**/*.lottie"],

  // SPA routing support for Vercel
  base: "/",

  // Path alias for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Build configuration
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
