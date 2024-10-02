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

    <!-- Table -->
    <DataTable
      :tableData="tableData"
      :totalPages="totalPages"
      :currentPage="currentPage"
      :pageLimit="pageLimit"
      :totalEntries="totalEntries"
      @limitChange="handleLimitChange"
    />
  </div>
</template>

<script setup>
import { IconChevronDown, IconSearch } from '@tabler/icons-vue'
import DataTable from './DataTable.vue'
import { GetRequest } from '@/plugins/https'
import { ref, onMounted, watch } from 'vue'

const tableData = ref([])
const totalPages = ref(0)
const currentPage = ref(1)
const pageLimit = ref(5)
const totalEntries = ref(0)

const getTableData = async () => {
  const res = await GetRequest(`/orders?page=${currentPage.value}&limit=${pageLimit.value}`)
  tableData.value = res.data.results
  totalPages.value = res.data.pages
  currentPage.value = res.data.page
  totalEntries.value = res.data.total
}

onMounted(async () => {
  await getTableData()
})

watch([currentPage, pageLimit], async () => {
  console.log('Current page or page limit changed', currentPage.value, pageLimit.value)
  await getTableData()
})

const handleLimitChange = (limit) => {
  pageLimit.value = limit
}
</script>
