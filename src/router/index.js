import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Protected from '@/views/Protected.vue'
import sourceData from "@/data.json";

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/protected',
        name: 'protected',
        meta: { requiresAuth: true },
        component: () =>
            import ('@/views/Protected.vue'),
    },
    {
        path: '/invoices',
        name: 'invoices',
        meta: { requiresAuth: true },
        component: () =>
            import ('@/views/Invoices.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue')
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
                    params: { pathMatch: to.path.split('/').slice(1) },
                    query: to.query,
                    hash: to.hash,
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
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0 }), 300)
        })
    }
})
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.username) {
        return { name: 'login', query: { redirect: to.fullPath } }
    }
})
export default router