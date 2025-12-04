import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Allow importing .lottie files
  assetsInclude: ["**/*.lottie"],

  // Base path for SPA routing
  base: "/",

  // Aliases for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "dist",       // Output folder for Vercel
    emptyOutDir: true,    // Clear dist before build
    sourcemap: false,
  },
});
