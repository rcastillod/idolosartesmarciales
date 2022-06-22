import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuscadorView from '@/views/BuscadorView.vue'

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
    component: () => import(/* webpackChunkName: "peleadores" */ '../views/PeleadoresView.vue')
  },
  {
    path: '/peleador/:id',
    name: 'peleador',
    component: () => import(/* webpackChunkName: "peleadores" */ '../views/PeleadorView.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
