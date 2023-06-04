<script>
export default {
    props: {
        text: {
            type: String,
            default: "Section",
        },
    },
};
</script>

<template>
    <section>
        <div class="center">
            <div>
                <h1>{{ text }}</h1>
            </div>
        </div>
    </section>
</template>
