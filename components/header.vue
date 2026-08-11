<script setup lang="ts">
const isDropdownMenuOpen = ref(false);
const isDesktopDropdownMenuOpen = ref(false);
const isMenuOpen = ref(false);
const desktopDropdownMenu = useTemplateRef('dropdown-menu');

function closeDesktopDropdown() {
  isDesktopDropdownMenuOpen.value = false;
}

onClickOutside(desktopDropdownMenu, closeDesktopDropdown);
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-10 flex px-16 w-full h-20 justify-center bg-white/10">
    <div class="flex w-full max-w-360 justify-between items-center">
      <NuxtLink :to="'/'" @click="isMenuOpen = false">
        <img src="/assets/images/logos/logo.webp" class="h-20 w-20">
      </NuxtLink>
      <nav>
        <ul class="hidden lg:flex text-xl font-bold">
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/kit-builder'">Kit Builder</NuxtLink>
          </li>
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/climate-personality'">Climate Personality</NuxtLink>
          </li>
          <li class="p-2 mr-4 cursor-pointer relative group" ref="dropdown-menu">
            <div class="flex items-center" @click="isDesktopDropdownMenuOpen = !isDesktopDropdownMenuOpen">
              <div class="group-hover:underline group-hover:underline-offset-8 ">Learn More</div>
              <i class="fa-solid fa-chevron-down ms-4 transition-all duration-500" :class="{'rotate-180': isDesktopDropdownMenuOpen}"></i>
            </div>
            <div class="absolute bg-white -ms-8 mt-3 max-h-0 w-55 overflow-hidden transition-all duration-750"
              :class="{ 'max-h-50': isDesktopDropdownMenuOpen }">
              <ul class="p-2">
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/extreme-heat'" @click="closeDesktopDropdown">Extreme Heat</NuxtLink>
                </li>
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/rain-and-flooding'" @click="closeDesktopDropdown">Rain and Flooding
                  </NuxtLink>
                </li>
                <li class="p-2 mb-2 hover:underline hover:underline-offset-8">
                  <NuxtLink :to="'/learn-more/air-pollution'" @click="closeDesktopDropdown">Air Pollution</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="p-2 mr-4 hover:underline hover:underline-offset-8">
            <NuxtLink :to="'/about'">About</NuxtLink>
          </li>
        </ul>
        <button class="button button-circle h-15 w-15 bg-transparent lg:hidden" @click="isMenuOpen = !isMenuOpen">
          <i class="fa-solid fa-bars text-3xl" v-if="!isMenuOpen"></i>
          <i class="fa-solid fa-xmark text-3xl" v-if="isMenuOpen"></i>
        </button>
      </nav>
    </div>
  </header>
  <div class="fixed w-full bg-white z-1 h-0 overflow-hidden transition-all duration-500"
    :class="{ 'h-[100vh]': isMenuOpen }">
    <ul class="h-full flex flex-col items-center text-4xl font-bold">
      <li class="p-5 mt-45 active:underline active:underline-offset-6">
        <NuxtLink :to="'/kit-builder'" @click="isMenuOpen = false">Kit Builder</NuxtLink>
      </li>
      <li class="p-5 active:underline active:underline-offset-6">
        <NuxtLink :to="'/climate-personality'" @click="isMenuOpen = false">Climate Personality</NuxtLink>
      </li>
      <li class="p-5">
        <div class="flex items-center justify-center" @click="isDropdownMenuOpen = !isDropdownMenuOpen">
          <div class="active:underline active:underline-offset-6">Learn More</div>
          <i class="fa-solid fa-chevron-down ms-4 text-3xl transition-all duration-500" :class="{'rotate-180': isDropdownMenuOpen}"></i>
        </div>
      </li>
      <div class="w-full max-h-0 overflow-hidden transition-all duration-750"
        :class="{ 'max-h-60': isDropdownMenuOpen }">
        <ul class="flex flex-col items-center">
          <li class="p-5 active:underline active:underline-offset-6">
            <NuxtLink :to="'/learn-more/extreme-heat'" @click="isMenuOpen = false">Extreme Heat</NuxtLink>
          </li>
          <li class="p-5 active:underline active:underline-offset-6">
            <NuxtLink :to="'/learn-more/rain-and-flooding'" @click="isMenuOpen = false">Rain and Flooding</NuxtLink>
          </li>
          <li class="p-5 active:underline active:underline-offset-6">
            <NuxtLink :to="'/learn-more/air-pollution'" @click="isMenuOpen = false">Air Pollution</NuxtLink>
          </li>
        </ul>
      </div>
      <li class="p-5 active:underline active:underline-offset-6">
        <NuxtLink :to="'/about'" @click="isMenuOpen = false">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>