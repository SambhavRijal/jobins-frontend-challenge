<template>
  <div
    class="image w-fit sm:w-1/4 md:w-1/3 border-r border-primary-border pr-xs md:pr-sm flex items-center justify-center"
  >
    <img src="@/assets/business-and-finance.png" alt="US Flag" class="mr-xs" />
  </div>
  <div class="stats w-2/3 flex flex-col gap-sm md:gap-lg xl:justify-between px-sm md:px-lg">
    <div class="stats-title">
      <p class="text-sm md:text-lg font-semibold text-primary-dark uppercase">
        Total Sales & Costs
      </p>
      <p class="text-xs md:text-sm text-primary-gray">Last 7 days</p>
    </div>
    <div class="stats-value flex flex-col gap-xs">
      <p class="text-xl md:text-3xl font-bold">$350K</p>
      <p class="text-xs md:text-sm text-primary-gray flex items-center">
        <span class="text-success-default mr-xs flex items-center gap-xxs w-fit"
          ><IconArrowUp size="16" />
          <span class="pt-xxs">8.56K</span>
        </span>
        <span class="pt-xxs"> vs last 7 days </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUp } from '@tabler/icons-vue'
</script>
