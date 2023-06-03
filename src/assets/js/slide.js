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
import { onMounted } from "vue";

export function loadReveal() {
    // Init Reveal.js after the component is mounted
    onMounted(() => {
        const deck = new Reveal({
            plugins: [Highlight, Markdown, Search, Notes, Math, Zoom],
        });
        deck.initialize({
            history: true,
            slideNumber: "c/t",
        });
    });
}
