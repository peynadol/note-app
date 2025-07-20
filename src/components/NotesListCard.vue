<script setup lang="ts">
import NoteTag from '@/components/NoteTag.vue'
defineProps<{
  note: {
    title: string
    tags: string[]
    createdAt: string
  }
}>()
</script>
<template>
  <div class="flex flex-col space-y-2 border-b border-slate-700 pb-4 w-full">
    <h1 class="text-2xl font-semibold">{{ note.title }}</h1>
    <div class="flex space-x-2">
      <NoteTag v-for="tag in note.tags" :key="tag" :tag="tag" :variant="'card'" />
    </div>
    <p class="text-sm text-gray-400">{{ note.createdAt }}</p>
  </div>
</template>
