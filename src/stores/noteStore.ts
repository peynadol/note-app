import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

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

// default notes to use if localStorage is empty - mainly for development purposes
// these can later be removed and will render a no notes message

const defaultNotes: Note[] = [
  {
    id: '1',
    title: 'Vue Notes',
    content: 'Script setup is neat. Use defineProps for clarity.',
    tags: ['Vue', 'Tips'],
    createdAt: '18/07/2025',
    updatedAt: '2025-07-18',
    archived: false,
  },
  {
    id: '2',
    title: 'Archived ideas',
    content: 'Think about keyboard shortcuts for editing flow.',
    tags: ['UX'],
    createdAt: '10/07/2025',
    updatedAt: '2025-07-17',
    archived: true,
  },
  {
    id: '3',
    title: 'Note-taking strategies',
    content: 'Organize notes by category, search keywords, pin important notes.',
    tags: ['Productivity', 'Organization'],
    createdAt: '18/07/2025',
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
]

// function to load notes from localStorage
const loadNotesFromLocalStorage = (): Note[] => {
  try {
    const saved = localStorage.getItem('notes')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading notes from localStorage:', error)
  }
  return defaultNotes
}

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: loadNotesFromLocalStorage(),
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
    updateNote(updated: Note) {
      const index = this.notes.findIndex((n) => n.id === updated.id)
      if (index !== -1) {
        this.notes[index] = {
          ...updated,
          updatedAt: new Date().toLocaleDateString(),
        }
      }
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => note.id !== id)
    },
    createNote() {
      const newNote: Note = {
        id: nanoid(),
        title: '',
        content: '',
        tags: [],
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        archived: false,
      }
      this.notes.unshift(newNote)
      this.selectedNoteId = newNote.id
    },
    updateNoteTags(noteId: string, newTags: string[]) {
      const note = this.notes.find((n) => n.id === noteId)
      if (note) {
        note.tags = newTags
        this.updateNote(note)
        localStorage.setItem('notes', JSON.stringify(this.notes))
      }
    },
  },
})
