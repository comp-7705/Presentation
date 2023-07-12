<script setup>
import {
    loadReveal,
    gallery,
    Week1,
    Week2,
    Week3,
    Week4,
    Week5,
} from "@js/slide.js";
import { HSection } from "../assets/js/slide";

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
                <section>
                    <HSection text="I. Recap" />
                    <Week1 />
                    <Week2 />
                    <Week3 />
                    <Week4 />
                    <Week5 />
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
