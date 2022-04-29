<template>
    <div class="wrappper">
        <input type="text" v-model="b_content" placeholder="b_content"/>
        <button @click="sendA">发送给A</button>
        <p v-if="a_content"> {{ a_content }}</p>
    </div>
</template>

<script>
//import { eventBus } from '../eventBus.js'

export default {
    data() {
        return {
            a_content: "",
            b_content: ""
        }
    },
    methods: {
        sendA() {
            // this.eventBus.emit("sendA", this.b_content)
            this.eventBus.emit("sendA", this.b_content)
        }
    },
    mounted() {
        /* this.eventBus.on("sendB", (msg) => {
            this.a_content = msg
        }) */
        this.eventBus.on("sendB", (msg) => {
            this.a_content = msg
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
    }
    input {
        width: 50%;
        height: 32px;
        line-height: 32px;
        margin-bottom: 15px;
        font-size: 16px;
    }
    p {
        width: 50%;
        border: 1px solid dodgerblue;
        height: 32px;
        line-height: 32px;
    }
    
</style>