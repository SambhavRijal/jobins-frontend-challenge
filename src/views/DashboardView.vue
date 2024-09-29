<template>
  <div class="dashboard">
    <DashboardStats />
    <!-- Account Information -->
    <AccountInformation />

    <!-- Table -->
    <DashboardTable />
  </div>
</template>

<script setup lang="ts">
import DashboardStats from '@/components/modules/dashboard/DashboardStats.vue'
import AccountInformation from '@/components/modules/dashboard/AccountInformation.vue'
import DashboardTable from '@/components/modules/dashboard/DashboardTable.vue'
</script>
