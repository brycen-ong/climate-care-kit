<script setup lang="ts">
  const step = ref(0);
  const snackbar = useSnackbar();

  const kitBuilder = [
    {
      question: 'Kit Size',
      title: 'Who am I building this kit for?',
      subtitle: '',
      options: {
        small: {
          title: 'Me',
          subtitle: 'A small kit',
          background: 'bg-[#5AAAF1]',
        },
        medium: {
          title: 'Me and one other person',
          subtitle: 'A medium kit',
          background: 'bg-[#A592E0]',
        },
        large: {
          title: 'My family',
          subtitle: 'A large kit',
          background: 'bg-[#53D1C7]',
        },
      }
    },
    {
      question: 'Climate Change',
      title: 'Which of these health risks do I experience?',
      subtitle: 'Select all that apply',
      options: {
        'extreme-heat': {
          title: 'Extreme heat',
          subtitle: 'I am often exposed to hot temperatures',
          background: 'bg-[#D37834]',
        },
        'rain-and-flooding': {
          title: 'Rain and Flooding',
          subtitle: 'I often pass through rain and flooded areas',
          background: 'bg-[#5AAAF1]',
        },
        'air-pollution': {
          title: 'Air Pollution',
          subtitle: 'I live in an urban area with lots of congestion',
          background: 'bg-[#907BD2]',
        },
      }
    },
    {
      question: 'Miscellaneous',
      title: 'What else do I want to use this kit for?',
      subtitle: 'Select all that apply or simply click "Next"',
      options: {
        hygiene: {
          title: 'Hygiene',
          subtitle: 'Items for grooming, oral care, and menstrual products',
          background: 'bg-[#A592E0]',
        },
        'first-aid': {
          title: 'First aid',
          subtitle: 'Additional items for basic first aid',
          background: 'bg-[#FFA691]',
        },
      }
    }
  ];
  const answers = ref([]);

  function back() {
    if (step.value === 0) {
      return;
    }

    step.value--;
  };

  function next() {
    if (step.value >= 5) {
      finish();
      return;
    }

    step.value++;
  };

  function finish() {};
</script>

<template>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-1.png)] bg-bottom bg-no-repeat" :class="{ 'hidden': step > 0 }">
    <div class="container text-center">
      <div class="text-title mb-6">Build your Climate Care Kit</div>
      <div class="text-body mb-8 max-w-214">Being prepared means having the knowledge and foresight needed to manage your health for the changing climate. One way you can prepare yourself for climate change health risks is by including them in your general health management.</div>
      <div class="text-body mb-16 max-w-214">Our kit builder can show you what you need to build a climate-ready health kit for the first time. Take the first step by learning how to build your kit with us.</div>
      <button class="button text-button text-white w-70" @click="step++">Start</button>
    </div>
  </section>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-2.png)] bg-size-[100%_100%]" :class="{ 'hidden': step === 0 }">
    <div class="text-label mb-6 uppercase">{{ kitBuilder[step-1]?.question }}</div>
    <div class="text-h2" :class="{'mb-2': step > 1, 'mb-16': step <=1}">{{ kitBuilder[step-1]?.title }}</div>
    <div class="text-body mb-6">{{ kitBuilder[step-1]?.subtitle }}</div>
    <div class="flex items-center justify-center gap-20 text-white text-center mb-16">
      <div v-for="option in Object.keys(kitBuilder[step-1]?.options || {})">
        <input type="radio" :id="option" :value="option" :name="`${step-1}`" class="absolute opacity-0 peer" v-model="answers[step-1]">
        <label :for="`${option}`" class="rounded-2xl flex flex-col items-center justify-center w-69 h-94 px-8 peer-checked:border-6 peer-checked:shadow-2xl" :class="kitBuilder[step-1].options?.[option as keyof object]['background']">
          <div class="text-h2 mb-2">{{ kitBuilder[step-1].options?.[option as keyof object]['title'] }}</div>
          <div class="text-body">{{ kitBuilder[step-1].options?.[option as keyof object]['subtitle'] }}</div>
        </label>
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