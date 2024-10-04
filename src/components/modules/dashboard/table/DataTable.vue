<template>
  <div class="bg-white md:px-lg py-xs rounded-2xl my-md text-primary-dark animate-fade-in-down">
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
        <tbody v-if="loading">
          <tr>
            <td colspan="7" class="">
              <div class="loader mx-auto my-md mt-lg"></div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="item in tableData" :key="item.id" class="border-b border-gray-200">
            <td class="py-sm px-xs whitespace-nowrap">#{{ item.oid }}</td>
            <td class="py-sm px-xs whitespace-nowrap">{{ item.customer }}</td>
            <td class="py-sm px-xs whitespace-nowrap">{{ formatDate(item?.createdAt) }}</td>
            <td class="py-sm px-xs whitespace-nowrap">${{ item.total }}</td>
            <td class="py-sm px-xs whitespace-nowrap">{{ item.method }}</td>
            <td
              class="py-sm px-xs font-semibold whitespace-nowrap"
              :class="{
                'text-secondary-orange': item.status === 'pending',
                'text-success-default': item.status === 'completed',
                'text-danger-default': item.status === 'canceled'
              }"
            >
              {{ item.status.charAt(0).toUpperCase() + item.status.slice(1) }}
            </td>
            <td class="py-xs px-xs whitespace-nowrap">
              <a href="#" class="text-secondary-blue hover:underline">View Details</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex flex-col gap-xs md:gap-none sm:flex-row justify-between md:items-center mt-sm">
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
      <div class="flex gap-xxs">
        <button
          class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray hover:bg-secondary-blue/50 hover:text-white transition-colors duration-200"
          @click="handlePageChange(currentPage - 1)"
          :disabled="currentPage === 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        >
          &lt;
        </button>
        <button
          v-for="page in pages"
          :key="page"
          @click="handlePageChange(page)"
          class="text-xs md:text-base px-sm h-fit py-xxs rounded-md transition-colors duration-200"
          :class="
            page === currentPage
              ? 'bg-secondary-blue text-white'
              : 'bg-primary-light text-primary-gray hover:bg-secondary-blue/50 hover:text-white'
          "
        >
          {{ page }}
        </button>
        <button
          class="px-sm h-fit py-xxs rounded-md bg-primary-light text-primary-gray hover:bg-secondary-blue/50 hover:text-white transition-colors duration-200"
          @click="handlePageChange(currentPage + 1)"
          :disabled="currentPage === totalPages"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        >
          &gt;
        </button>
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
import { formatDate } from '@/utils/helpers/formatDate'
import { computed, ref, watch } from 'vue'
const props = defineProps<{
  tableData: any
  totalPages: number
  currentPage: number
  pageLimit: number
  totalEntries: number
  loading: boolean
}>()

const emit = defineEmits(['limitChange', 'pageChange'])

const limit = computed(() => props.pageLimit)

const pages = computed(() => {
  console.log('props.totalPages', props.totalPages)
  if (props.totalPages <= 5) {
    const newPages = Array.from({ length: props.totalPages }, (_, i) => i + 1)
    console.log('newPages', newPages)
    return newPages
  } else {
    console.log('greater than 5')
    let start = Math.max(1, props.currentPage - 2)
    let end = Math.min(props.totalPages, start + 4)

    // Adjust start if we're near the end
    if (end === props.totalPages) {
      start = Math.max(1, end - 4)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }
})

const handlePageChange = (page: number) => {
  emit('pageChange', page)
}

const handleLimitChange = (event: any) => {
  emit('limitChange', event.target.value)
}
</script>
