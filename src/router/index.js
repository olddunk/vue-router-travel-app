import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from "@/data.json";

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
        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if (!exists) {
                return {
                    name: 'NotFound',
                    params: { pathMatch: to.path.split('/').slice(1) }
                }
            }
        },
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
        name: 'NotFound',
        component: () =>
            import ('@/components/NotFound.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router