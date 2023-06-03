<script setup>
import Icon from "./Icon.vue";
import logoUrl from "@images/HKU-Logo.jpg";

const title =
    "Handwritten Mathematical Expression Recognition Based on Encoder-decoder Neural Network";
const github = "https://github.com/comp-7705/7705-HMER";
const webpage = "https://wp.cs.hku.hk/2022/msp22015";
</script>

<template>
    <div class="flex items-center justify-between px-24 py-6">
        <div class="flex items-center">
            <div class="w-24 overflow-hidden mr-4">
                <img
                    :src="logoUrl"
                    alt="HKU logo"
                    class="w-full h-full object-cover"
                />
            </div>
            <h1 class="text-2xl font-bold">{{ title }}</h1>
        </div>
        <div class="flex items-center space-x-4">
            <Icon
                icon="fa-brands fa-wordpress"
                name="Webpage"
                :link="webpage"
            />
            <Icon icon="fa-brands fa-github" name="GitHub" :link="github" />
        </div>
    </div>
</template>

<style></style>
