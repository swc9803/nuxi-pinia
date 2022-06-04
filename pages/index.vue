<template>
  <h4> {{ name }} </h4>
  <h4> {{ count }} </h4>
  <button @click="add(15)">click</button>
  <button @click="reset">reset</button>
  <button @click="rreset">$reset</button>
  <button @click="addOne">addOne</button>
  <button @click="adddOne">$addOne</button>
  <button @click="log">$log</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/useCounter'
const main = useCounterStore()
const { count, name } = storeToRefs(main)
const { reset, addOne, log } = main
console.log(main.name)
const add = (value) => {
  main.$patch(state => { state.count += value })
}
const rreset = () => {
  main.reset()
}
const adddOne = () => {
  main.addOne()
}
const llog = () => {
  main.log()
}
</script>

<style lang="scss">
body {
  overflow: hidden;
  margin: 0;
}
</style>
