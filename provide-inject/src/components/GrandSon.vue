<template>
    <div>
        <h3>I'm GrandSon</h3>
        <p>{{ echo }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            echo: "This is my echo text"
        }
    },
    inject: ["flag"],
    mounted() {
        console.log(`from GrandSon.vue: this.flag: ${this.flag}`)
        this.echo = `flag{${this.flag}} ---from App.vue`
    },
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    p {
        width: 50vw;
        height: 32px;
        line-height: 32px;
        text-align: center;
    }
</style>