<template>
  <aside
    :class="[
      'sidebar bg-secondary-default',
      sidebarOpen ? 'w-64' : 'w-20',
      'flex',
      'flex-col',
      'h-screen',
      'transition-all',
      'duration-300',
      'ease-in-out'
    ]"
  >
    <div class="sidebar-header flex items-center justify-between p-4">
      <div class="logo flex items-center" v-if="sidebarOpen">
        <img src="@/assets/logo.svg" alt="JoBins Logo" class="w-[34px] h-[34px] mr-2" />
        <span class="text-xl font-bold text-white">JoBins</span>
      </div>
      <div class="control cursor-pointer text-white" @click="sidebarOpen = !sidebarOpen">
        <img
          v-if="sidebarOpen"
          src="@/assets/logo.svg"
          alt="Collapse"
          class="w-[34px] h-[34px] transform rotate-180"
        />
        <img v-else src="@/assets/logo.svg" alt="Expand" class="w-[34px] h-[34px]" />
      </div>
    </div>
    <nav class="flex-1 mt-4">
      <RouterLink to="/" class="flex items-center p-4 hover:bg-primary-default">
        <img src="@/assets/logo.svg" alt="Dashboard" class="w-[34px] h-[34px]" />
        <span v-if="sidebarOpen" class="ml-sm">Dashboard</span>
      </RouterLink>
      <RouterLink to="/orders" class="flex items-center p-4 hover:bg-primary-default">
        <img src="@/assets/logo.svg" alt="Order Management" class="w-[34px] h-[34px]" />
        <span v-if="sidebarOpen">Order class="ml-sm" Management</span>
      </RouterLink>
      <RouterLink to="/brands" class="flex items-center p-4 hover:bg-primary-default">
        <img src="@/assets/logo.svg" alt="Brand" class="w-[34px] h-[34px]" />
        <span v-if="sidebarOpen" class="ml-sm">Brand</span>
      </RouterLink>
    </nav>
  </aside>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const sidebarOpen = ref(true)
</script>
