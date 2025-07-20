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
  <p class="text-slate-200 leading-relaxed whitespace-pre-line border-t border-slate-700 pt-4">
    {{ note.content }}
  </p>
</template>
