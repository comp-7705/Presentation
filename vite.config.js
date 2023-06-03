import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // For github pages
    base: "/Presentation/",

    // Resolve path alias
    resolve: {
        alias: {
            "@images": "/src/assets/images",
            "@js": "/src/assets/js",
            "@components": "/src/components",
            "@slides": "/src/slides",
        },
    },
});
