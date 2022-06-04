import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'main',
  state: () => ({
    count: 0,
    name: 'Sung Woo'
  }),
  getters: {
    doubleCount: (state) =>
      state.count * 2
  },
  actions: {
    reset () {
      this.count = 0
    },
    addOne () {
      this.count++
    },
    log () {
      console.log('log');
    }
  }
})
