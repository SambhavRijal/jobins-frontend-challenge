<template>
  <div class="image w-1/3 border-r border-primary-border pr-sm flex items-center justify-center">
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
</template>
