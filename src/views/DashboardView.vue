<template>
  <div class="dashboard">
    <!-- Top Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      <!-- Total Sales & Costs Card -->
      <div class="bg-white p-sm rounded-md shadow-sm">
        <h3 class="text-lg font-semibold mb-xs">Total Sales & Costs</h3>
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold">$350K</div>
          <div class="text-success-default">+12%</div>
        </div>
        <p class="text-sm text-gray-500">Last 7 days</p>
      </div>

      <!-- Total Profit Card -->
      <div class="bg-white p-sm rounded-md shadow-sm">
        <h3 class="text-lg font-semibold mb-xs">Total Profit</h3>
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold">50K</div>
          <div class="text-success-default">+5%</div>
        </div>
        <p class="text-sm text-gray-500">Last 7 days</p>
      </div>

      <!-- Country Stats Card -->
      <div class="bg-white p-sm rounded-md shadow-sm col-span-2 lg:col-span-1">
        <h3 class="text-lg font-semibold mb-xs">Country Stats</h3>
        <div class="space-y-sm">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img src="@/assets/logo.svg" alt="US Flag" class="w-[34px] h-[34px] mr-xs" />
              <span>United States</span>
            </div>
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-xs">30k</span>
              <span class="text-success-default text-sm">↑ 25.8%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img src="@/assets/logo.svg" alt="Brazil Flag" class="w-[34px] h-[34px] mr-xs" />
              <span>Brazil</span>
            </div>
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-xs">26k</span>
              <span class="text-red-500 text-sm">↓ 16.2%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img src="@/assets/logo.svg" alt="Australia Flag" class="w-[34px] h-[34px] mr-xs" />
              <span>Australia</span>
            </div>
            <div class="flex items-center">
              <span class="text-lg font-semibold mr-xs">17k</span>
              <span class="text-red-500 text-sm">↓ 11.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Account Information -->
    <div class="bg-white p-sm rounded-md shadow-sm mt-md">
      <h3 class="text-lg font-semibold mb-xs">Account Information</h3>
      <div class="flex items-center space-x-md">
        <img src="@/assets/logo.svg" alt="Profile Picture" class="w-[64px] h-[64px] rounded-full" />
        <div>
          <h4 class="text-xl font-semibold">Robert Fox</h4>
          <p class="text-sm text-gray-500">robert.fox@example.com</p>
        </div>
      </div>
      <div class="mt-sm grid grid-cols-3 gap-sm">
        <div>
          <p class="text-sm text-gray-500">Contact Number</p>
          <p class="font-semibold">(201) 555-0124</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Date of Birth</p>
          <p class="font-semibold">1 Jan 1980</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Member Since</p>
          <p class="font-semibold">3 March 2023</p>
        </div>
      </div>
      <div class="mt-sm grid grid-cols-3 gap-sm">
        <div>
          <p class="text-sm text-gray-500">Total Order</p>
          <p class="font-semibold">150</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Completed</p>
          <p class="font-semibold">140</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Canceled</p>
          <p class="font-semibold">10</p>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white p-sm rounded-md shadow-sm mt-md">
      <h3 class="text-lg font-semibold mb-xs">Recent Orders</h3>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px]">
          <thead>
            <tr class="text-left text-gray-500">
              <th class="py-xs px-xs">ID</th>
              <th class="py-xs px-xs">CUSTOMER</th>
              <th class="py-xs px-xs">DATE</th>
              <th class="py-xs px-xs">TOTAL</th>
              <th class="py-xs px-xs">METHOD</th>
              <th class="py-xs px-xs">STATUS</th>
              <th class="py-xs px-xs">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i" class="border-t border-gray-200">
              <td class="py-xs px-xs">#5089</td>
              <td class="py-xs px-xs">Jensen Wheeler</td>
              <td class="py-xs px-xs">6 April, 2023</td>
              <td class="py-xs px-xs">$2,564</td>
              <td class="py-xs px-xs">CC</td>
              <td class="py-xs px-xs">
                <span class="px-xs py-xxs bg-yellow-100 text-yellow-800 rounded-full text-xs"
                  >Pending</span
                >
              </td>
              <td class="py-xs px-xs">
                <a href="#" class="text-blue-500 hover:underline">View Details</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col sm:flex-row justify-between items-center mt-sm">
        <div class="text-sm text-gray-500 mb-xs sm:mb-0">Showing 1 to 5 of 50 entries</div>
        <div class="flex space-x-xs">
          <button class="px-xs py-xxs border border-gray-300 rounded-md">&lt;</button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md bg-blue-500 text-white">
            1
          </button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md">2</button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md">3</button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md">4</button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md">5</button>
          <button class="px-xs py-xxs border border-gray-300 rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>
