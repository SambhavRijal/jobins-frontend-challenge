<template>
  <img src="@/assets/avatar.webp" alt="Profile Picture" class="w-[73px] h-[73px] rounded-full" />
  <div>
    <h4 class="text-lg font-semibold">{{ userInfo.fullName }}</h4>
    <p class="text-base text-primary-gray">{{ userInfo.email }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  userInfo: any
}>()
</script>
