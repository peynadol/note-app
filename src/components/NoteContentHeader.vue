<script setup lang="ts">
type Note = {
  title: string
  content: string
}
defineProps<{
  note: Note
}>()
</script>
<template>
  <!-- Title -->
  <h2 class="text-2xl font-semibold mb-4 pt-4">{{ note.title }}</h2>
  <!-- Meta info -->
  <div class="w-[50%] grid grid-cols-2 gap-y-2 text-sm text-slate-400 mb-6">
    <p class="font-medium text-white">Tags</p>
    <p>Dev, Vue</p>
    <p class="font-medium text-white">Last edited</p>
    <p>19 July 2025</p>
  </div>
</template>
