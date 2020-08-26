import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard.vue')
        },
        {
            path: '/s-title',
            name: 's-title',
            component: () => import(/* webpackChunkName: "s-title" */ './views/s-title.vue')
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        // },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
        // },
        // {
        //     path: '*',
        //     redirect: '/login'
        // }
    ]
})

export default router;