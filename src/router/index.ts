import appState from '@/store/appStore'
import Dashboard from '@/views/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  appState.currentRoute = to.name
  next()
})

router.afterEach(() => {})

export default router
