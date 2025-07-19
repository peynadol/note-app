<script setup lang="ts">
const note = {
  title: 'Sample Note',
  content:
    "This is a sample note to demonstrate how the note content will appear in the application. You can edit this note or add new notes to keep track of your thoughts and ideas. \n\nYou can also organize your notes by category, search for specific keywords, and pin important notes to the top of your list. Don't forget to regularly review and update your notes to stay organized and productive. \n\nFeel free to experiment with different note-taking strategies to find what works best for you!",
}
</script>
<template>
  <div class="p-6 border-x border-slate-700">
    <h2>{{ note.title }}</h2>
    <p>{{ note.content }}</p>
  </div>
</template>
