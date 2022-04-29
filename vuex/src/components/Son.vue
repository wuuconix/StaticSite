<template>
    <img :src="src">
    <button @click="handleClick">子组件按钮：调用store中的change</button>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$store.commit("change")
        }
    },
    computed: {
        src() {
            return this.$store.state.src
        }
    }
}
</script>


<style scoped>
    img {
        width: 20%;
    }
    button {
        margin-top: 15px;
    }
</style>