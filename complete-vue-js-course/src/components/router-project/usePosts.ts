import { ref } from "vue";
import { testPosts } from "../microblog/testPosts";

export function usePosts() {
  const posts = ref(testPosts);

  const addPost = (post: { id: number; title: string; content: string; likes: number; hashtags: string[] }) => {
    posts.value.push(post);
  };

  return { addPost, posts };
}
