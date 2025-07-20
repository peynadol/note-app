<script setup lang="ts">
const note = {
  title: 'Sample Note',
  content: `This is a sample note to demonstrate how the note content will appear in the application. You can edit this note or add new notes to keep track of your thoughts and ideas.
You can also organize your notes by category, search for specific keywords, and pin important notes to the top of your list. Don't forget to regularly review and update your notes to stay organized and productive.
Feel free to experiment with different note-taking strategies to find what works best for you!`,
}
import NoteContentFooter from '@/components/NoteContentFooter.vue'
import NoteContentHeader from '@/components/NoteContentHeader.vue'
import NoteContent from '@/components/NoteContent.vue'
</script>
<template>
  <!-- Border wrapper -->
  <div class="h-full border-x border-slate-700">
    <!-- Inner content container -->
    <div class="h-full flex flex-col px-4">
      <NoteContentHeader :note="note" />
      <!-- Content -->
      <NoteContent :note="note" />
      <!-- Footer actions -->
      <div class="mt-auto pt-6 pb-6 flex justify-between items-center border-t border-slate-700">
        <NoteContentFooter />
      </div>
    </div>
  </div>
</template>
