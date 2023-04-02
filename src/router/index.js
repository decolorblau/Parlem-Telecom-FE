import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import paths from './paths'

const { home, notFound, clients, detail } = paths

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: home,
      name: 'Home',
      component: HomeView
    },
    {
      path: clients,
      name: 'Clients',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: detail,
      name: 'Detail',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: notFound,
      name: 'NotFound',
      component: HomeView
    }
  ]
})

export default router
