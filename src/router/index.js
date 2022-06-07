import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
<<<<<<< HEAD
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Panama from '@/views/Panama.vue'
import Jamaica from '@/views/Jamaica.vue'
import DestinationShow from '@/components/DestinationShow.vue'
=======

>>>>>>> lesson2

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
<<<<<<< HEAD
        component: Jamaica
    },
    {
        path: '/destination',
        name: 'DestinationShow',
        component: DestinationShow
=======
        component: () =>
            import ('@/views/Jamaica.vue')
>>>>>>> lesson2
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router