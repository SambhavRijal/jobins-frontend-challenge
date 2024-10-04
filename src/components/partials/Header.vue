<template>
  <header class="h-[70px] flex items-center justify-between px-md pr-lg">
    <div class="title text-2xl font-bold">Dashboard</div>
    <div class="actions flex gap-md">
      <div
        class="notification relative px-xxs flex items-center cursor-pointer transition-transform duration-200 hover:scale-110"
      >
        <IconBell class="w-[26px] h-[36px] text-primary-gray" />
        <div
          class="absolute top-none right-none text-xs w-[18px] h-[18px] font-semibold text-white flex justify-center items-center bg-danger-default rounded-full"
        >
          4
        </div>
      </div>

      <div
        class="avatar relative px-xxs cursor-pointer transition-transform duration-200 hover:scale-110"
      >
        <img src="@/assets/avatar.webp" alt="Avatar" class="w-[38px] h-[38px] rounded-full" />
        <div
          class="border-2 border-white absolute bottom-none right-none text-sm w-[16px] h-[16px] font-semibold text-white flex justify-center items-center bg-success-default rounded-full"
        ></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconBell } from '@tabler/icons-vue'
</script>
