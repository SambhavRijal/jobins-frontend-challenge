<template>
  <div class="mt-md">
    <!-- Table Controls -->
    <div
      class="table-controls animate-fade-in-down flex flex-col gap-sm md:gap-none md:flex-row justify-between text-primary-gray"
    >
      <div class="left flex flex-col sm:flex-row gap-sm w-full md:w-2/3 lg:w-1/3">
        <!-- Status Select -->
        <div class="h-full w-fit bg-white cursor-pointer hover:bg-gray-100 rounded-md px-sm">
          <select
            class="border-none cursor-pointer outline-none bg-transparent h-full py-xs font-medium rounded-md"
            v-model="status"
            @change="handleStatusChange"
          >
            <option value="all" selected disabled class="hidden">Status: All</option>

            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <!-- Search -->
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
      <div class="right cursor-pointer w-fit">
        <!-- Date Range -->
        <div class="h-full bg-white hover:bg-gray-100 rounded-md px-sm">
          <select
            class="border-none cursor-pointer outline-none bg-transparent h-full py-xs font-medium rounded-md"
            v-model="dateRange"
            @change="handleDateRangeChange"
          >
            <option value="all" selected disabled class="hidden">Filter by date range</option>

            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="180d">Last 180 Days</option>
          </select>
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
      @pageChange="handlePageChange"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { IconSearch } from '@tabler/icons-vue'
import DataTable from './DataTable.vue'
import { GetRequest } from '@/plugins/https'
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const tableData = ref([])
const totalPages = ref(0)
const currentPage = ref(1)
const pageLimit = ref(5)
const totalEntries = ref(0)
const dateRange = ref('all')
const searchQuery = ref('')
const status = computed(() => props.status)
const emit = defineEmits(['statusChange'])
const loading = ref(false)

const getTableData = async () => {
  loading.value = true
  const res = await GetRequest(
    `/orders/search?search=${searchQuery.value}&page=${currentPage.value}&limit=${pageLimit.value}&status=${status.value}&dateRange=${dateRange.value}`
  )
  tableData.value = res.data.results
  totalPages.value = res.data.pages
  currentPage.value = res.data.page
  totalEntries.value = res.data.total
  loading.value = false
}

const handleSearch = (searchQuery) => {
  searchQuery.value = searchQuery
}

onMounted(async () => {
  await getTableData()
})

watch([currentPage, pageLimit, searchQuery, status, dateRange], async () => {
  await getTableData()
})

const handleLimitChange = (limit) => {
  pageLimit.value = limit
}

const handlePageChange = (page) => {
  currentPage.value = page
}
const handleStatusChange = (event) => {
  emit('statusChange', event.target.value)
}

const handleDateRangeChange = (dateRange) => {
  dateRange.value = dateRange
}
</script>
