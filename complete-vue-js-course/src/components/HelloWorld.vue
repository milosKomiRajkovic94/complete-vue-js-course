<script setup lang="ts">
defineProps<{
  greeting: string
}>()
</script>

<template>
  <h1>{{ greeting }}</h1>
</template>

<style scoped>
</style>
