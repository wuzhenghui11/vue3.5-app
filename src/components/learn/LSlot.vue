<template>
  <div>
    123
    <slot :text="'数据'">356</slot>
    {{ message }}
  </div>
</template>

<script setup>
import { inject } from 'vue';
const message = inject('message')

</script>

<style>
</style>
