import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuscadorView from '@/views/BuscadorView.vue'
import PeleadoresView from '@/views/PeleadoresView.vue'
import PeleadorView from '@/views/PeleadorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: BuscadorView
  },
  {
    path: '/peleadores',
    name: 'peleadores',
    component: PeleadoresView
  },
  {
    path: '/peleador/:id',
    name: 'peleador',
    component: PeleadorView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
