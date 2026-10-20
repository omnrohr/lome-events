import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ["**/public/sounds/**", "**/*.mp3", "**/*.wav", "**/*.ogg"],
    },
  },
});
