<script setup lang="ts">
const isMenuOpen = ref(false);
const dropdownMenu = useTemplateRef('dropdown-menu');

function toggleDropdown() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeDropdown() {
  if (isMenuOpen.value === true) {
    isMenuOpen.value = false;
  }
}

onClickOutside(dropdownMenu, closeDropdown);

// onMounted(() => {
//   if (import.meta.client) {
//   }
// })

</script>

<template>
  <header class="flex px-16 w-full -mt-20 h-20 justify-center bg-white/10 sticky top-0 z-10">
    <div class="flex w-full max-w-360 justify-between items-center">
      <NuxtLink :to="'/'">
        <img src="/assets/images/logo.png" class="h-20 w-20">
      </NuxtLink>
      <nav>
        <ul class="flex text-xl font-bold">
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/kit-builder'">Kit Builder</NuxtLink>
          </li>
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/climate-personality'">Climate Personality</NuxtLink>
          </li>
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8 cursor-pointer" ref="dropdown-menu">
            <div class="flex items-center" @click="toggleDropdown">
              <div>Learn More</div>
              <span
                class="ms-4 inline-block transition-transform"
                :class="{ 'rotate-180': isMenuOpen }"
              >
                <SvgLoader
                  :icon="'chevron-y'"
                  class="h-6 w-6 !mb-0"
                ></SvgLoader>
              </span>
            </div>
            <div
              class="absolute bg-white -ms-8 mt-2 h-0 overflow-hidden transition-all duration-300"
              :class="{ 'h-40': isMenuOpen }"
            >
              <ul class="p-2">
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/extreme-heat'" @click="closeDropdown">Extreme Heat</NuxtLink>
                </li>
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/rain-and-flooding'" @click="closeDropdown">Rain and Flooding</NuxtLink>
                </li>
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/air-pollution'" @click="closeDropdown">Air Pollution</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/about'">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
</style>