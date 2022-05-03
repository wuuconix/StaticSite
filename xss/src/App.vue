<template>
    <div class="wrapper">
        <div v-html="html"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            html: "<h1>这是用Vue写的XSS测试页</h1>"
        }
    },
    mounted() {
        document.cookie = "Cookie{Your_Secret_Cookie}"
        let q = new URL(window.location.href).searchParams.get("q")
        if (q) {
            this.html = q
            console.log(q)
        }
    }
}
</script>

<style>
    div.wrapper {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>