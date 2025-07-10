<script setup lang="ts">
  import type {
    Icon,
    Size
  } from '~/types';

  const route = useRoute();
  const size: Size = route.query['size'] as Size;
  const extremeHeat = route.query['extreme-heat'] === 'true';
  const rainAndFlooding = route.query['rain-and-flooding'] === 'true';
  const airPollution = route.query['air-pollution'] === 'true';
  const hygiene = route.query['hygiene'] === 'true';
  const firstAid = route.query['first-aid'] === 'true';

  const healthKit = ref([
    {
      opened: false,
      icon: 'plus' as Icon,
    },
    {
      opened: false,
      icon: 'plus' as Icon,
    },
    {
      opened: false,
      icon: 'plus' as Icon,
    },
    {
      opened: false,
      icon: 'plus' as Icon,
    },
    {
      opened: false,
      icon: 'plus' as Icon,
    },
    {
      opened: false,
      icon: 'plus' as Icon,
    },
  ]);

  function toggle(index: number) {
    healthKit.value[index].opened = !healthKit.value[index].opened;
    healthKit.value[index].icon === 'plus' ? healthKit.value[index].icon = 'minus' : healthKit.value[index].icon = 'plus';
  }
</script>
<template>
  <section class="section">
    <div class="container text-center pt-24">
      <img src="/assets/images/kit-builder/kit-builder-icon.webp" class="mb-2">
      <div class="text-h1 mb-8">Assemble your Climate Care Kit</div>
      <div class="text-body mb-8 w-214">Now that you've finished customizing your kit, the next step is to assemble it in real life. A fully stocked health kit can help you when you run into emergencies and is an important reminder to monitor your personal health alongside your environment. 
        Make sure that your health kit is readily available to you and is in an area where you can easily find it.
      </div>
      <div class="text-body w-214 mb-16">
        Besides your Climate Care Kit, the best thing you can do to stay prepared is to take climate change health risks seriously. Stay informed on the different risks you encounter in your life, make lifestyle adjustments to prevent them, and support solutions to help reduce climate change.
      </div>
      <div class="text-h2 mb-16">Include the following in your health kit:</div>
      <ul>
        <li class="w-214 mb-2">
          <div class="bg-[#5AAAF1] w-full p-8 text-white cursor-pointer" @click="toggle(0)">
            <div class="flex justify-between">
              <div class="text-h3">Climate Preparedness</div>
              <SvgLoader
                :icon="healthKit[0].icon"
                class="h-6 w-6 !mb-0"
              ></SvgLoader>
            </div>
            <div class="text-body text-left mt-2">Our printable materials have handy information to help you familiarize yourself with climate change health risks. Print them as a reference and keep them with alongside the other climate preparedness items.</div>
          </div>
          <div class="h-0 overflow-hidden transition-all duration-300" :class="{'h-100': healthKit[0].opened}">
            helloworld
          </div>
        </li>
        <li class="w-214 mb-2">
          <div class="bg-[#48BEB5] w-full p-8 text-white cursor-pointer" @click="toggle(1)">
            <div class="flex justify-between">
              <div class="text-h3">Basic Materials</div>
              <SvgLoader
                :icon="healthKit[1].icon"
                class="h-6 w-6 !mb-0"
              ></SvgLoader>
            </div>
            <div class="text-body text-left mt-2">Basic materials to include in every health kit. Check your items every year to make sure they're well stocked. For more information, see our source.</div>
          </div>
          <div class="h-0 overflow-hidden transition-all duration-300" :class="{'h-100': healthKit[1].opened}">
            helloworld
          </div>
        </li>
        <li class="w-214 mb-2">
          <div class="bg-[#D37834] w-full p-8 text-white cursor-pointer" @click="toggle(2)">
            <div class="flex justify-between">
              <div class="text-h3">Extreme Heat</div>
              <SvgLoader
                :icon="healthKit[2].icon"
                class="h-6 w-6 !mb-0"
              ></SvgLoader>
            </div>
            <div class="text-body text-left mt-2">Items to stay cool during the extreme heat. For more information, see our source. </div>
          </div>
          <div class="h-0 overflow-hidden transition-all duration-300" :class="{'h-100': healthKit[2].opened}">
            helloworld
          </div>
        </li>
        <li class="w-214 mb-2">
          <div class="bg-[#907BD2] w-full p-8 text-white cursor-pointer" @click="toggle(3)">
            <div class="flex justify-between">
              <div class="text-h3">Air Pollution</div>
              <SvgLoader
                :icon="healthKit[3].icon"
                class="h-6 w-6 !mb-0"
              ></SvgLoader>
            </div>
            <div class="text-body text-left mt-2">Items to protect yourself from air pollution.</div>
          </div>
          <div class="h-0 overflow-hidden transition-all duration-300" :class="{'h-100': healthKit[3].opened}">
            helloworld
          </div>
        </li>
        <li class="w-214 mb-2">
          <div class="bg-[#FF7255] w-full p-8 text-white cursor-pointer" @click="toggle(4)">
            <div class="flex justify-between">
              <div class="text-h3">Hygiene Essentials</div>
              <SvgLoader
                :icon="healthKit[4].icon"
                class="h-6 w-6 !mb-0"
              ></SvgLoader>
            </div>
            <div class="text-body text-left mt-2">Items for grooming, oral care, and menstrual products.</div>
          </div>
          <div class="h-0 overflow-hidden transition-all duration-300" :class="{'h-100': healthKit[4].opened}">
            helloworld
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>