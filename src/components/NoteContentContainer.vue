<script setup lang="ts">
import NoteContentHeader from '@/components/NoteContentHeader.vue'
import NoteContent from '@/components/NoteContent.vue'
import { useNoteStore } from '@/stores/noteStore'
import type { Note } from '@/stores/noteStore'
import { computed } from 'vue'

const noteStore = useNoteStore()
const note = computed<Note | null>(() => noteStore.selectedNote)
</script>
<template>
  <div v-if="note" class="h-full border-l border-slate-700">
    <div class="h-full flex flex-col px-4">
      <NoteContentHeader :note="note" />
      <NoteContent :note="note" />
    </div>
  </div>
  <div v-else class="p-4 text-slate-400">Select a note to get started</div>
</template>
