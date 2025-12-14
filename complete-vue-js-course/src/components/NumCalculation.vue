<script setup lang="ts">
defineProps<{
  num: number
}>()
</script>

<template>
  <button> {{ num }} </button>
</template>
