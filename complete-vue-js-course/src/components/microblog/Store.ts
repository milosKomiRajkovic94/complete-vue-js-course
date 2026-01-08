import { reactive } from 'vue';
import { testPosts } from './testPosts';

class Store {
    state: {
        posts: Array<{
            id: number;
            title: string;
            content: string;
            likes: number;
            hashtags: string[];
        }>;
        currentTag: string | null;
    };

    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentTag: null
        })
    }

    setHashtag(tag: string | null) {
        this.state.currentTag = tag;
    }

    incrementLike(postId: number) {
        const post = this.state.posts.find(p => p.id === postId);
        if (post) {
            post.likes += 1;
        }
    }

    get filteredPosts() {
        if (!this.state.currentTag) {
            return this.state.posts;
        }
        return this.state.posts.filter(post => 
            post.hashtags.includes(this.state.currentTag!)
        );
    }
}

export const store = new Store();
