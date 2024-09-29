<template>
  <div class="mt-md">
    <div class="table-controls flex justify-between text-primary-gray">
      <div class="left flex gap-sm w-1/2">
        <div class="stats bg-white px-sm py-xs rounded-md">Status : All</div>
        <div class="search bg-white px-sm py-xs rounded-md w-1/3 flex justify-between">
          <div>Search...</div>
          <div class="icon">S</div>
        </div>
      </div>
      <div class="right">
        <div class="filter bg-white px-sm py-xs rounded-md">Filter by date range</div>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white px-lg py-xs rounded-lg my-md text-primary-dark">
      <div class="table w-full">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[640px]">
            <thead>
              <tr class="text-left text-sm text-primary-gray font-medium border-b border-gray-200">
                <th class="py-sm px-xs">ID</th>
                <th class="py-sm px-xs">CUSTOMER</th>
                <th class="py-sm px-xs">DATE</th>
                <th class="py-sm px-xs">TOTAL</th>
                <th class="py-sm px-xs">METHOD</th>
                <th class="py-sm px-xs">STATUS</th>
                <th class="py-sm px-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i" class="border-b border-gray-200">
                <td class="py-sm px-xs">#5089</td>
                <td class="py-sm px-xs">Jensen Wheeler</td>
                <td class="py-sm px-xs">6 April, 2023</td>
                <td class="py-sm px-xs">$2,564</td>
                <td class="py-sm px-xs">CC</td>
                <td class="py-sm px-xs text-secondary-orange font-semibold">Pending</td>
                <td class="py-xs px-xs">
                  <a href="#" class="text-secondary-blue hover:underline">View Details</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center mt-sm">
          <div class="text-sm text-gray-500 mb-xs sm:mb-0">
            Showing
            <button
              class="px-sm py-xxs mx-xs rounded-md border border-secondary-gray text-primary-dark font-medium"
            >
              10
            </button>
            of 50 entries
          </div>
          <div class="flex gap-xxs">
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">&lt;</button>
            <button class="px-sm py-xxs rounded-md bg-secondary-blue text-white">1</button>
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">2</button>
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">3</button>
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">4</button>
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">5</button>
            <button class="px-sm py-xxs rounded-md bg-primary-light text-primary-dark">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
