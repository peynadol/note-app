<script setup lang="ts">
import NoteMetadata from './NoteMetadata.vue'
import NoteTitle from './NoteTitle.vue'
import type { Note } from '@/stores/noteStore'

defineProps<{
  note: Note
}>()
</script>
<template>
  <NoteTitle :title="note.title" />
  <NoteMetadata :tags="note.tags" :date-created="note.createdAt" :last-edited="note.updatedAt" />
</template>
