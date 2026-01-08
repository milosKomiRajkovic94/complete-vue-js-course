
<script lang="ts" setup>
    import { store } from './Store';

    const props = defineProps<{
        hashtag: string;
    }>();

    const onClick = () => {
        store.setHashtag(props.hashtag);
    }
</script>
<template>
    <div 
        v-on:click="onClick"
    >
        <u>#{{ hashtag }}</u>
    </div>
</template>
