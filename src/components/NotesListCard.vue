<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore'
import NoteTag from '@/components/NoteTag.vue'
defineProps<{
  note: {
    id: string
    title: string
    tags: string[]
    createdAt: string
  }
}>()

const noteStore = useNoteStore()
const emit = defineEmits<{
  (e: 'select', id: string): void
}>()
</script>
<template>
  <div
    @click="emit('select', note.id)"
    :class="[
      'rounded p-1 pl-2 cursor-pointer space-y-2 border-b border-slate-700',
      note.id === noteStore.selectedNoteId ? 'bg-slate-700' : 'hover:bg-slate-600',
    ]"
  >
    <h1 class="text-2xl font-semibold">{{ note.title }}</h1>
    <div class="flex space-x-2">
      <NoteTag v-for="tag in note.tags" :key="tag" :tag="tag" :variant="'card'" />
    </div>
    <p class="text-sm text-gray-400">{{ note.createdAt }}</p>
  </div>
</template>
