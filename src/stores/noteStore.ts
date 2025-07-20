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
    selectedTags: [] as string[],
    viewMode: 'notes' as 'notes' | 'archived',
  }),

  getters: {
    selectedNote: (state) => {
      return state.notes.find((note) => note.id === state.selectedNoteId) || null
    },
    filteredNotes: (state) => {
      let notes = state.notes

      // Apply archive filter
      notes = notes.filter((note) =>
        state.viewMode === 'archived' ? note.archived : !note.archived,
      )

      // If no filters, return early
      if (!state.searchQuery.trim() && !state.selectedTags.length) return notes

      const query = state.searchQuery.toLowerCase()

      return notes.filter((note) => {
        const passesSearch =
          !state.searchQuery.trim() ||
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tags.some((tag) => tag.toLowerCase().includes(query))

        const passesTags =
          !state.selectedTags.length || note.tags.some((tag) => state.selectedTags.includes(tag))

        return passesSearch && passesTags
      })
    },
  },

  actions: {
    selectNote(id: string) {
      this.selectedNoteId = id
    },
    toggleTag(tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (index > -1) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
    },
    setViewMode(mode: 'notes' | 'archived') {
      this.viewMode = mode
    },
  },
})
