import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Panama from '@/views/Panama.vue'
import Jamaica from '@/views/Jamaica.vue'
import DestinationShow from '@/components/DestinationShow.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: Brazil
    },
    {
        path: '/panama',
        name: 'Panama',
        component: Panama
    },
    {
        path: '/hawaii',
        name: 'Hawaii',
        component: Hawaii
    },
    {
        path: '/jamaica',
        name: 'Jamaica',
        component: Jamaica
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