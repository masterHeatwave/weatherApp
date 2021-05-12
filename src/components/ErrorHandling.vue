<template>
    <div class="error">
        <h2 v-if="header">{{ header }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .error {
        background: transparentize( #000001, 1);
        border-radius: 8px;
        color:rgb(223, 22, 22);
        box-shadow: 2px 2px 8px transparentize(black, 0.9);
        padding: 42px;

        h2 {
            margin-top: 0;
        }
    }
</style>
