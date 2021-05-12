<template>
<<<<<<< HEAD
    <div class="notification notification-warning">
=======
    <div class="error">
>>>>>>> improve-styling
        <h2 v-if="header">{{ header }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script>
<<<<<<< HEAD

=======
>>>>>>> improve-styling
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
<<<<<<< HEAD

    .notification-container {
        position: fixed;
        top: 15px;
        right: 15px;
        width: 200px;
        max-width: calc(100% - 30px);
}
    .notification {
        background-color: transparent;
        border-radius: 5px;
        color: rgb(219, 31, 31);
        text-shadow: 4px 4px 2px rgb(255, 255, 255);
        font-size: 16px;
        padding: 15px 20px;
        line-height: 20px;
        margin-bottom: 15px;
        animation: grow 1s ease-in forwards;
        box-shadow: 2px 2px 8px transparentize(black, 0.99);
        padding: 48px;

    @keyframes grow {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

    .notification.hide {
    animation: shrink 0.8s ease-out forwards;
}

    @keyframes shrink {
    to {
        opacity: 0;
        transform: scale(0.8);
    }
}
    .notification-warning {
    background-color: #ff0f0f;
}


    h2 {
=======
    .error {
        background: transparentize( #000001, 1);
        border-radius: 8px;
        color:rgb(223, 22, 22);
        box-shadow: 2px 2px 8px transparentize(black, 0.9);
        padding: 42px;

        h2 {
>>>>>>> improve-styling
            margin-top: 0;
        }
    }
</style>
