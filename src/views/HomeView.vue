<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import LSlot from '@/components/learn/LSlot.vue';

import { useCounterStore } from '@/stores/counter';

import { ref, provide, onMounted } from 'vue'

const vFocus = {
  mounted: (el) => {
    el.focus()
  }
}
const vColor = {
  mounted: (el, binding, vnode) => {
    console.log(binding, vnode)
    el.style.color = 'blue'
  }
}

const counterStore = useCounterStore()

/**
 *
 * @param {number} a
 * @param {number} b
 */
function add (a, b) {
  return a + b
}

const triggerSubscribe = () => {
  counterStore.count = counterStore.count + 1
}

const triggerOnAction = () => {
  counterStore.increment()
}

const value = ref('')
provide('message', value)

onMounted(() => {
  let sum = add(1, 2)
  console.log(sum);
  console.log(counterStore);
  counterStore.increment()
})

</script>

<template>
  <main>
    <input v-focus v-model="value" />
    <l-slot v-color v-slot="slotProps">{{ slotProps.text }}</l-slot>
    <button @click="triggerSubscribe">触发 $subscribe</button>
    <button @click="triggerOnAction">触发 $onAction</button>
    <!-- <TheWelcome /> -->
  </main>
</template>
