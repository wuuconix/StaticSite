<template>
    <div>
        <img :src="src">
        <a :href="src"> {{ src }} </a>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ["src", "description"]
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    img {
        width: 50%;
    }
    p {
        text-align: center;
    }
</style>