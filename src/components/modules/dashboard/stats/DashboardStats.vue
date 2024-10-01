<template>
  <div class="grid grid-cols-12 gap-sm md:gap-md">
    <div
      class="bg-white py-md px-sm md:px-lg rounded-2xl flex col-span-12 lg:col-span-6 xl:col-span-4"
    >
      <TotalSales />
    </div>

    <div
      class="bg-white py-md px-sm md:px-lg rounded-2xl flex flex-col gap-sm md:gap-lg justify-between col-span-12 lg:col-span-6 xl:col-span-3"
    >
      <TotalProfit />
    </div>

    <div
      class="bg-white py-md px-sm md:px-lg rounded-2xl flex flex-col gap-xs justify-between col-span-12 xl:col-span-5"
    >
      <CountryStats />
    </div>
  </div>
</template>

<script setup lang="ts">
import TotalProfit from './TotalProfit.vue'
import TotalSales from './TotalSales.vue'
import CountryStats from './CountryStats.vue'
</script>
