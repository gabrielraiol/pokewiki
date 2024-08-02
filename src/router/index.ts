import { createRouter, createWebHistory } from 'vue-router'

import SearchView from '@/views/search-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchView
    }
  ]
})

export default router
