<template>
  <div class="bg-white px-sm md:px-lg rounded-2xl mt-md text-primary-dark animate-fade-in-down">
    <div
      v-if="userInfo && Object.keys(userInfo).length > 0"
      class="data grid grid-cols-6 gap-md pt-md"
    >
      <div
        class="flex items-center space-x-md col-span-full xl:col-span-2 xl:border-r border-primary-border"
      >
        <UserInfo :userInfo="userInfo" />
      </div>

      <div
        class="col-span-full md:col-span-6 xl:col-span-2 xl:border-r border-primary-border md:pb-lg flex flex-col gap-sm text-sm"
      >
        <PersonalInfo :userInfo="userInfo" />
      </div>

      <div
        class="col-span-full md:col-span-6 xl:col-span-2 pb-lg flex flex-col gap-sm text-sm md:pr-md"
      >
        <AddressInfo :userInfo="userInfo" />
      </div>
    </div>
    <div v-else class="flex justify-center items-center h-[20vh] bg-white rounded-2xl">
      <div class="loader"></div>
    </div>
    <div class="tab-controls flex gap-sm w-full text-sm md:text-base overflow-x-auto">
      <div
        class="tab px-sm py-xs cursor-pointer transition-colors duration-500 hover:text-secondary-blue hover:border-b-2 hover:border-secondary-blue hover:border-opacity-50 whitespace-nowrap"
        :class="{
          'text-secondary-blue border-b-2 border-secondary-blue ': status === 'all'
        }"
        @click="handleStatusChange('all')"
      >
        All Orders
      </div>
      <div
        class="tab px-sm py-xs cursor-pointer transition-colors duration-500 hover:text-secondary-blue hover:border-b-2 hover:border-secondary-blue hover:border-opacity-50 whitespace-nowrap"
        :class="{
          'text-secondary-blue border-b-2 border-secondary-blue ': status === 'completed'
        }"
        @click="handleStatusChange('completed')"
      >
        Completed
      </div>
      <div
        class="tab px-sm py-xs cursor-pointer transition-colors duration-500 hover:text-secondary-blue hover:border-b-2 hover:border-secondary-blue hover:border-opacity-50 whitespace-nowrap"
        :class="{
          'text-secondary-blue border-b-2 border-secondary-blue ': status === 'canceled'
        }"
        @click="handleStatusChange('canceled')"
      >
        Canceled
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './UserInfo.vue'
import PersonalInfo from './PersonalInfo.vue'
import AddressInfo from './AddressInfo.vue'

import { GetRequest } from '@/plugins/https'
import { onMounted, ref, computed } from 'vue'

const userInfo = ref<any>({})

const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['statusChange'])

const status = computed(() => props.status)

const handleStatusChange = (newStatus: string) => {
  emit('statusChange', newStatus)
}

onMounted(async () => {
  const response = await GetRequest('/users')
  userInfo.value = response.data[0]
})
</script>
