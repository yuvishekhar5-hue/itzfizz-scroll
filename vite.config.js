import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on GitHub Pages project URLs
export default defineConfig({ base: "./", plugins: [react()] });
