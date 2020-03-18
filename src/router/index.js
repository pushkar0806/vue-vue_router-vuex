import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/views/Introduction'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'introduction',
            component: Introduction
        },
        {
            path: '/spec',
            name: 'Spec',
            component: () => import(/* webpackChunkName: "spec" */ '@/views/Spec.vue')
        },
        {
            path: '/history',
            name: 'history',
            component: () => import(/* webpackChunkName: "spec" */ '@/views/History.vue')
        },
        {
            path: '/*',
            name: 'Unknown',
            component: () => import(/* webpackChunkName: "spec" */ '@/views/Unknown.vue')
        }
    ]
})