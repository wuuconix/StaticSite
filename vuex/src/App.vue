<template>
    <div>
        <h1> {{ title }}</h1>
        <button @click="handleClick">父组件按钮：调用store中的change</button>
        <son></son>
    </div>
</template>

<script>
import son from './components/Son.vue'

export default {
    components: {
        son
    },
    methods: {
        handleClick() {
            this.$store.commit("change")
        }
    },
    computed: {
        title() {
            return this.$store.state.src
        } 
    }

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button {
        margin-bottom: 15px;
    }
</style>