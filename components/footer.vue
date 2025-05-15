<script setup lang="ts">
</script>

<template>
  <footer class="flex flex-col bg-primary w-full py-16 px-36">
    <div class="flex w-full justify-between">
      <div class="text-white w-xl font-medium">
        <div class="text-[54px] leading-[73px] mb-8">Preparedness starts with you</div>
        <ul class="grid grid-cols-2">
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
        <img class="h-[162px]" src="/assets/images/logos/logo-white.png">      
    </div>
    <div class="ms-auto mt-4 font-medium text-white">Copyright © 2024 Climate Care Kit. Climate Care Kit does not provide professional medical advice.</div>
  </footer>
</template>

<style lang="scss">
</style>