import { createWebHistory, createRouter } from 'vue-router'
import PostsComponent from './PostsComponent.vue'
import SinglePost from './SinglePost.vue'
import NewPost from './NewPost.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: PostsComponent,
            path: '/posts',
            children: [
                {
                    path: 'new',
                    component: NewPost
                },
                {
                    path: ':id',
                    component: SinglePost
                }
            ]
        }
    ]
})

export default router
