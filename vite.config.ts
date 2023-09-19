import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $: "/public",
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@features": "/src/features",
      "@hooks": "/src/hooks",
      "@libs": "/src/libs",
      "@pages": "/src/pages",
      "@types": "/src/types",
      "@utils": "/src/utils",
    },
  },
});
