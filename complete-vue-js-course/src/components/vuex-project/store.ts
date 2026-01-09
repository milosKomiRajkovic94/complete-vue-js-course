import { createStore, Store } from 'vuex'
import { testPosts } from '../microblog/testPosts';

export interface State {
  posts: {
    id: number,
    title: string,
    content: string,
    likes: number,
    hashtags: string[],
  }[],
  currentPostId: number | null,
}

export const store: Store<State> = createStore<State>({
  state() {
    return {
      posts: testPosts,
      currentPostId: null,
    }
  },
  mutations: {
    setPostId(state: State, postId: number) {
      state.currentPostId = postId
    },
    getPostId(state: State) {
      return state.currentPostId
    },
  },
  getters: {
    getPost(state: State) {
      return state.posts.find(post => post.id === state.currentPostId)
    }
  }
})