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
        width: 100%;
    }
    img {
        width: 60%;
    }
</style>

