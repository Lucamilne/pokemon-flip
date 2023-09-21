import { createRouter, createWebHistory } from 'vue-router'
import TheBoard from '../views/TheBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheBoard
    },
  ]
})

export default router
