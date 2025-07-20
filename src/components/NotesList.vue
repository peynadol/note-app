<script setup lang="ts">
import NotesListCard from './NotesListCard.vue'
import { useNoteStore } from '@/stores/noteStore'
import type { Note } from '@/stores/noteStore'
import { computed } from 'vue'

const noteStore = useNoteStore()
const notes = computed<Note[]>(() => noteStore.filteredNotes)
</script>
<template>
  <div class="space-y-6 p-4 w-full">
    <button class="bg-blue-500 w-full rounded p-2">+ Create New Note</button>
    <NotesListCard
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @select="noteStore.selectNote"
    />
  </div>
</template>
