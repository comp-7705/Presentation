<script setup>
import Header from "./Header.vue";
import Card from "./Card.vue";
import { cards } from "@js/home.js";
</script>

<template>
    <div class="bg-gray-100">
        <Header />
        <div class="flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.id" class="w-5/12 m-4">
                <router-link :to="card.to">
                    <Card :card="card" />
                </router-link>
            </div>
        </div>
    </div>
</template>
