<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NotesList from '@/components/NotesList.vue'
import NoteContent from '@/components/NoteContent.vue'
import NoteActions from '@/components/NoteActions.vue'
const navItems = [
  { label: 'All Notes', icon: 'pi pi-book', name: 'notes' },
  { label: 'Archive', icon: 'pi pi-folder', name: 'archive' },
]

// TODO: replace with dynamic tags from a store or API
// TODO: make tags toggleable and filter notes based on selected tags
const tags = [
  { label: 'Work', icon: 'pi pi-tag', name: 'work' },
  { label: 'Personal', icon: 'pi pi-tag', name: 'personal' },
  { label: 'Important', icon: 'pi pi-tag', name: 'important' },
  { label: 'Ideas', icon: 'pi pi-tag', name: 'ideas' },
  { label: 'To-Do', icon: 'pi pi-tag', name: 'todo' },
  { label: 'Inspiration', icon: 'pi pi-tag', name: 'inspiration' },
  { label: 'Favorites', icon: 'pi pi-tag', name: 'favorites' },
]
</script>

<template>
  <div class="grid grid-cols-[16rem_1fr] min-h-screen">
    <!-- Sidebar -->
    <aside class="bg-surface-800 text-white border-r border-slate-700 p-4">
      <h2 class="text-xl font-bold mb-6">My Notes</h2>

      <!-- Nav links -->
      <nav class="flex flex-col gap-2 border-b border-slate-700 pb-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-slate-700"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>

      <!-- Tags -->
      <nav class="flex flex-col gap-2 mt-6">
        <h3 class="text-lg font-semibold mb-2">Tags</h3>
        <ul class="space-y-1">
          <li
            v-for="tag in tags"
            :key="tag.name"
            class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-slate-700 cursor-pointer"
          >
            <i :class="tag.icon"></i>
            <span>{{ tag.label }}</span>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content area -->
    <div class="flex flex-col">
      <!-- Header inside content area -->
      <header class="bg-surface-700 text-white px-6 py-4 shadow border-b border-slate-700">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold">All Notes</h1>
          <div>
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              class="mt-2 p-2 rounded bg-surface-800 border border-slate-500 w-[300px]"
            />
            <!-- Placeholder for settings cog -->
            <button class="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Settings
            </button>
          </div>
        </div>
      </header>

      <!-- Routed page content -->
      <main class="flex-1 p-8 bg-surface-900 text-white overflow-y-auto">
        <div class="grid grid-cols-[14rem_1fr_14rem] gap-6">
          <NotesList />
          <NoteContent />
          <NoteActions />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: rgb(71 85 105);
}
</style>
