<template>
  <div class="mt-md">
    <div
      class="table-controls flex flex-col gap-sm md:gap-none md:flex-row justify-between text-primary-gray"
    >
      <div class="left flex gap-sm w-full md:w-2/3 lg:w-1/3">
        <div class="stats bg-white font-medium px-sm py-xs rounded-md flex items-center gap-xs">
          Status : All <IconChevronDown size="16" />
        </div>
        <div
          class="search bg-white px-sm py-xs rounded-md grow md:w-1/4 flex items-center justify-between"
        >
          <div>Search...</div>
          <IconSearch size="18" />
        </div>
      </div>
      <div class="right">
        <div class="filter bg-white px-sm py-xs font-medium rounded-md flex items-center gap-xs">
          Filter by date range
          <IconChevronDown size="16" />
        </div>
      </div>
    </div>

    <div class="">
      <div class="bg-white px-lg py-xs rounded-2xl my-md text-primary-dark">
        <div class="search-table-outter overflow-x-auto wrapper">
          <table class="search-table inner w-full">
            <thead>
              <tr class="text-left text-sm text-primary-gray font-medium border-b border-gray-200">
                <th class="py-sm px-xs whitespace-nowrap">ID</th>
                <th class="py-sm px-xs whitespace-nowrap">CUSTOMER</th>
                <th class="py-sm px-xs whitespace-nowrap">DATE</th>
                <th class="py-sm px-xs whitespace-nowrap">TOTAL</th>
                <th class="py-sm px-xs whitespace-nowrap">METHOD</th>
                <th class="py-sm px-xs whitespace-nowrap">STATUS</th>
                <th class="py-sm px-xs whitespace-nowrap">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i" class="border-b border-gray-200">
                <td class="py-sm px-xs whitespace-nowrap">#5089</td>
                <td class="py-sm px-xs whitespace-nowrap">Jensen Wheeler</td>
                <td class="py-sm px-xs whitespace-nowrap">6 April, 2023</td>
                <td class="py-sm px-xs whitespace-nowrap">$2,564</td>
                <td class="py-sm px-xs whitespace-nowrap">CC</td>
                <td class="py-sm px-xs text-secondary-orange font-semibold whitespace-nowrap">
                  Pending
                </td>
                <td class="py-xs px-xs whitespace-nowrap">
                  <a href="#" class="text-secondary-blue hover:underline">View Details</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="flex flex-col gap-xs md:gap-none sm:flex-row justify-between md:items-center mt-sm"
        >
          <div class="text-sm text-gray-500 mb-xs sm:mb-none">
            Showing
            <button
              class="px-sm py-xxs mx-xs rounded-md border border-secondary-gray text-primary-dark font-medium"
            >
              <div class="flex items-center gap-xxs">10 <IconChevronDown size="16" /></div>
            </button>
            of 50 entries
          </div>
          <div class="flex justify-between gap-xxs">
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              &lt;
            </button>
            <button class="px-sm h-fit py-xxs rounded-md bg-secondary-blue text-white">1</button>
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              2
            </button>
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              3
            </button>
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              4
            </button>
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              5
            </button>
            <button class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Table -->
  </div>
</template>

<style>
th,
td {
  min-width: 200px;
}
</style>

<script setup>
import { IconChevronDown, IconSearch } from '@tabler/icons-vue'
</script>
