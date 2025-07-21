<script setup lang="ts">
//TODO: think about ways to add tags
import { useNoteStore } from '@/stores/noteStore'
import { computed, watch } from 'vue'
import { debounce } from 'lodash-es'

const noteStore = useNoteStore()
const note = computed(() => noteStore.selectedNote)
const debouncedSave = debounce((note) => {
  noteStore.updateNote(note)
  localStorage.setItem('notes', JSON.stringify(noteStore.notes))
}, 500)

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
  <textarea
    v-if="note"
    v-model="note.content"
    class="w-full text-slate-200 leading-relaxed bg-transparent outline-none resize-none whitespace-pre-line border-t border-slate-700 pt-4"
    rows="12"
    placeholder="Start writing..."
  />
</template>
