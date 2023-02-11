import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('../../views/home/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash }
        if (savedPosition) return savedPosition
    
        return { top: 0 }
      },
})

export default router