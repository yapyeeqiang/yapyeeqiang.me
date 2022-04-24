import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/modules/Home/Home.vue'),
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/modules/Blog/Blog.vue'),
    },
    {
        path: '/talks',
        name: 'Talks',
        component: () => import('@/modules/Talks/Talks.vue'),
    },
    {
        path: '/streams',
        name: 'Streams',
        component: () => import('@/modules/Streams/Streams.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/modules/Projects/Projects.vue'),
    },
    {
        path: '/community',
        name: 'Community',
        component: () => import('@/modules/Community/Community.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
