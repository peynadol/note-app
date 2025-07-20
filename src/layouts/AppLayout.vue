<script setup lang="ts">
import NotesList from '@/components/NotesList.vue'
import NoteContentContainer from '@/components/NoteContentContainer.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <div class="grid grid-cols-[16rem_1fr] min-h-screen">
    <LeftSidebar />
    <div class="flex flex-col h-full">
      <AppHeader />
      <main class="flex-1 bg-surface-900 text-white overflow-y-auto">
        <div class="grid grid-cols-[30%_1fr] h-full">
          <NotesList />
          <NoteContentContainer />
        </div>
      </main>
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  background-color: rgb(71 85 105);
}
</style>
