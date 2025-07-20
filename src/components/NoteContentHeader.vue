<script setup lang="ts">
import NoteMetadata from './NoteMetadata.vue'
import NoteTitle from './NoteTitle.vue'

type Note = {
  title: string
  content: string
  tags: string[]
  dateCreated: string
  lastEdited: string
}
defineProps<{
  note: Note
}>()
</script>
<template>
  <!-- Title -->
  <NoteTitle :title="note.title" />
  <NoteMetadata :tags="note.tags" :date-created="note.dateCreated" :last-edited="note.lastEdited" />
</template>
