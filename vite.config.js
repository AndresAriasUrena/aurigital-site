import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  assetsInclude: ['**/*.pdf'], // Add this line to handle PDF imports
  plugins: [
    react(),
    // Brotli compression
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br", 
      threshold: 10240, 
      compressionOptions: {
        level: 11, 
      },
      deleteOriginFile: false, 
    }),
    // Gzip compression as backup
    viteCompression({
      algorithm: "gzip",
      ext: ".gz", 
      threshold: 10240, 
      deleteOriginFile: false, 
    }),
  ],
});