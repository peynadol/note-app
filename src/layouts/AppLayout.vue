<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NotesList from '@/components/NotesList.vue'
import NoteContentContainer from '@/components/NoteContentContainer.vue'
import NoteActions from '@/components/NoteActions.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
// const navItems = [
//   { label: 'All Notes', icon: 'pi pi-book', name: 'notes' },
//   { label: 'Archive', icon: 'pi pi-folder', name: 'archive' },
// ]
// TODO: replace with dynamic tags from a store or API
// TODO: make tags toggleable and filter notes based on selected tags
// const tags = [
//   { label: 'Work', icon: 'pi pi-tag', name: 'work' },
//   { label: 'Personal', icon: 'pi pi-tag', name: 'personal' },
//   { label: 'Important', icon: 'pi pi-tag', name: 'important' },
//   { label: 'Ideas', icon: 'pi pi-tag', name: 'ideas' },
//   { label: 'To-Do', icon: 'pi pi-tag', name: 'todo' },
//   { label: 'Inspiration', icon: 'pi pi-tag', name: 'inspiration' },
//   { label: 'Favorites', icon: 'pi pi-tag', name: 'favorites' },
// ]
</script>
<template>
  <div class="grid grid-cols-[16rem_1fr] min-h-screen">
    <LeftSidebar />
    <!-- Main content area -->
    <div class="flex flex-col h-full">
      <!-- Header inside content area -->
      <header class="bg-surface-700 text-white px-6 py-4 shadow border-b border-slate-700">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold">All Notes</h1>
          <div>
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              class="mt-2 p-2 rounded bg-surface-800 border border-slate-500 w-[300px]"
            />
            <!-- Placeholder for settings cog -->
            <button class="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Settings
            </button>
          </div>
        </div>
      </header>
      <!-- Routed page content -->
      <main class="flex-1 bg-surface-900 text-white overflow-y-auto">
        <div class="grid grid-cols-[16rem_1fr_14rem] h-full">
          <NotesList />
          <NoteContentContainer />
          <NoteActions />
        </div>
      </main>
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  background-color: rgb(71 85 105);
}
</style>
