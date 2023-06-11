<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";
// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/June8/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
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
                <Cover date="June 15" />
                <section>
                    <HSection text="I. Failure Case" />
                    <VSection>
                        <h2>Title</h2>
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Website Demo" />
                    <VSection>
                        <h2>Title</h2>
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Schedule" />
                    <VSection>
                        <h2>Title</h2>
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
