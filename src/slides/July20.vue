<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";

// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/July20/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
        eager: true,
        as: "url",
    })
);
const im = gallery(imagePaths);
loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="July 20" />
                <VSection>
                    <h2>Recap</h2>
                </VSection>
                <section>
                    <HSection text="I." />
                </section>
                <section>
                    <HSection text="II." />
                </section>
                <section>
                    <HSection text="III." />
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
