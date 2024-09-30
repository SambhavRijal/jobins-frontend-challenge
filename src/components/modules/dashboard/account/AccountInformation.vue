<template>
  <div class="bg-white px-lg rounded-xl mt-md text-primary-dark">
    <div class="data grid grid-cols-6 gap-md py-md">
      <!-- User Info -->
      <div
        class="flex items-center space-x-md col-span-12 xl:col-span-2 xl:border-r border-primary-border"
      >
        <UserInfo />
      </div>

      <!-- Personal Info -->
      <div
        class="col-span-12 md:col-span-6 xl:col-span-2 md:border-r border-primary-border pb-lg flex flex-col gap-sm text-sm"
      >
        <PersonalInfo />
      </div>

      <!-- Address Info -->
      <div class="col-span-12 md:col-span-6 xl:col-span-2 pb-lg flex flex-col gap-sm text-sm pr-md">
        <AddressInfo />
      </div>
    </div>
    <div class="tab-controls flex gap-sm">
      <div class="tab px-sm py-xs text-secondary-blue border-b-2 border-secondary-blue">
        All Orders
      </div>
      <div class="tab px-sm py-xs">Completed</div>
      <div class="tab px-sm py-xs">Canceled</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import PersonalInfo from './PersonalInfo.vue'
import AddressInfo from './AddressInfo.vue'
</script>
