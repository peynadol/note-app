<script setup lang="ts">
import NotesListCardTag from '@/components/NoteTag.vue'
</script>
<template>
  <div class="flex flex-col space-y-2 border-b border-slate-700 pb-4 w-full">
    <h1 class="text-2xl font-semibold">Vue Directives</h1>
    <!-- tag placeholder-->
    <div class="flex space-x-2">
      <NotesListCardTag />
    </div>
    <p class="text-sm text-gray-400">19 July 2025</p>
  </div>
</template>
