<template>
  <div class="boxWrap">
    <div v-for="box in boxes" :key="box.id"
      @click="boxClick(box.id)" :ref="boxRef" class="box">
    </div>
    <p>{{ boxData === true ? "활성화" : "비활성화" }}</p>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ref } from 'vue'

const array = ref([])
const boxRef = (el) => array.value.push(el)
const box = ref()
const boxes = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }])

const props = defineProps({
  boxData: Boolean
})
const emit = defineEmits(['boxClicked'])
const boxClick = (boxId) => {
  emit('boxClicked')
  gsap.to(array.value, {
    scale: 1,
    opacity: 0.5
  })
  gsap.to(array.value[boxId - 1], {
    scale: 1.5,
    opacity: 1
  })
}
onMounted(() => {
  gsap.set(array.value, {
    opacity: 0.5
  })
})
</script>
<style lang="scss" scoped>
.boxWrap { 
  max-width: 80%;
  position: relative;
  transform: translate(-50%); //좌우 상하
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  .box {
    width: 100px;
    height: 100px;
    background: black;
    cursor: pointer;
  }
}
</style>