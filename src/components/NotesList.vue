<script setup lang="ts">
import NotesListCard from './NotesListCard.vue'
type Note = {
  id: number
  title: string
  overview: string
  date: string
}

const notes: Note[] = [
  {
    id: 1,
    title: 'Grocery List',
    overview: 'Buy milk, eggs, and bread.',
    date: '2024-06-10',
  },
  {
    id: 2,
    title: 'Meeting Notes',
    overview: 'Discussed project milestones and deadlines.',
    date: '2024-06-09',
  },
  {
    id: 3,
    title: 'Book Ideas',
    overview: 'Outline for new science fiction novel.',
    date: '2024-06-08',
  },
]
</script>
<template>
  <div class="space-y-6">
    <button class="bg-blue-500 w-full rounded p-2">+ Create New Note</button>
    <!-- <ul class="space-y-4">
      <li
        v-for="note in notes"
        :key="note.id"
        class="p-4 bg-surface-800 rounded-lg shadow hover:bg-surface-700 transition-colors"
      >
        <h3 class="text-xl font-semibold">{{ note.title }}</h3>
        <p class="text-sm text-slate-400">{{ note.overview }}</p>
        <span class="text-xs text-slate-500">{{ note.date }}</span>
      </li>
    </ul> -->
    <NotesListCard />
    <NotesListCard />
    <NotesListCard />
  </div>
</template>
