import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  },
  // 这将在后面被一个插件读取
  {
    pluginProp: '我会被 pinia 插件获取',
  },
)
