<template>
    <div>
        <son></son>
    </div>
</template>

<script>
import son from './components/Son.vue'

export default {
    components: {
        son
    },
    provide: {
        "flag": "wuuconix_yyds"
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