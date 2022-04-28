<template>
    <div class="wrapper">
        <input type="url" placeholder="Please input img's url" :value="src" @input="handle_input"/>
        <child :src="src" @echo="handle_echo"></child>
        <p :class="{load: isLoad, error: isError}"> {{ result }}</p>
    </div>
</template>

<script>
import child from './components/Child.vue'
export default {
    data() {
        return {
            src: "https://conix.ml",
            result: "图片加载中",
            isLoad: false,
            isError: false
        }
    },
    components: {
        child
    },
    methods: {
        handle_echo(msg) {
            if (msg == "success") {
                this.result = "图片加载成功"
                this.isLoad = true
                this.isError = false
            } else {
                this.result = "图片加载失败"
                this.isLoad = false
                this.isError = true
            }
        },
        handle_input(e) {
            this.src = e.target.value
            this.result = "图片加载中"
            this.isLoad = false
            this.isError = false
        }
    }
}
</script>

<style scoped>
    div {
        width: 100%;
    }
    input {
        width: 500px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
    }
    p {
        margin-left: 50%;
        height: 32px;
        line-height: 32px;
        transform: translateX(-50%);
        text-align: center;
        width: 500px;
        border: 1px black solid;
    }

    p.load {
        color:lightseagreen
    }

    p.error {
        color: crimson
    }
</style>
