<script setup>
import { loadReveal } from "@js/slide.js";
const n = 3;
loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <section>June 29 Title</section>
                <section v-for="i in n" :key="i">
                    <section>Section{{ i }}</section>
                    <section v-for="j in n" :key="j">{{ i }}.{{ j }}</section>
                </section>
                <section>End</section>
            </div>
        </div>
    </div>
</template>
