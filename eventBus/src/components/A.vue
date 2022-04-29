<template>
    <div class="wrappper">
        <input type="text" v-model="a_content" placeholder="a_content"/>
        <button @click="sendB">发送给B</button>
        <p v-if="b_content"> {{ b_content }}</p>
    </div>
</template>

<script>
// import { eventBus } from '../eventBus.js'

export default {
    data() {
        return {
            a_content: "",
            b_content: ""
        }
    },
    methods: {
        sendB() {
            //eventBus.emit("sendB", this.a_content)
            this.eventBus.emit("sendB", this.a_content)
        }
    },
    mounted() {
        /* this.eventBus.on("sendA", (msg) => {
            this.b_content = msg
        }) */
        this.eventBus.on("sendA", (msg) => {
            this.b_content = msg
        })
    }
}
</script>


<style scoped>
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 200px;
    }
    input {
        width: 50%;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        margin-bottom: 15px;
    }
    p {
        width: 50%;
        border: 1px solid dodgerblue;
        height: 32px;
        line-height: 32px;
    }
</style>