<template>
    <div>
        <button v-for="post in posts" :key="post.id" @click="setPostId(post.id)">{{ post.title }}</button>
        <div v-if="currentPost">
            <h2>{{ currentPost.title }}</h2>
            <p>{{ currentPost.content }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import type { State } from './store';

const store = useStore<State>();
const posts = computed(() => store.state.posts);
const currentPost = computed(() => store.getters.getPost);

const setPostId = (postId: number) => {
    store.commit('setPostId', postId);
};
</script>