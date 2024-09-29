<template>
  <!-- Top Stats -->
  <div class="flex gap-md">
    <!-- Total Sales & Costs Card -->
    <div class="bg-white py-md px-lg rounded-xl flex w-4/12">
      <div
        class="image w-1/3 border-r border-primary-border pr-sm flex items-center justify-center"
      >
        <img src="@/assets/logo.svg" alt="US Flag" class="mr-xs" />
      </div>
      <div class="stats w-2/3 flex flex-col gap-lg px-lg">
        <div class="stats-title">
          <p class="text-lg font-semibold text-primary-dark uppercase">Total Sales & Costs</p>
          <p class="text-sm text-primary-gray">Last 7 days</p>
        </div>
        <div class="stats-value flex flex-col gap-xs">
          <p class="text-3xl font-bold">$350K</p>
          <p class="text-sm text-primary-gray">
            <span class="text-success-default mr-xs">↑ 8.56K </span> vs last 7 days
          </p>
        </div>
      </div>
    </div>

    <!-- Total Profit Card -->
    <div class="bg-white py-md px-lg rounded-xl w-3/12 flex flex-col gap-lg">
      <div class="heading flex gap-sm items-center">
        <div class="left">
          <img src="@/assets/logo.svg" alt="US Flag" class="mr-xs w-[43px] h-[43px]" />
        </div>
        <div class="right">
          <p class="text-lg font-semibold text-primary-dark uppercase">Total Profit</p>
          <p class="text-sm text-primary-gray">Last 7 days</p>
        </div>
      </div>
      <div class="stats-value flex flex-col gap-xs">
        <p class="text-3xl font-bold">$50K</p>
        <p class="text-sm text-primary-gray">
          <span class="text-success-default mr-xs">↑ 12% </span> vs last 7 days
        </p>
      </div>
    </div>

    <!-- Country Stats Card -->
    <div class="bg-white py-md px-lg rounded-xl grow flex flex-col justify-between">
      <!-- Single Country -->
      <div class="flex items-center gap-sm">
        <!-- Country -->
        <div class="flex items-center gap-xs lg:w-5/12 xl:w-4/12">
          <img src="@/assets/logo.svg" alt="US Flag" class="w-[34px] h-[34px] mr-xs" />
          <div class="flex flex-col grow">
            <span class="font-semibold">30k</span>
            <span class="text-sm text-primary-gray">United States</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="grow bg-secondary-gray rounded-full h-2.5">
          <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '25.8%' }"></div>
        </div>

        <!-- Progress Percentage -->
        <span class="w-fit text-success-default text-sm font-semibold flex justify-end"
          >↑ 25.8%</span
        >
      </div>

      <!-- Single Country -->
      <div class="flex items-center gap-sm">
        <!-- Country -->
        <div class="flex items-center gap-xs lg:w-5/12 xl:w-4/12">
          <img src="@/assets/logo.svg" alt="US Flag" class="w-[34px] h-[34px] mr-xs" />
          <div class="flex flex-col grow">
            <span class="font-semibold">26k</span>
            <span class="text-sm text-primary-gray">Brazil</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="grow bg-secondary-gray rounded-full h-2.5">
          <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '16.2%' }"></div>
        </div>

        <!-- Progress Percentage -->
        <span class="w-fit text-danger-default text-sm font-semibold flex justify-end"
          >↑ 16.2%</span
        >
      </div>

      <!-- Single Country -->
      <div class="flex items-center gap-sm">
        <!-- Country -->
        <div class="flex items-center gap-xs lg:w-5/12 xl:w-4/12">
          <img src="@/assets/logo.svg" alt="US Flag" class="w-[34px] h-[34px] mr-xs" />
          <div class="flex flex-col grow">
            <span class="font-semibold">17k</span>
            <span class="text-sm text-primary-gray">Australia</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="grow bg-secondary-gray rounded-full h-2.5">
          <div class="bg-secondary-blue h-[6px] rounded-full" :style="{ width: '11.9%' }"></div>
        </div>

        <!-- Progress Percentage -->
        <span class="w-fit text-danger-default text-sm font-semibold flex justify-end"
          >↑ 11.9%</span
        >
      </div>
    </div>
  </div>
</template>
