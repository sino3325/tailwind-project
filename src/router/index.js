import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: HomeView
      },
      meta: {
        title: 'ホームページ'
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        main: () => import('../views/AboutView.vue')
      },
      meta: {
        title: 'アバウトページ'
      }
    }
  ]
})

export default router
