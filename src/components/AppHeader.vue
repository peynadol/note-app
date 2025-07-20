<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore'

const noteStore = useNoteStore()
</script>

<template>
  <header class="bg-surface-700 text-white px-6 py-4 shadow border-b border-slate-700">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-bold">All Notes</h1>
      <div>
        <input
          v-model="noteStore.searchQuery"
          type="text"
          placeholder="Search by title, content, or tags..."
          class="mt-2 p-2 rounded bg-surface-800 border border-slate-500 w-[300px]"
        />
        <button class="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Settings
        </button>
      </div>
    </div>
  </header>
</template>
