<template>
  <div class="bg-white px-lg rounded-xl mt-md text-primary-dark">
    <div class="data flex gap-md py-md">
      <!-- User Info -->
      <div class="flex items-center space-x-md w-1/3 border-r border-primary-border">
        <img src="@/assets/logo.svg" alt="Profile Picture" class="w-[73px] h-[73px] rounded-full" />
        <div>
          <h4 class="text-lg font-semibold">Robert Fox</h4>
          <p class="text-base text-primary-gray">robert.fox@example.com</p>
        </div>
      </div>

      <!-- Personal Info -->
      <div class="w-1/3 border-r border-primary-border pb-lg flex flex-col gap-sm text-sm">
        <div class="text-sm uppercase text-primary-gray">Personal Information</div>
        <div class="contact-info flex flex-col gap-sm">
          <div class="row flex gap-sm">
            <div class="label w-1/3">Contact Number</div>
            <div class="value grow font-semibold">(201) 555-0124</div>
          </div>
          <div class="row flex gap-sm">
            <div class="label w-1/3">Date of Birth</div>
            <div class="value grow font-semibold">1 Jan, 1985</div>
          </div>
          <div class="row flex gap-sm">
            <div class="label w-1/3">Member Since</div>
            <div class="value grow font-semibold">3 March, 2023</div>
          </div>
        </div>
      </div>

      <!-- Address Info -->
      <div class="w-1/3 pb-lg flex flex-col gap-sm text-sm pr-md">
        <div class="text-sm uppercase text-primary-gray">Shipping Address</div>
        <p class="">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        <div class="contact-info flex justify-between mt-xs">
          <div class="row flex flex-col">
            <div class="text-2xl font-bold">150</div>
            <div class="value grow text-primary-gray">Total Order</div>
          </div>
          <div class="row flex flex-col">
            <div class="text-2xl font-bold">140</div>
            <div class="value grow text-primary-gray">Completed</div>
          </div>
          <div class="row flex flex-col">
            <div class="text-2xl font-bold">10</div>
            <div class="value grow text-primary-gray">Canceled</div>
          </div>
        </div>
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
