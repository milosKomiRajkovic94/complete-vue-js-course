<script setup lang="ts">
    import { useNumbers } from './useNumbers';

    const { numbers, history, increment } = useNumbers();
</script>

<template>
    <div>
        <h2>Numbers Composable</h2>
        <div>
            <button @click="increment('a')">A++</button>
            <button @click="increment('b')">B++</button>
        </div>
        <div>
            <p>Number A: {{ numbers.a }}</p>
            <p>Number B: {{ numbers.b }}</p>
        </div>
        <div>
            <h3>History:</h3>
            <ul>
                <li v-for="(entry, index) in history" :key="index">{{ entry }}</li>
            </ul>
        </div>
    </div>
</template>