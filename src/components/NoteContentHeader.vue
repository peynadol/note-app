<script setup lang="ts">
import NoteMetadata from './NoteMetadata.vue'
import NoteTitle from './NoteTitle.vue'
import type { Note } from '@/stores/noteStore'
import { useNoteStore } from '@/stores/noteStore'

const props = defineProps<{
  note: Note
}>()

const noteStore = useNoteStore()

const updateTags = (newTags: string[]) => {
  noteStore.updateNoteTags(props.note.id, newTags)
}
</script>

<template>
  <NoteTitle :title="note.title" />
  <NoteMetadata
    :tags="note.tags"
    :date-created="note.createdAt"
    :last-edited="note.updatedAt"
    @update:tags="updateTags"
  />
</template>
