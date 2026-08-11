<script setup lang="ts">
</script>

<template>
  <footer class="flex flex-col bg-primary w-full py-14 px-9 lg:py-16 lg:px-36">
    <div class="flex flex-col w-full justify-between lg:flex-row">
      <div class="order-2 text-white font-medium lg:order-1 lg:w-xl">
        <div class="hidden text-[54px] leading-[73px] mb-8 lg:block">Preparedness starts with you</div>
        <div class="block text-5xl leading-14 mb-4 lg:hidden">Your health and the world</div>
        <ul class="grid grid-cols-1 lg:grid-cols-2">
          <li class="col-span-1 mb-2">
            <NuxtLink :to="'/kit-builder'">Kit Builder</NuxtLink>
          </li>
          <li class="col-span-1 mb-2">
            <NuxtLink :to="'/about'">About</NuxtLink>
          </li>
          <li class="col-span-1 mb-2">
            <NuxtLink :to="'/climate-personality'">Climate Personality</NuxtLink>
          </li>
          <li class="col-span-1 mb-2">
            <NuxtLink :to="'/'">Email Us</NuxtLink>
          </li>
        </ul>
      </div>
      <img class="order-1 w-50 mb-4 lg:order-2 lg:h-40 lg:w-auto" src="/assets/images/logos/logo-white.webp">
    </div>
    <div class="ms-auto mt-4 font-medium text-white">Copyright © 2024 Climate Care Kit. Climate Care Kit does not provide professional medical advice.</div>
  </footer>
</template>

<style lang="scss">
</style>