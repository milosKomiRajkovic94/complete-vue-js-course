<template>
    <h4>{{ post?.title }}</h4>
    <p>{{ post?.content }}</p>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { usePosts } from './usePosts';

    const route = computed(() => useRoute());
    const postId = computed(() => Number(route.value.params.id));
    const { posts } = usePosts();
    const post = computed(() => posts.value.find(post => post.id === postId.value));
</script>
