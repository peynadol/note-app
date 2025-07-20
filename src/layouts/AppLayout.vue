<script setup lang="ts">
import NotesList from '@/components/NotesList.vue'
import NoteContentContainer from '@/components/NoteContentContainer.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
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
        <div class="grid grid-cols-[30%_1fr] h-full">
          <NotesList />
          <NoteContentContainer />
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
