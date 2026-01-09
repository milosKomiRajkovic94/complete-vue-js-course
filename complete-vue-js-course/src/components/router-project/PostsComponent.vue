<template>
    <br />
    <router-link to="/posts/new">New Post</router-link>
    <ul>
        <li
            v-for="post in posts"
            :key="post.id"
        >
            <router-link
                :to="`/posts/${post.id}`"
            >
            {{ post.title }}
            </router-link>
        </li>
    </ul>
    <router-view />
</template>

<script lang="ts" setup>
   import { usePosts } from './usePosts';

   const { posts } = usePosts();
</script>
