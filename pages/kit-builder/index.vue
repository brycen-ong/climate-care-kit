<script setup lang="ts">
  const step = ref(0);
  const snackbar = useSnackbar();

  const kitBuilder = [];
  const answers = ref([]);

  function back() {};
  function next() {};
  function finish() {};
</script>

<template>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-1.png)] bg-bottom bg-no-repeat">
    <div class="container text-center">
      <div class="text-title mb-6">Build your Climate Care Kit</div>
      <div class="text-body mb-8 max-w-214">Being prepared means having the knowledge and foresight needed to manage your health for the changing climate. One way you can prepare yourself for climate change health risks is by including them in your general health management.</div>
      <div class="text-body mb-16 max-w-214">Our kit builder can show you what you need to build a climate-ready health kit for the first time. Take the first step by learning how to build your kit with us.</div>
      <button class="button text-button text-white w-70">
        Start
      </button>
    </div>
  </section>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-2.png)] bg-size-[100%_100%]">
    <div class="text-label mb-6">Kit Size</div>
    <div class="text-h2" :class="{'mb-2': step > 1, 'mb-16': step <=1}">Who am I building this kit for?</div>
    <div class="text-body mb-6"></div>
    <div class="flex items-center justify-center gap-20 text-white text-center mb-16">
      <div class="rounded-2xl flex flex-col items-center justify-center bg-[#5AAAF1] w-69 h-94 px-8">
        <div class="text-h2 mb-2">Me</div>
        <div class="text-body">A small kit</div>
      </div>
      <div class="rounded-2xl flex flex-col items-center justify-center bg-[#A592E0] w-69 h-94 px-8">
        <div class="text-h2 mb-2">Me and one other Person</div>
        <div class="text-body">A medium kit</div>
      </div>
      <div class="rounded-2xl flex flex-col items-center justify-center bg-[#53D1C7] w-69 h-94 px-8">
        <div class="text-h2 mb-2">My Family</div>
        <div class="text-body">A large kit</div>
      </div>
    </div>
    <div class="flex text-button text-white gap-2">
      <button class="button w-34" @click="back">
        <SvgLoader :icon="'chevron-x'" class="h-4 w-4 me-2 rotate-180"></SvgLoader>
        Back
      </button>
      <button class="button w-34" @click="next">
        {{ step < 9 ? 'Next' : 'Finish' }}
        <SvgLoader :icon="'chevron-x'" class="h-4 w-4 ms-2"></SvgLoader>
      </button>
    </div>
  </section>
</template>