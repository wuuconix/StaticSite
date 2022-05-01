<template>
    <div>
        <img :src="src">
    </div>
</template>

<script>
export default {
    props: ["src"]
}
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: width .5s ease-in-out, height .5s ease-in-out;
    }
    img:hover {
        width: 200%;
        height: 200%;
        z-index: 10000;
    }
</style>