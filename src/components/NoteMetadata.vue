<script setup lang="ts">
import { ref, watch } from 'vue'

type NoteMetadataProps = {
  tags: string[]
  dateCreated: string
  lastEdited: string
}

const props = defineProps<NoteMetadataProps>()
const emit = defineEmits<{
  (e: 'update:tags', tags: string[]): void
}>()

const tagsInput = ref(props.tags.join(', '))

watch(
  () => props.tags,
  (newTags) => {
    tagsInput.value = newTags.join(', ')
  },
)

const saveTags = () => {
  const parsed = tagsInput.value
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)

  emit('update:tags', [...new Set(parsed)])
}
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] gap-y-3 gap-x-4 text-sm text-slate-400 mb-6">
    <!-- Tags -->
    <p class="font-medium flex items-center">Tags</p>
    <input
      v-model="tagsInput"
      @blur="saveTags"
      @keydown.enter.prevent="saveTags"
      class="text-white bg-transparent outline-none border-b border-slate-600 placeholder-slate-500"
      placeholder="Add tags separated by commas"
    />

    <!-- Date created -->
    <p class="font-medium">Date created</p>
    <p class="text-white">{{ dateCreated }}</p>

    <!-- Last edited -->
    <p class="font-medium">Last edited</p>
    <p class="text-white">{{ lastEdited }}</p>
  </div>
</template>
