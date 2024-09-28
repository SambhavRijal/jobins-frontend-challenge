<template>
  <div class="flex bg-primary-default">
    <!-- Sidebar -->
    <Sidebar />

    <!-- main Routes -->
    <div class="main-content grow">
      <Header />
      <main class="h-[calc(100vh-62px)] overflow-y-scroll px-md">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/partials/Sidebar.vue'
import Header from '@/components/partials/Header.vue'
import { ref } from 'vue'

const sidebarOpen = ref(true)
</script>
