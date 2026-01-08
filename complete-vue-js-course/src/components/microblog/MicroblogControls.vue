<script lang="ts" setup>
    import MicroblogHashtag from './MicroblogHashtag.vue';
    import { store } from './Store';

    const props = defineProps<{
        post: {
            id: number;
            title: string;
            content: string;
            likes: number;
            hashtags: Array<string>;
        }
    }>()

    const onClick = () => {
        store.incrementLike(props.post.id);
    }
</script>

<template>
    <button @click="onClick">Like</button>
    {{ post.likes }}
    <microblog-hashtag 
        :hashtag="hashtag"
        :key="hashtag"
        v-for="hashtag in post.hashtags"
    />
</template>
