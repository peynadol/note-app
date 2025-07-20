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
  <p class="text-slate-200 leading-relaxed whitespace-pre-line">
    {{ note.content }}
  </p>
</template>
