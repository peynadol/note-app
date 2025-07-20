import { defineStore } from 'pinia'
// maybe default the selected note to the most recent one

export type Note = {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
  archived: boolean
}

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [
      {
        id: '1',
        title: 'Vue Notes',
        content: 'Script setup is neat. Use defineProps for clarity.',
        tags: ['Vue', 'Tips'],
        createdAt: '2025-07-15',
        updatedAt: '2025-07-18',
        archived: false,
      },
      {
        id: '2',
        title: 'Archived ideas',
        content: 'Think about keyboard shortcuts for editing flow.',
        tags: ['UX'],
        createdAt: '2025-07-10',
        updatedAt: '2025-07-17',
        archived: true,
      },
      {
        id: '3',
        title: 'Note-taking strategies',
        content: 'Organize notes by category, search keywords, pin important notes.',
        tags: ['Productivity', 'Organization'],
        createdAt: '2025-07-20',
        updatedAt: '2025-07-20',
        archived: false,
      },
      {
        id: '4',
        title: 'Daily Journal',
        content: 'Reflect on the day, jot down thoughts, and plan for tomorrow.',
        tags: ['Personal', 'Reflection'],
        createdAt: '2025-07-21',
        updatedAt: '2025-07-21',
        archived: false,
      },
    ] as Note[],
    selectedNoteId: '1',
    searchQuery: '',
  }),

  getters: {
    selectedNote: (state) => {
      return state.notes.find((note) => note.id === state.selectedNoteId) || null
    },
    filteredNotes: (state) => {
      if (!state.searchQuery.trim()) return state.notes

      const query = state.searchQuery.toLowerCase()

      return state.notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tags.some((tag) => tag.toLowerCase().includes(query))
        )
      })
    },
  },

  actions: {
    selectNote(id: string) {
      this.selectedNoteId = id
    },
  },
})
