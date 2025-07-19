<script setup lang="ts">
const note = {
  title: 'Sample Note',
  content:
    "This is a sample note to demonstrate how the note content will appear in the application. You can edit this note or add new notes to keep track of your thoughts and ideas. \n\nYou can also organize your notes by category, search for specific keywords, and pin important notes to the top of your list. Don't forget to regularly review and update your notes to stay organized and productive. \n\nFeel free to experiment with different note-taking strategies to find what works best for you!",
}
</script>
<template>
  <div class="border-x border-slate-700 px-4">
    <div>
      <!-- Header-->
      <h2 class="text-2xl font-semibold mb-4">{{ note.title }}</h2>

      <!-- Meta data -->
      <div class="w-[50%] grid grid-cols-2 gap-y-2 text-sm text-slate-400 mb-6">
        <p class="font-medium text-white">Tags</p>
        <p>Dev, Vue</p>

        <p class="font-medium text-white">Last edited</p>
        <p>19 July 2025</p>
      </div>
    </div>

    <!-- Content -->
    <p>{{ note.content }}</p>

    <!-- Footer -->
    <div class="mt-6 flex justify-between items-center">
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Note</button>
      <button class="text-white px-4 py-2 rounded hover:bg-red-600">Cancel Note</button>
    </div>
  </div>
</template>
