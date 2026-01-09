<template>
    <h3>New Post</h3>
    <input 
        v-model="newPost.title"
        placeholder="Title"
    />
    <br />
    <textarea 
        cols="50"
        rows="10"
        v-model="newPost.content"
        placeholder="Content"
    />
    <br />
    <button @click="submit">Submit</button>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { usePosts } from './usePosts';

    const { addPost, posts } = usePosts();
    const router = useRouter();
    
    const newPost = reactive({
        title: '',
        content: ''
    });

    const submit = () => {
        const id = posts.value.length + 1;
        addPost({
            id,
            title: newPost.title,
            content: newPost.content,
            likes: 0,
            hashtags: []
        });
        router.push(`/posts/${id}`);
    }
</script>
