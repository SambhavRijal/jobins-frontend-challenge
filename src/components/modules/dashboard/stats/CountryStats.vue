<template>
  <!-- Single Country -->
  <div class="flex items-center gap-sm">
    <!-- Country -->
    <div class="flex items-center gap-xs grow md:grow-0 md:w-4/12 lg:w-3/12 xl:w-4/12">
      <img src="@/assets/us.png" alt="US Flag" class="w-[34px] h-[34px] mr-xs rounded-full" />
      <div class="flex flex-col grow">
        <span class="font-semibold">30k</span>
        <span class="text-xs md:text-sm text-primary-gray">United States</span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="hidden md:block grow bg-secondary-gray rounded-full h-2.5">
      <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '25.8%' }"></div>
    </div>

    <!-- Progress Percentage -->
    <span class="w-fit text-success-default text-sm font-semibold flex gap-xs justify-end"
      ><IconChevronUp size="20" /> 25.8%</span
    >
  </div>

  <!-- Single Country -->
  <div class="flex items-center gap-sm">
    <!-- Country -->
    <div class="flex items-center gap-xs grow md:grow-0 md:w-4/12 lg:w-3/12 xl:w-4/12">
      <img src="@/assets/br.png" alt="US Flag" class="w-[34px] h-[34px] mr-xs rounded-full" />
      <div class="flex flex-col grow">
        <span class="font-semibold">26k</span>
        <span class="text-xs md:text-sm text-primary-gray">Brazil</span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="hidden md:block grow bg-secondary-gray rounded-full h-2.5">
      <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '16.2%' }"></div>
    </div>

    <!-- Progress Percentage -->
    <span class="w-fit text-danger-default text-sm font-semibold flex gap-xs justify-end"
      ><IconChevronDown size="20" /> 16.2%</span
    >
  </div>

  <!-- Single Country -->
  <div class="flex items-center gap-sm">
    <!-- Country -->
    <div class="flex items-center gap-xs grow md:grow-0 md:w-4/12 lg:w-3/12 xl:w-4/12">
      <img src="@/assets/au.png" alt="US Flag" class="w-[34px] h-[34px] mr-xs rounded-full" />
      <div class="flex flex-col grow">
        <span class="font-semibold">17k</span>
        <span class="text-xs md:text-sm text-primary-gray">Australia</span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="hidden md:block grow bg-secondary-gray rounded-full h-2.5">
      <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '11.9%' }"></div>
    </div>

    <!-- Progress Percentage -->
    <span class="w-fit text-danger-default text-sm font-semibold flex gap-xs justify-end"
      ><IconChevronDown size="20" /> 11.9%</span
    >
  </div>
</template>

<script setup lang="ts">
import { IconChevronUp, IconChevronDown } from '@tabler/icons-vue'
</script>
