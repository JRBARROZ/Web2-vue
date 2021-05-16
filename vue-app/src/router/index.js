import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlacarView from '../views/PlacarView.vue'
import Testing from '../views/TestingView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/placar',
    name: 'PlacarView',
    component: PlacarView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/teste',
    name: 'tes',
    component : Testing,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
