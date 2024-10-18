import appState from '@/store'
import Dashboard from '@/views/Dashboard.vue'
import Configuration from '@/views/Configuration.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  appState.currentRoute = to.name
  next()
})

router.afterEach(() => {})

export default router
