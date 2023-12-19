import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 9,
    }),
    getters:{
        countDigitLength: (state) => state.count.toString().length,

    }
});