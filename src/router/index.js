import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import paths from './paths'

const { home, notFound, clients, detail } = paths

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: home,
      name: 'home',
      component: HomeView
    },
    {
      path: clients,
      name: 'clients',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: detail,
      name: 'detail',
      component: () => import('../views/ClientDetailView.vue')
    },
    {
      path: notFound,
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
