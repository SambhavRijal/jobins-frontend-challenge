<template>
  <aside
    :class="[
      'sidebar bg-secondary-default text-primary-gray ',
      sidebarOpen ? 'w-[300px] md:px-md' : 'w-[70px] px-none',
      'flex',
      'flex-col',
      'h-screen',
      'transition-all',
      'duration-300',
      'ease-in-out  '
    ]"
  >
    <div class="sidebar-header flex items-center justify-between py-sm">
      <div class="logo flex gap-xs items-center justify-center" v-if="sidebarOpen">
        <img src="@/assets/logo.svg" alt="JoBins Logo" class="w-[28px] h-[28px]" />
        <span class="text-2xl font-bold text-primary-dark">JoBins</span>
      </div>
      <div
        class="control cursor-pointer text-white"
        :class="{ 'grow px-sm': !sidebarOpen }"
        @click="toggleSidebar"
      >
        <img
          v-if="sidebarOpen"
          src="@/assets/logo.svg"
          alt="Collapse"
          class="w-[28px] h-[28px] mx-auto"
        />
        <img v-else src="@/assets/logo.svg" alt="Expand" class="w-[28px] h-[28px]" />
      </div>
    </div>
    <div>
      <p class="text-xs uppercase text-primary-gray py-sm px-sm" v-if="sidebarOpen">Main Menu</p>
      <nav class="flex flex-col gap-xs mt-4">
        <RouterLink to="/" class="flex items-center py-xs bg-secondary-light px-sm rounded-md">
          <img src="@/assets/logo.svg" alt="Dashboard" class="w-[28px] h-[28px]" />
          <span v-if="sidebarOpen" class="ml-sm font-semibold text-primary-dark">Dashboard</span>
        </RouterLink>
        <RouterLink to="/orders" class="flex items-center py-xs px-sm">
          <img src="@/assets/logo.svg" alt="Order Management" class="w-[28px] h-[28px]" />
          <span v-if="sidebarOpen" class="ml-sm">Order Management</span>
        </RouterLink>
        <RouterLink to="/brands" class="flex items-center py-xs px-sm">
          <img src="@/assets/logo.svg" alt="Brand" class="w-[28px] h-[28px]" />
          <span v-if="sidebarOpen" class="ml-sm">Brand</span>
        </RouterLink>
      </nav>
    </div>
    <div class="">
      <p class="text-xs uppercase text-primary-gray py-sm px-sm mt-sm" v-if="sidebarOpen">
        Products
      </p>
      <nav class="flex flex-col gap-xs">
        <RouterLink to="/" class="flex items-center py-xs px-sm">
          <img src="@/assets/logo.svg" alt="Dashboard" class="w-[28px] h-[28px]" />
          <span v-if="sidebarOpen" class="ml-sm">Add Products</span>
        </RouterLink>
        <RouterLink to="/" class="flex items-center py-xs px-sm">
          <img src="@/assets/logo.svg" alt="Dashboard" class="w-[28px] h-[28px]" />
          <span v-if="sidebarOpen" class="ml-sm">Product List</span>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps<{
  sidebarOpen: boolean
}>()

const emit = defineEmits(['toggleSidebar'])

const toggleSidebar = () => {
  emit('toggleSidebar')
}
</script>
