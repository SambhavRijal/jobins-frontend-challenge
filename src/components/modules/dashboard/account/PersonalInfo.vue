<template>
  <div class="text-sm uppercase text-primary-gray">Personal Information</div>
  <div class="contact-info flex flex-col gap-sm">
    <div class="row flex gap-sm">
      <div class="label w-1/3">Contact Number</div>
      <div class="value grow font-semibold">{{ userInfo.contactNumber }}</div>
    </div>
    <div class="row flex gap-sm">
      <div class="label w-1/3">Date of Birth</div>
      <div class="value grow font-semibold">{{ userInfo.dob }}</div>
    </div>
    <div class="row flex gap-sm">
      <div class="label w-1/3">Member Since</div>
      <div class="value grow font-semibold">{{ userInfo.joined }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  userInfo: any
}>()
</script>
