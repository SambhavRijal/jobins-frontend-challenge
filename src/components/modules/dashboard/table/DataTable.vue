<template>
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
            <tr v-for="item in tableData" :key="item.id" class="border-b border-gray-200">
              <td class="py-sm px-xs whitespace-nowrap">#{{ item.oid }}</td>
              <td class="py-sm px-xs whitespace-nowrap">{{ item.customer }}</td>
              <td class="py-sm px-xs whitespace-nowrap">{{ item.date }}</td>
              <td class="py-sm px-xs whitespace-nowrap">${{ item.total }}</td>
              <td class="py-sm px-xs whitespace-nowrap">{{ item.method }}</td>
              <td class="py-sm px-xs text-secondary-orange font-semibold whitespace-nowrap">
                {{ item.status }}
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
            class="px-xs py-xxs mx-xs rounded-md border border-secondary-gray text-primary-dark font-medium"
          >
            <div class="flex items-center gap-xxs">
              <select
                class="border-none outline-none bg-transparent"
                v-model="limit"
                @change="handleLimitChange"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              <IconChevronDown size="16" />
            </div>
          </button>

          of {{ totalEntries }} entries
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
</template>

<style>
th,
td {
  min-width: 200px;
}
</style>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
const props = defineProps<{
  tableData: any
  totalPages: number
  currentPage: number
  pageLimit: number
  totalEntries: number
}>()

const emit = defineEmits(['limitChange'])

const limit = computed(() => props.pageLimit)

watch(limit, (newVal, oldVal) => {
  console.log('Limit changed', newVal, oldVal)
})

const handleLimitChange = (event: any) => {
  console.log('Limit changed', event.target.value)
  emit('limitChange', event.target.value)
}
</script>
