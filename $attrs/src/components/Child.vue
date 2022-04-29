<template>
    <div class="wrappper">
        按F12查看$attrs
    </div>
</template>

<script>

export default {
    mounted() {
        console.log(`this.$attrs: ${this.$attrs}`)
        console.log(`this.$attrs["id"]: ${this.$attrs["id"]}`)
        console.log(`this.$attrs["class"]: ${this.$attrs["class"]}`)
        console.log(`this.$attrs["wuuconix"]: ${this.$attrs["wuuconix"]}`)
        console.log(`this.$attrs["onClick"]: ${this.$attrs["onClick"]}`)
        console.log("作为子组件我要调用父组件的函数了！")
        this.$attrs["onClick"]() //自己调用父组件
    },
    props: ["wuuconix"]
}
</script>


<style scoped>
    div {
        width: 50vw;
        height: 75vh;
        background-color: purple;
        text-align: center;
        line-height: 75vh;
        color: cornsilk
    }
</style>