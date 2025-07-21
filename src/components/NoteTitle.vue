<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore'
import type { Note } from '@/stores/noteStore'
import { computed, watch, ref, nextTick } from 'vue'
import { debounce } from 'lodash-es'

const noteStore = useNoteStore()
const note = computed(() => noteStore.selectedNote)
const titleInput = ref<HTMLInputElement | null>(null)

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
  (newVal, oldVal) => {
    if (newVal !== oldVal && note.value) {
      debouncedSave(note.value)
    }
  },
)
watch(
  () => noteStore.selectedNoteId,
  async () => {
    await nextTick()
    titleInput.value?.focus()
  },
)

watch(
  () => note.value?.content,
  (newVal, oldVal) => {
    if (newVal !== oldVal && note.value) {
      debouncedSave(note.value)
    }
  },
)
</script>

<template>
  <input
    v-if="note"
    v-model="note.title"
    class="text-2xl font-semibold mb-4 pt-4 bg-transparent outline-none w-full"
    ref="titleInput"
    placeholder="Untitled note"
  />
</template>
