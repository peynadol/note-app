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
  }),

  getters: {
    selectedNote: (state) => {
      return state.notes.find((note) => note.id === state.selectedNoteId) || null
    },
    filteredNotes: (state) => {
      if (!state.searchQuery.trim() && !state.selectedTags.length) return state.notes

      return state.notes.filter((note) => {
        const query = state.searchQuery.toLowerCase()

        // Check if it passes search test (only if there's a search query)
        const passesSearch =
          !state.searchQuery.trim() ||
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tags.some((tag) => tag.toLowerCase().includes(query))

        // Check if it passes tag test (only if there are selected tags)
        const passesTags =
          !state.selectedTags.length || note.tags.some((tag) => state.selectedTags.includes(tag))

        // Note must pass both tests
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
  },
})
