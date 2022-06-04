<template>
  <div ref="box" class="box"></div>
</template>

<script setup>
import gsap from 'gsap'
import { ref } from 'vue'

const box = ref()

onMounted(() => {
  gsap.to(box.value, {
    xPercent: 200
  })
})
</script>
<style lang="scss" scoped>
.box {
  width: 50px;
  height: 50px;
  background: black;
}
</style>