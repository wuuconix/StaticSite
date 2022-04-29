<template>
    <div class="wrapper">
        <childa></childa>
        <childb></childb>
    </div>
</template>

<script>
import childa from './components/A.vue'
import childb from './components/B.vue'

export default {
    components: {
        childa,
        childb
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