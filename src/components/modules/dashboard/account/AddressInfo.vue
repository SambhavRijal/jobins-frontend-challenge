<template>
  <div class="mt-xxs md:mt-none text-sm uppercase text-primary-gray">Shipping Address</div>
  <p class="text-sm">{{ userInfo.address }}</p>
  <div class="contact-info flex justify-between mt-xs">
    <div class="row flex flex-col">
      <div class="text-xl md:text-2xl font-bold">{{ orderSummary.total }}</div>
      <div class="value grow text-primary-gray">Total Order</div>
    </div>
    <div class="row flex flex-col">
      <div class="text-xl md:text-2xl font-bold">{{ orderSummary.completed }}</div>
      <div class="value grow text-primary-gray">Completed</div>
    </div>
    <div class="row flex flex-col">
      <div class="text-xl md:text-2xl font-bold">{{ orderSummary.canceled }}</div>
      <div class="value grow text-primary-gray">Canceled</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GetRequest } from '@/plugins/https'
import { onMounted, ref, defineProps } from 'vue'

defineProps({
  userInfo: {
    type: Object,
    required: true
  }
})

const orderSummary = ref<any>({})

onMounted(async () => {
  try {
    const response = await GetRequest('/orders/summary')
    orderSummary.value = response.data
  } catch (error) {
    console.error('Failed to fetch order summary:', error)
  }
})
</script>
