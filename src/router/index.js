import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Panama from '@/views/Panama.vue'
import Jamaica from '@/views/Jamaica.vue'

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
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router