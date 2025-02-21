import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import visualizer from "rollup-plugin-visualizer"; // ❌ Wrong import
// ❌ `visualizer` is not a function

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer.default({ // ✅ FIX: Use `.default()` with the plugin
      open: true, // Automatically opens report in browser
      filename: "stats.html", // Output file name
      gzipSize: true, // Show compressed size
      brotliSize: true, // Show brotli-compressed size
    }),
  ],
});
