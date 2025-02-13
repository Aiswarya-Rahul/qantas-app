import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //below line is to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },
});
