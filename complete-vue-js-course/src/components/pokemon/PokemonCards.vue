<script lang="ts" setup>
import CardElement from './CardElement.vue';

interface Card {
    id: number;
    name: string;
    sprite: string;
    types: Array<string>;
}

defineProps<{
    cards: Card[];
    selectedId: number;
}>();

const emit = defineEmits<{
    'click': [card: Card];
}>();
</script>

<template>
    <div class="cards">
        <CardElement 
            v-for="card in cards" 
            :key="card.id"
            @click="emit('click', card)"
            :class="{ opace: selectedId !== -1 && selectedId !== card.id }"
            class="card"
        >
            <template v-slot:title>
                {{ card.name }}
            </template>
            <template v-slot:img>
                <img :src="card.sprite" :alt="card.name" />
            </template>
            <template v-slot:types>
                <div v-for="type in card.types" :key="type">
                    {{ type }}
                </div>
            </template>
        </CardElement>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
}

.opace {
    opacity: 0.5;
}

.card:hover{
    opacity: 1;
}

img {
    width: 100%;
}
</style>
