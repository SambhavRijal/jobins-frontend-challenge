<template>
  <div class="dashboard">
    <DashboardStats />
    <AccountInformation />
    <DashboardTable />
  </div>
</template>

<script setup lang="ts">
import DashboardStats from '@/components/modules/dashboard/stats/DashboardStats.vue'
import AccountInformation from '@/components/modules/dashboard/account/AccountInformation.vue'
import DashboardTable from '@/components/modules/dashboard/table/DashboardTable.vue'
</script>
