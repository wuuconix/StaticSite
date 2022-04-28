<template>
    <div class="wrapper">
        <p> F12可查看生命周期中输出的不同内容</p>
        <img :src="src">
        <p> {{ src }} </p>
        <button @click="changeUrl">点击更换src</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: "https://conix.ml/"
        }
    },
    methods: {
        changeUrl() {
            this.src = `https://conix.ml/?random=${Math.random()}`
        }
    },
    beforeCreate() {
        console.log(`beforeCreate this.$data: ${this.$data}`)
        console.log(`beforeCreate this.$data.src: ${this.$data.src}`)
        console.log(`beforeCreate this.$el: ${this.$el}`)
    },
    created() {
        console.log(`created this.$data.src: ${this.$data.src}`)
        console.log(`created this.$el: ${this.$el}`)
    },
    beforeMount() {
        console.log(`beforeMount this.$el: ${this.$el}`)
    },
    mounted() {
        console.log(`mounted this.$el: ${this.$el}`)
    },
    beforeUpdate() {
        console.log(`beforeUpdate this.url: ${this.src}`)
    },
    updated() {
        console.log(`updated this.url: ${this.src}`)
    },
    beforeUnmount() {
        console.log(`beforeUnmount this.$data.src: ${this.$data.src}`)
        console.log(`beforeUnmount this.$el: ${this.$el}`)
    },
    unmounted() {
        console.log(`unmounted this.$data.src: ${this.$data.src}`)
        console.log(`unmounted this.$el: ${this.$el}`)
    }
}
</script>

<style scoped>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 50%;
    }
    p {
        width: 50%;
        height: 32px;
        line-height: 32px;
        border: 1px solid orangered;
        color: royalblue;
        text-align: center;
    }
</style>
