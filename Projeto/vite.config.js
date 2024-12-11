import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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