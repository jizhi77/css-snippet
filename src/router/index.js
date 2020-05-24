import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/common',
    name: 'Common',
    component: Layout,
    children: [
      {
        path: '',
        name: 'commonHome',
        component: () => import(/* webpackChunkName: "home" */ '@/views/common/index.vue'),
      },
      {
        path: 'shape',
        name: 'commonShape',
        component: () => import(/* webpackChunkName: "home" */ '@/views/common/shape.vue'),
      },
    ],
  },
  {
    path: '/loader',
    name: 'loader',
    component: Layout,
    children: [
      {
        path: '',
        name: 'LoaderHome',
        component: () => import(/* */ '@/views/loaders/index.vue'),
      },
      {
        path: '/ball-beat',
        name: 'LoaderBallBeat',
        component: () => import(/* */ '@/views/loaders/components/ball-beat.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
