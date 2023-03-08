import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('../../views/home/index.vue')
    },
    {
        path:'/auth/login',
        name:'login',
        component: () => import('../../views/auth/login/index.vue'),
        meta:{
            layout:'auth',
            requiredAuth: false
        }
    },
    {
        path:'/auth/register',
        name:'register',
        component: () => import('../../views/auth/register/index.vue'),
        meta:{
            layout:'auth',
            requiredAuth: false
        }
    },
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