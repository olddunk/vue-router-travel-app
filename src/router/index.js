import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DestinationShow from '@/components/DestinationShow.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: () =>
            import ('@/views/Brazil.vue')
    },
    {
        path: '/panama',
        name: 'Panama',
        component: () =>
            import ('@/views/Panama.vue')
    },
    {
        path: '/hawaii',
        name: 'Hawaii',
        component: () =>
            import ('@/views/Hawaii.vue')
    },
    {
        path: '/jamaica',
        name: 'Jamaica',
        component: () =>
            import ('@/views/Jamaica.vue')
    },
    {
        path: '/destination/:id',
        name: 'DestinationShow',
        component: DestinationShow
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router