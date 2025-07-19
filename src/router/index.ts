import { createRouter, createWebHistory } from 'vue-router'
import NotesPage from '@/views/NotesPageView.vue'
import ArchivePage from '@/views/ArchivePageView.vue'
import Layout from '@/layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'notes',
        component: NotesPage,
      },
      {
        path: 'archive',
        name: 'archive',
        component: ArchivePage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
