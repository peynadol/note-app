<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore'
import type { Note } from '@/stores/noteStore'
import { computed, watch } from 'vue'
import { debounce } from 'lodash-es'

const noteStore = useNoteStore()
const note = computed(() => noteStore.selectedNote)

const saveToLocalStorage = () => {
  const data = JSON.stringify(noteStore.notes)
  localStorage.setItem('notes', data)
}

const debouncedSave = debounce((note: Note) => {
  noteStore.updateNote(note)
  saveToLocalStorage()
}, 500)

watch(
  () => note.value?.title,
  () => {
    if (note.value) debouncedSave(note.value)
  },
)
</script>

<template>
  <input
    v-if="note"
    v-model="note.title"
    class="text-2xl font-semibold mb-4 pt-4 bg-transparent outline-none w-full"
    placeholder="Untitled note"
  />
</template>
