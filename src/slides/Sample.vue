<script setup>
import { useRoute } from "vue-router";
import { loadReveal } from "@js/slide.js";

const route = useRoute();
console.log("Id from route", route.params.id);

const n = 3;
loadReveal();

const md = `
## Markdown support - Slide1

Write content using inline or external Markdown $1+1=2$.
Instructions and **more** *info* available in the [docs](https://revealjs.com/markdown/).

---

## Markdown support - Slide2

This is the second slide.
          `;
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <section>Title</section>
                <section>
                    <section>
                        <div class="flex items-center justify-center">
                            Test plugins
                            <img class="w-1/3" src="@images/HKU-Logo.jpg" />
                        </div>
                    </section>
                    <section data-auto-animate>
                        Syntax highlight with auto animation
                        <pre data-id="code-animation">
                            <code class="hljs javascript" data-trim data-line-numbers>
                            // main.js
                            import { createApp } from 'vue'
                            import { createRouter, createWebHistory } from 'vue-router'
                            import App from './App.vue'
                            import Home from './views/Home.vue'
                        </code>
                        </pre>
                    </section>
                    <section data-auto-animate>
                        Syntax highlight with auto animation
                        <pre data-id="code-animation">
                            <code class="hljs javascript" data-trim data-line-numbers>
                            // main.js
                            import { createApp } from 'vue'
                            import { createRouter, createWebHistory } from 'vue-router'
                            import App from './App.vue'
                            import Home from './views/Home.vue'

                            const router = createRouter({
                            history: createWebHistory('/myapp/'),
                            routes: [
                                { path: '/', component: Home }
                                // other routes...
                            ]
                            })

                            const app = createApp(App)
                            app.use(router)
                            app.mount('#app')
                        </code>
                        </pre>
                    </section>
                    <section data-markdown>
                        <!-- Contents of v-html are inserted as plain HTML -->
                        <textarea data-template>
                            ### Slide1
                            nice to meet **you**
                            
                            A paragraph with some text and a [link](https://hakim.se).
                            * hello
                            * great
                            * no
                        </textarea>
                    </section>
                    <section>
                        <p>Search content.</p>
                        Press CTRL+Shift+F to search slide content.
                    </section>
                    <section>
                        <p>Notes</p>
                        <p>
                            Press S on your keyboard to enter the speaker notes
                        </p>
                        <aside class="notes">
                            Oh hey, these are some notes. They'll be hidden in
                            your presentation, but you can see them if you open
                            the speaker notes window (hit 's' on your keyboard).
                        </aside>
                    </section>
                    <section>
                        <p>Math</p>
                        <p>
                            Use LaTeX syntax to include mathematics in your
                            slides.
                        </p>
                        <p>
                            For example, the following will display an inline
                            formula: <code>$f(x) = x^2$</code>
                        </p>
                        <p>
                            And this will display a formula in display mode:
                            <code>
                                \begin{aligned} \dot{x} &amp; = \sigma(y-x) \\
                                \dot{y} &amp; = \rho x - y - xz \\ \dot{z} &amp;
                                = -\beta z + xy \end{aligned}
                            </code>
                        </p>
                    </section>
                    <section>
                        <p>Zoom</p>
                        <p>
                            Alt+click to zoom in on elements (CTRL+click in
                            Linux).
                        </p>
                    </section>
                </section>
                <section v-for="i in n" :key="i">
                    <section>Section{{ i }}</section>
                    <section v-for="j in n" :key="j">{{ i }}.{{ j }}</section>
                </section>
                <section>End</section>
            </div>
        </div>
    </div>
</template>
