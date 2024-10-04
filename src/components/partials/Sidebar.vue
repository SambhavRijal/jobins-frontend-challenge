<template>
  <aside
    class="sidebar bg-secondary-default text-primary-gray flex flex-col h-screen transition-all duration-300 ease-in-out"
    :class="{ 'w-[300px] md:px-md': sidebarOpen, 'w-[70px] px-none': !sidebarOpen }"
  >
    <div class="sidebar-header flex items-center justify-between py-sm">
      <div class="logo flex gap-xs items-center justify-center" v-if="sidebarOpen">
        <img src="@/assets/jobbins-logo.png" alt="JoBins Logo" class="w-[28px] h-[28px]" />
        <span class="text-2xl font-bold text-primary-dark">JoBins</span>
      </div>
      <div
        class="control cursor-pointer"
        :class="{ 'grow px-sm': !sidebarOpen }"
        @click="toggleSidebar"
      >
        <IconMenu2 class="w-[28px] h-[28px]" />
      </div>
    </div>
    <div v-for="(menuGroup, index) in menuItems" :key="index">
      <p class="text-xs uppercase text-primary-gray py-sm px-sm" v-if="sidebarOpen">
        {{ menuGroup.title }}
      </p>
      <nav class="flex flex-col gap-xs mt-4">
        <RouterLink
          v-for="(item, itemIndex) in menuGroup.children"
          :key="itemIndex"
          :to="item.link"
          class="flex items-center py-xs px-sm transition-colors duration-200 hover:bg-gray-200 rounded-md"
          :class="{ 'bg-secondary-light': item.active }"
        >
          <component
            :is="item.icon"
            class="w-[28px] h-[28px]"
            :class="{ 'text-primary-dark': item.active }"
          />
          <span
            v-if="sidebarOpen"
            class="ml-sm"
            :class="{ 'font-semibold text-primary-dark': item.active }"
            >{{ item.title }}</span
          >
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps, ref } from 'vue'
import {
  IconSmartHome,
  IconShoppingCart,
  IconStar,
  IconCirclePlus,
  IconCube,
  IconMenu2
} from '@tabler/icons-vue'

defineProps<{
  sidebarOpen: boolean
}>()

const emit = defineEmits(['toggleSidebar'])

const toggleSidebar = () => {
  emit('toggleSidebar')
}

const menuItems = ref([
  {
    title: 'Main Menu',
    children: [
      { title: 'Dashboard', link: '/', icon: IconSmartHome, active: true },
      { title: 'Order Management', link: '/orders', icon: IconShoppingCart },
      { title: 'Brand', link: '/brands', icon: IconStar }
    ]
  },
  {
    title: 'Products',
    children: [
      { title: 'Add Products', link: '/add-products', icon: IconCirclePlus },
      { title: 'Product List', link: '/product-list', icon: IconCube }
    ]
  }
])
</script>
