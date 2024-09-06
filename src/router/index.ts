import Home from '@/views/Home.vue'
import Terminal from '@/views/Terminal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: Terminal
    }
  ]
})

export default router
