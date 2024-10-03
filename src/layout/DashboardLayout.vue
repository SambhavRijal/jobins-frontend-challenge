<template>
  <div class="flex bg-primary-default w-screen">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar" />

    <!-- main Routes -->
    <div class="main-content grow">
      <Header />
      <main
        :class="[
          'h-[calc(100vh-70px)] overflow-y-scroll px-xs md:px-md',
          sidebarOpen ? 'w-[calc(100vw-300px)]' : 'w-[calc(100vw-70px)]'
        ]"
      >
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/partials/Sidebar.vue'
import Header from '@/components/partials/Header.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const sidebarOpen = ref(window.innerWidth > 1024)

const checkScreenSize = () => {
  sidebarOpen.value = window.innerWidth > 1024
}

const toggleSidebar = () => {
  if (window.innerWidth > 788) {
    sidebarOpen.value = !sidebarOpen.value
  }
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
