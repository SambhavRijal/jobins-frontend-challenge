<template>
  <header class="h-[70px] flex items-center justify-between px-md pr-lg relative">
    <div class="title text-2xl font-bold">{{ pageTitle }}</div>
    <div class="actions flex gap-md">
      <!-- Notification button -->
      <div
        class="notification relative px-xxs flex items-center cursor-pointer transition-transform duration-200 hover:scale-110"
        @click.stop="toggleNotificationMenu"
      >
        <IconBell class="w-[26px] h-[36px] text-primary-gray" />
        <div
          v-if="unreadNotificationsCount > 0"
          class="absolute top-none right-none text-xs w-[18px] h-[18px] font-semibold text-white flex justify-center items-center bg-danger-default rounded-full"
        >
          {{ unreadNotificationsCount }}
        </div>
      </div>
      <!-- Notification menu -->
      <div
        v-if="isNotificationMenuOpen"
        class="absolute top-full right-xl bg-secondary-default rounded-md shadow-lg z-10 max-w-[calc(100vw-2rem)] max-h-[400px] overflow-y-auto"
      >
        <!-- Notification menu header -->
        <div
          class="flex justify-between items-center sticky top-0 bg-secondary-default py-sm px-sm"
        >
          <p class="text-xs uppercase text-primary-gray">- Notifications</p>
          <button @click="readAllNotifications" class="text-xs text-primary-dark hover:underline">
            Read All
          </button>
        </div>
        <!-- Notification list -->
        <div class="flex flex-col gap-xs notification-list">
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            @click="markNotificationAsSeen(index)"
            class="flex items-center py-xs px-sm transition-colors duration-200 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            <component
              :is="notification.icon"
              class="w-[28px] h-[28px] flex-shrink-0"
              :class="{
                'text-primary-gray': notification.seen,
                'text-secondary-blue/60': !notification.seen
              }"
            />
            <span
              class="ml-sm text-sm font-light"
              :class="{
                'text-primary-gray': notification.seen,
                'text-primary-dark': !notification.seen
              }"
            >
              {{ notification.message }}
            </span>
          </div>
        </div>
      </div>

      <!-- Profile avatar button -->
      <div
        class="avatar relative px-xxs cursor-pointer transition-transform duration-200 hover:scale-110"
        @click.stop="toggleProfileMenu"
      >
        <img src="@/assets/avatar.webp" alt="Avatar" class="w-[38px] h-[38px] rounded-full" />
        <!-- Online status indicator -->
        <div
          class="border-2 border-white absolute bottom-none right-none text-sm w-[16px] h-[16px] font-semibold text-white flex justify-center items-center bg-success-default rounded-full"
        ></div>
      </div>
      <!-- Profile menu -->
      <div
        v-if="isProfileMenuOpen"
        class="absolute top-full right-lg bg-secondary-default rounded-md shadow-lg z-10"
      >
        <div class="flex flex-col">
          <button
            v-for="(item, index) in profileMenuItems"
            :key="index"
            @click="item.action"
            class="flex items-center py-xs px-sm transition-colors duration-200 hover:bg-gray-200"
            :class="{ 'border-b border-gray-200': index === 1 }"
          >
            <component :is="item.icon" class="w-[20px] h-[20px] mr-sm text-primary-gray" />
            <span class="text-sm text-primary-dark">{{ item.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  IconBell,
  IconMessage,
  IconAlertCircle,
  IconPackage,
  IconUserPlus,
  IconDashboard,
  IconSettings,
  IconLogout
} from '@tabler/icons-vue'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Router setup
const route = useRoute()
const router = useRouter()

// State for menu visibility
const isNotificationMenuOpen = ref(false)
const isProfileMenuOpen = ref(false)

// Toggle notification menu
const toggleNotificationMenu = () => {
  isNotificationMenuOpen.value = !isNotificationMenuOpen.value
  isProfileMenuOpen.value = false
}

// Toggle profile menu
const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
  isNotificationMenuOpen.value = false
}

// Close menus when clicking outside
const closeMenus = (event) => {
  if (
    !event.target.closest('.notification') &&
    !event.target.closest('.notification-list') &&
    !event.target.closest('.avatar')
  ) {
    isNotificationMenuOpen.value = false
    isProfileMenuOpen.value = false
  }
}

// Add and remove event listener for closing menus
onMounted(() => {
  document.addEventListener('click', closeMenus)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenus)
})

// Compute page title based on current route
const pageTitle = computed(() => {
  const path = route.path.substring(1)
  if (path === '') return 'Dashboard'
  return path
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

// Mock notifications data
const notifications = ref([
  { icon: IconMessage, message: 'New message from John', seen: false },
  { icon: IconAlertCircle, message: 'Your order has been shipped', seen: false },
  { icon: IconPackage, message: 'New product added to inventory', seen: false },
  { icon: IconUserPlus, message: 'New user registered', seen: false }
])

// Compute unread notifications count
const unreadNotificationsCount = computed(() => {
  return notifications.value.filter((notification) => !notification.seen).length
})

// Mark a notification as seen
const markNotificationAsSeen = (index) => {
  notifications.value[index].seen = true
}

// Mark all notifications as seen
const readAllNotifications = () => {
  notifications.value.forEach((notification) => {
    notification.seen = true
  })
}

// Profile menu items with their respective actions
const profileMenuItems = [
  { label: 'Dashboard', icon: IconDashboard, action: () => router.push('/') },
  { label: 'Settings', icon: IconSettings, action: () => router.push('/settings') },
  { label: 'Logout', icon: IconLogout, action: () => console.log('Logout') }
]
</script>
