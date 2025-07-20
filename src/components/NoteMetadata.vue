<script setup lang="ts">
//TODO: make the white a little less harsh on the text
type NoteMetadataProps = {
  tags: string[]
  dateCreated: string
  lastEdited: string
}

defineProps<NoteMetadataProps>()
</script>
<template>
  <div class="grid grid-cols-[auto_1fr] gap-y-3 gap-x-4 text-sm text-slate-400 mb-6">
    <!-- Tags -->
    <p class="font-medium flex items-center">Tags</p>
    <p class="text-white">{{ tags.join(', ') }}</p>
    <!-- Date created -->
    <p class="font-medium">Date created</p>
    <p class="text-white">{{ dateCreated }}</p>

    <!-- Last edited -->
    <p class="font-medium">Last edited</p>
    <p class="text-white">{{ lastEdited }}</p>
  </div>
</template>
