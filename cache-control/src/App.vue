<template>
    <div class="outer_wrapper">
        <h3>浏览器缓存Cache-Control学习</h3>
        <div class="inner_wrapper">
            <Son src="https://conix.ml" description="cache-control: max-age=31536000"></Son>
            <Son src="https://conix.ml/?no-store=1" description="cache-control: no-store"></Son>
        </div>
        <button @click="fresh">刷新页面查看缓存情况</button>
    </div>

</template>

<script>
import Son from './components/Son.vue'

export default {
    components: {
        Son
    },
    methods: {
        fresh() {
            window.location.reload()
        }
    }
}
</script>

<style scoped>
    div.outer_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div.inner_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    Son {
        margin: 0px 20px;
    }
</style>