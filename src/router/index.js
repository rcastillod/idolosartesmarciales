import Vue from 'vue'
import VueRouter from 'vue-router'
import BuscadorView from '@/views/BuscadorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    component: () => import(/* webpackChunkName: "peleador" */ '../views/PeleadorView.vue'),
    props: true
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
