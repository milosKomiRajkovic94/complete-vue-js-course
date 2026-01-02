<script setup lang="ts">
defineProps<{
    background?: string;
    color?: string;
    disabled?: boolean;
}>();
</script>

<template>
    <button
        v-bind:disabled="disabled"
        v-bind:style="{ background: background, color: color }"
    >
        Button
    </button>
</template>

/* All of these styles will be applied to the button component */
<style scoped>
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
button {
    background: none;
    border-radius: 5px;
    border: none;
    color: black;
    cursor: pointer;
    display: block;
    font-size: 16px;
    padding: 10px 40px;
}
button:hover {
    filter: brightness(125%)
}
</style>
