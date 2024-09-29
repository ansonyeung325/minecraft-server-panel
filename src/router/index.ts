import appState from '@/store/appStore'
import Dashboard from '@/views/Dashboard.vue'
import Properties from '@/views/Properties.vue'
import Terminal from '@/views/Terminal.vue'
import VersionControl from '@/views/VersionControl.vue'
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
      path: '/terminal',
      name: 'Terminal',
      component: Terminal
    },
    {
      path: '/properties',
      name: 'Properties',
      component: Properties
    },
    {
      path: '/version-control',
      name: 'VersionControl',
      component: VersionControl
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  appState.currentRoute = to.name
  next()
})

router.afterEach(() => {})

export default router
