<template>
    <div class="wrapper">
        <child class="test-class" id="test-id" wuuconix="yyds" @click="child_click"></child>
    </div>
</template>

<script>
import child from './components/Child.vue'

export default {
    components: {
        child
    },
    methods: {
        child_click() {
            console.log("child is clicked")
        }
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
</style>