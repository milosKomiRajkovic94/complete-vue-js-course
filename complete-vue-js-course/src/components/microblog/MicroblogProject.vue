<script lang="ts" setup>
import { store } from './Store';
import CardElement from '../pokemon/CardElement.vue';
import MicroblogControls from './MicroblogControls.vue';
</script>

<template>
    <div
      v-for="post in store.filteredPosts"
      :key="post.id"
      class="cards"
    >
        <CardElement 
            class="card"
        >
            <template v-slot:title>
                {{ post.title }}
            </template>
            <template v-slot:img>
                {{  post.content }}
            </template>
            <template v-slot:types>
                <microblog-controls :post="post" />
            </template>
        </CardElement>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
}
</style>
