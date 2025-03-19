import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-estate-backend-lovat.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    outDir: "dist", // Ensure output directory is set correctly
  },
  plugins: [react()],
});