<template>
    <head v-if="csp">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
    </head>
    <div class="wrapper" v-html="html">
    </div>
</template>

<script>

export default {
    data() {
        return {
            csp: false,
            html: "<h1>这是用Vue写的XSS测试页</h1><br>?q&nbsp发送xss攻击<br>?encode&nbsp开启转码<br>?csp&nbsp开始CSP"
        }
    },
    mounted() {
        document.cookie = "Cookie{Your_Secret_Cookie}"
        let url = new URL(window.location.href)
        let q = url.searchParams.get("q")
        let encode = url.searchParams.get("encode")
        let csp = url.searchParams.get("csp")
        let htmlspecialchars = (str) => {
            let div = document.createElement("div")
            div.innerText = str //这里设置innerText会把引号，尖括号等元素变成html实体
            str = div.innerHTML
            div = null //希望能触发垃圾回收机制
            return str
        }
        if (q) {
            if (csp == "true" || csp == "1") {
                this.csp = true
            } else {
                this.csp = false
            }
            if (encode == "true" || encode == "1") {
                q = htmlspecialchars(q)
            }
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>