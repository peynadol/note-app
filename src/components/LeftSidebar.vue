<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore'
import { computed } from 'vue'

const noteStore = useNoteStore()
const navItems = [
  { label: 'All Notes', icon: 'pi pi-book', name: 'notes' },
  { label: 'Archive', icon: 'pi pi-folder', name: 'archive' },
]

const tags = computed(() => {
  const allTags = noteStore.notes.flatMap((note) => note.tags)
  return [...new Set(allTags)]
})
</script>
<template>
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
          :key="tag"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-slate-700 cursor-pointer"
        >
          <i class="pi pi-tag"></i>
          <span>{{ tag }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>
