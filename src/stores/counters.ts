import { defineStore } from "pinia"
import { ref } from "vue"

// export const useCounterStore = defineStore("counter", {
//     state: () => {
//         return {
//             count: 0,
//         }
//     },
//     getters: {
//         count() {
//             return this.count
//         },
//     },
//     actions: {
//         increment() {
//             this.count++
//         },
//     },
// })

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }

    return { count, increment }
})
