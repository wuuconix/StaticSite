<template>
    <div>
        <h1> {{ title }}</h1>
        <img :src="src">
        <button @click="change">换一张图</button>
        <button @click="reset">重置data</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: "https://url.wuuconix.link/favicon",
            title: "重置data学习"
        }
    },
    methods: {
        change() {
            this.src = `https://conix.ml/?random=${Math.random()}`
            this.title = this.src
        },
        reset() {
            // this.$data = this.$options.data(this)
            console.log(`this.$options.data(this):`)
            console.log(this.$options.data(this))
            Object.assign(this.$data, this.$options.data(this))
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
    img {
        width: 40%;
    }
</style>