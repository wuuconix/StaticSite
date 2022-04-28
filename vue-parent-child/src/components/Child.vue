<template>
  <div>
    <img :title="src" :src="src" @load="$emit('echo', 'success')" @error="$emit('echo', 'fail')">
  </div>
</template>

<script>
export default {
    props: ['src'],
    emits: ['echo']
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    img {
        width: 500px;
    }
</style>

