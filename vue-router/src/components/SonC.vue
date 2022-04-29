<template>
    <img :src="src">
</template>

<script>
export default {
    data() {
        return {
            src: "https://conix.ml"
        }
    },
    beforeRouteUpdate(to) {
        if (to.path == "/setu" && to.hash != "") {
            console.log("利用组件内守卫 修改组件内src 进入r18模式！")
            this.src = `https://conix.ml/?r18=1&random=${Math.random()}`
        } else {
            this.src = `https://conix.ml/?random=${Math.random()}`
        }
    },
    beforeRouteLeave () {
        console.log("利用组件内守卫 beforeRouteLeave 来确认是否离开")
        if (window.confirm("来自组件内 beforeRouteLeave: 你确认要停止涩涩吗？")) {
            return true
        } else {
            return false
        }
    }
}
</script>

<style scoped>
    img {
        width: 50%;
    }
</style>