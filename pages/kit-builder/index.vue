
<script setup lang="ts">
  const step = ref(0);
  const snackbar = useSnackbar();

  const kitBuilder = [
    {
      question: 'Kit Size',
      title: 'Who am I building this kit for?',
      subtitle: '',
      type: 'radio',
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
      type: 'checkbox',
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
      type: 'checkbox',
      options: {
        hygiene: {
          title: 'Hygiene',
          subtitle: 'Items for grooming, oral care.',
          background: 'bg-[#A592E0]',
        },
        menstrual: {
          title: 'Menstrual',
          subtitle: 'Items to include in a period pack',
          background: 'bg-[#FFA691]',
        },
      }
    },
    {
      title: 'You\'re done!',
      subtitle: 'Now that you\'re done customizing your kit, the next step is to acquire the items you need to build it in person.',
    }
  ];

  const answers = ref({
    0: '',
    1: {
      'extreme-heat': false,
      'rain-and-flooding': false,
      'air-pollution': false,
    },
    2: {
      hygiene: false,
      menstrual: false,
    }
  });

  const climateChangeResults = computed(() => {
    const results = [];
    if (answers.value[1]['extreme-heat']) {
      results.push('extreme heat');
    }

    if (answers.value[1]['rain-and-flooding']) {
      results.push('rain and flooding');
    }

    if (answers.value[1]['air-pollution']) {
      results.push('air pollution');
    }

    if (results.length === 2) {
      return results.join(' and ');
    } else if (results.length === 3) {
      return `${results[0]}, ${results[1]}, and ${results[2]}`;
    } else {
      return results[0]
    }
  });

  const miscellaneousResults = computed(() => {
    const results = [];
    if (answers.value[2]['hygiene']) {
      results.push('hygiene');
    }

    if (answers.value[2]['menstrual']) {
      results.push('menstrual');
    }

    if (results.length === 2) {
      return results.join(' and ');
    } else {
      return results[0];
    }
  })

  function back() {
    if (step.value === 0) {
      return;
    }

    step.value--;
  };

  function next() {
    if (step.value === 4) {
      finish();
      return;
    }

    if (step.value === 1) {
      if (!answers.value[step.value-1 as keyof object]) {
        snackbar.add({
          type: 'error',
          text: 'Please select an answer!',
          duration: 5000,
        });
        return;
      }
    } else if (step.value === 2) {
      if (!Object.values(answers.value[step.value-1 as keyof object]).includes(true)) {
        snackbar.add({
          type: 'error',
          text: 'Please select atleast one answer',
          duration: 5000,
        });
        return;
      }
    }

    step.value++;
  };

  function finish() {
    navigateTo({
      path: '/kit-builder/result',
      query: {
        size: answers.value[0],
        'extreme-heat': answers.value[1]['extreme-heat'].toString(),
        'rain-and-flooding': answers.value[1]['rain-and-flooding'].toString(),
        'air-pollution': answers.value[1]['air-pollution'].toString(),
        hygiene: answers.value[2].hygiene.toString(),
        menstrual: answers.value[2]['menstrual'].toString(),
      }
    });
  };
</script>

<template>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-1.webp)] bg-bottom bg-no-repeat" :class="{ 'hidden': step > 0 }">
    <div class="container text-center">
      <div class="text-title mb-6">Build your Climate Care Kit</div>
      <div class="text-body mb-8 max-w-214">Being prepared means having the knowledge and foresight needed to manage your health for the changing climate. One way you can prepare yourself for climate change health risks is by including them in your general health management.</div>
      <div class="text-body mb-16 max-w-214">Our kit builder can show you what you need to build a climate-ready health kit for the first time. Take the first step by learning how to build your kit with us.</div>
      <button class="button text-button text-white w-70" @click="step++">Start</button>
    </div>
  </section>
  <section class="section bg-[url(/assets/images/kit-builder/kit-builder-bg-2.webp)] bg-size-[100%_100%]" :class="{ 'hidden': step === 0 }">
    <div class="text-label mb-6 uppercase">{{ kitBuilder[step-1]?.question }}</div>
    <div class="text-h2" :class="{'mb-2': step > 1, 'mb-16': step <=1}">{{ kitBuilder[step-1]?.title }}</div>
    <div class="text-body mb-6">{{ kitBuilder[step-1]?.subtitle }}</div>
    <div class="flex items-center justify-center gap-20 text-white text-center mb-16" v-if="step < 4">
      <template v-if="kitBuilder[step-1]?.type === 'radio'">
        <div v-for="option in Object.keys(kitBuilder[step-1]?.options || {})" class="relative">
          <input type="radio" :id="option" :value="option" :name="`${step-1}`" class="absolute opacity-0 peer" v-model="answers[step-1 as keyof object]">
          <label :for="`${option}`" class="rounded-2xl flex flex-col items-center justify-center w-69 h-94 px-[22px] border-10 border-transparent peer-checked:border-white peer-checked:shadow-2xl/25" :class="kitBuilder[step-1].options?.[option as keyof object]['background']">
            <div class="text-h2 mb-2">{{ kitBuilder[step-1].options?.[option as keyof object]['title'] }}</div>
            <div class="text-body">{{ kitBuilder[step-1].options?.[option as keyof object]['subtitle'] }}</div>
          </label>
        </div>
      </template>
      <template v-if="kitBuilder[step-1]?.type === 'checkbox'">
        <div v-for="option in Object.keys(kitBuilder[step-1]?.options || {})" class="relative">
          <input type="checkbox" :id="option" :value="option" class="absolute opacity-0 peer" v-model="answers[step-1 as keyof object][option]">
          <label :for="`${option}`" class="rounded-2xl flex flex-col items-center justify-center w-69 h-94 px-[22px] border-10 border-transparent peer-checked:border-white peer-checked:shadow-2xl/25" :class="kitBuilder[step-1].options?.[option as keyof object]['background']">
            <div class="text-h2 mb-2">{{ kitBuilder[step-1].options?.[option as keyof object]['title'] }}</div>
            <div class="text-body">{{ kitBuilder[step-1].options?.[option as keyof object]['subtitle'] }}</div>
          </label>
        </div>
      </template>
    </div>
    <div class="flex flex-col items-center justify-center" v-if="step === 4">
      <div class="text-h3 mb-2">A {{ answers[0 as keyof object] }} kit</div>
      <div class="text-body mb-8">My health kit is good enough for {{ answers[0] === 'small' ? 'me!' : answers[0] === 'medium' ? 'me and a friend!' : 'my family!' }}</div>
      <div class="text-h3 mb-2">A kit ready for climate change</div>
      <div class="text-body mb-8">
        My health kit has items to address
        {{ climateChangeResults }}
      </div>
      <template v-if="Object.values(answers[2]).includes(true)">
        <div class="text-h3 mb-2">A versatile kit</div>
        <div class="text-body mb-8">
          My health kit has
          {{ miscellaneousResults }}
          items
        </div>
      </template>
    </div>
    <div class="flex text-button text-white gap-2">
      <button class="button w-34" @click="back">
        <SvgLoader :icon="'chevron-x'" class="h-4 w-4 me-2 rotate-180"></SvgLoader>
        Back
      </button>
      <button class="button w-34" @click="next">
        {{ step < 4 ? 'Next' : 'Finish' }}
        <SvgLoader :icon="'chevron-x'" class="h-4 w-4 ms-2"></SvgLoader>
      </button>
    </div>
  </section>
</template>