import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () =>
            import ('@/components/DestinationShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id) }),
        children: [{
            path: ':experienceSlug',
            name: 'experience.show',
            component: () =>
                import ('@/components/ExperienceShow.vue'),
            props: route => ({...route.params, id: parseInt(route.params.id) }),

        }]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () =>
            import ('@/components/NotFound.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router