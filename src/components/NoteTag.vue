<script setup lang="ts">
type NoteTagProps = {
  tag: string
  variant?: 'card' | 'metadata'
}
defineProps<NoteTagProps>()
</script>
<template>
  <span :class="['text-sm text-white', variant === 'card' ? 'bg-slate-600 px-2 py-1 rounded' : '']">
    {{ tag }}
  </span>
</template>
