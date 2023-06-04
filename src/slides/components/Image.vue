<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: "image",
        },
        class: {
            type: String,
            default: "w-1/2",
        },
    },
};
</script>

<template>
    <div class="flex justify-center">
        <img :src="src" :alt="alt" :class="class" />
    </div>
</template>
