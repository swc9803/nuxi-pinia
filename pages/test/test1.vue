<template>
  <div>
    <h3>This is Test Page.</h3>
    <Box @boxClicked="boxClicked" :boxData="boxData"/>
    <h4 v-show="boxData">Clicked!</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const boxData = ref(false)
const boxClicked = () => {
  boxData.value = true
}

definePageMeta({
  layout: 'custom'
})
</script>