<script setup lang="ts">
import NoteContentFooter from '@/components/NoteContentFooter.vue'
import NoteContentHeader from '@/components/NoteContentHeader.vue'
import NoteContent from '@/components/NoteContent.vue'
import { useNoteStore } from '@/stores/noteStore'
import type { Note } from '@/stores/noteStore'
import { computed } from 'vue'

const noteStore = useNoteStore()
const note = computed<Note | null>(() => noteStore.selectedNote)
</script>
<template>
  <div v-if="note" class="h-full border-x border-slate-700">
    <div class="h-full flex flex-col px-4">
      <NoteContentHeader :note="note" />
      <NoteContent :note="note" />
      <div class="mt-auto pt-6 pb-6 flex justify-between items-center border-t border-slate-700">
        <NoteContentFooter />
      </div>
    </div>
  </div>
  <div v-else class="p-4 text-slate-400">Select a note to get started</div>
</template>
