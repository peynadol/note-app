import { createRouter, createWebHistory } from 'vue-router'
import NotesPage from '@/views/NotesPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: NotesPage,
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/views/ArchivePageView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
