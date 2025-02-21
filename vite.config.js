import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        preprocessorOptions: {
            scss: {
                // Use the new API for scss preprocessing in Vite
                // ref: https://vite.dev/config/shared-options#css-preprocessoroptions
                api: 'modern-compiler', // or "modern"
                sourceMap: true,
            },
        },
    },

});