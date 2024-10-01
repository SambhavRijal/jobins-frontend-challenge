<template>
  <div class="bg-white px-sm md:px-lg rounded-2xl mt-md text-primary-dark">
    <div class="data grid grid-cols-6 gap-md pt-md">
      <div
        class="flex items-center space-x-md col-span-full xl:col-span-2 xl:border-r border-primary-border"
      >
        <UserInfo />
      </div>

      <div
        class="col-span-full md:col-span-6 xl:col-span-2 xl:border-r border-primary-border md:pb-lg flex flex-col gap-sm text-sm"
      >
        <PersonalInfo />
      </div>

      <div
        class="col-span-full md:col-span-6 xl:col-span-2 pb-lg flex flex-col gap-sm text-sm md:pr-md"
      >
        <AddressInfo />
      </div>
    </div>
    <div class="tab-controls flex gap-sm w-full text-sm md:text-base">
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
