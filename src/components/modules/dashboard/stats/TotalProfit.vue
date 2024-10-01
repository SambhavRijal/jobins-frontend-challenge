<template>
  <div class="heading flex gap-sm items-center">
    <div class="left">
      <img src="@/assets/yen.png" alt="US Flag" class="mr-xs w-[43px] h-[43px]" />
    </div>
    <div class="right">
      <p class="text-sm md:text-lg font-semibold text-primary-dark uppercase">Total Profit</p>
      <p class="text-xs md:text-sm text-primary-gray">Last 7 days</p>
    </div>
  </div>
  <div class="stats-value flex flex-col gap-xs">
    <p class="text-xl md:text-3xl font-bold">$50K</p>
    <p class="text-xs md:text-sm text-primary-gray flex">
      <span class="text-success-default mr-xs items-center flex gap-xxs w-fit"
        ><IconArrowUp size="16" /><span class="pt-xxs">12%</span>
      </span>
      <span class="pt-xxs"> vs last 7 days </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUp } from '@tabler/icons-vue'
</script>
