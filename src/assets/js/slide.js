// Load Reveal.js and plugins
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";
import "highlight.js/styles/atom-one-dark.css";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Search from "reveal.js/plugin/search/search.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Math from "reveal.js/plugin/math/math.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

// Vue
import { onMounted } from "vue";

// Custom components
import Cover from "@slides-comps/Cover.vue";
import HSection from "@slides-comps/HSection.vue";
import VSection from "@slides-comps/VSection.vue";
import Image from "@slides-comps/Image.vue";

export { Cover, HSection, VSection, Image };

export function loadReveal() {
    // Init Reveal.js after the component is mounted
    onMounted(() => {
        const deck = new Reveal({
            plugins: [Highlight, Markdown, Search, Notes, Math, Zoom],
        });
        deck.initialize({
            history: true,
            slideNumber: "c/t",
            disableLayout: true,
        });
    });
}

function set(property, style) {
    document.documentElement.style.setProperty(property, style);
}

export function setStyle() {
    const font =
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    set("--r-heading1-size", "3.5rem");
    set("--r-heading2-size", "3rem");
    set("--r-main-font-size", "1.875rem");
    set("--r-heading-font", font);
}

// Map dynamic import to a object
export function gallery(imagePaths) {
    const images = {}; // Access the images by their name
    // console.log(imagePaths);
    for (const path of imagePaths) {
        // Extract the image name from the URL
        let name = path.split("/").pop();
        name = name.substring(0, name.lastIndexOf(".")); // Remove the extension
        // if in build mode, remove the hash value
        if (import.meta.env.PROD) {
            name = name.substring(0, name.lastIndexOf("-"));
        }
        images[name] = path;
    }
    // console.log(images);
    return images;
}

// Recap
import Week1 from "@slides-recap/Week1.vue";
import Week2 from "@slides-recap/Week2.vue";
import Week3 from "@slides-recap/Week3.vue";
import Week4 from "@slides-recap/Week4.vue";
import Week5 from "@slides-recap/Week4.vue";

export { Week1, Week2, Week3, Week4, Week5 };
