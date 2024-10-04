<template>
  <div class="flex flex-col-reverse justify-center items-center h-screen">
    <iframe
      class="w-1/2 md:w-1/3 aspect-square"
      src="https://lottie.host/embed/895b6d39-bb32-42e8-b565-91ad57e2472b/KlvFR6zUG7.json"
    ></iframe>
    <div class="text-center text-xl md:text-4xl text-primary-gray font-semibold mr-xs">
      {{
        $route.path
          .substring(1)
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }}
      Page Under Construction
    </div>
  </div>
</template>
