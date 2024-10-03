<template>
  <div class="mt-md">
    <div
      class="table-controls flex flex-col gap-sm md:gap-none md:flex-row justify-between text-primary-gray"
    >
      <div class="left flex gap-sm w-full md:w-2/3 lg:w-1/3">
        <div class="stats bg-white font-medium px-xs rounded-md flex items-center gap-xs">
          <button class="flex gap-xxs items-center py-xs mx-xs text-primary-gray font-medium">
            Status:
            <div class="flex items-center gap-xxs">
              <select
                class="border-none outline-none bg-transparent"
                v-model="status"
                @change="handleStatusChange"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </button>
        </div>
        <div
          class="search bg-white px-sm py-xs rounded-md grow md:w-1/4 flex items-center justify-between"
        >
          <input
            type="text"
            placeholder="Search..."
            class="w-full bg-transparent outline-none"
            v-model="searchQuery"
            @input="handleSearch"
          />
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
const status = ref('all')
const searchQuery = ref('')

const getTableData = async () => {
  const res = await GetRequest(
    `/orders/search?search=${searchQuery.value}&page=${currentPage.value}&limit=${pageLimit.value}&status=${status.value}`
  )
  tableData.value = res.data.results
  totalPages.value = res.data.pages
  currentPage.value = res.data.page
  totalEntries.value = res.data.total
}

const handleSearch = (searchQuery) => {
  searchQuery.value = searchQuery
}

onMounted(async () => {
  await getTableData()
})

watch([currentPage, pageLimit, searchQuery, status], async () => {
  console.log('Current page or page limit changed', currentPage.value, pageLimit.value)
  await getTableData()
})

const handleLimitChange = (limit) => {
  pageLimit.value = limit
}

const handleStatusChange = (status) => {
  status.value = status
  getTableDataByStatus()
}
</script>
