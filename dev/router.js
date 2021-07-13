import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    redirect: '/dashboard',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard.vue')
        },
        {
            path: '/s-alerts',
            name: 's-alerts',
            component: () => import(/* webpackChunkName: "s-alerts" */ './views/s-alerts.vue')
        },
        {
            path: '/s-column',
            name: 's-column',
            component: () => import(/* webpackChunkName: "s-column" */ './views/s-column.vue')
        },
        {
            path: '/s-title',
            name: 's-title',
            component: () => import(/* webpackChunkName: "s-title" */ './views/s-title.vue')
        },
        {
            path: '/s-working',
            name: 's-working',
            component: () => import(/* webpackChunkName: "s-working" */ './views/s-working.vue')
        },
    ]
})

export default router;