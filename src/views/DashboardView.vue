<template>
  <div class="dashboard">
    <DashboardStats />
    <AccountInformation :status="status" @statusChange="handleStatusChange" />
    <DashboardTable :status="status" @statusChange="handleStatusChange" />
  </div>
</template>

<script setup>
import DashboardStats from '@/components/modules/dashboard/stats/DashboardStats.vue'
import AccountInformation from '@/components/modules/dashboard/account/AccountInformation.vue'
import DashboardTable from '@/components/modules/dashboard/table/DashboardTable.vue'
import { ref } from 'vue'

const status = ref('all')

const handleStatusChange = (newStatus) => {
  status.value = newStatus
}
</script>
