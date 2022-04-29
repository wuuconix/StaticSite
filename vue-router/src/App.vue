<template>
    <div>
        <p>学习vue router</p>
        <router-link to="/favicon">favicon</router-link>
        <router-link to="/avatar">avatar</router-link>
        <router-link to="/setu">setu</router-link>
        <router-view></router-view>
    </div>

</template>

<script>

export default {
    mounted() {
        console.log(this.$route)
        console.log("五秒钟后自动进入setu路由")
        setTimeout(() => {
            this.$router.push("/setu")
        }, 5000)
        this.$router.beforeEach((to, from) => {
            console.log(`this.$router.beforeEach to:`)
            console.log(to)
            console.log(`this.$router.beforeEach from:`)
            console.log(from)
            if (from.path != "/setu" && to.path == "/setu") {
                if (window.confirm("来自this.$router.beforeEach：请确定您已年满十八周岁")) {
                    console.log("成年可以涩涩 允许跳转")
                    return true
                } else {
                    console.log("未成年不可以涩涩 拒绝跳转")
                    return false
                }
            } else {
                console.log("允许跳转")
                return true
            }
        })
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
    router-view {
        margin-top: 30px;
    }
</style>