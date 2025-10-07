<script setup lang="ts">
  import cpqBg2 from '~/assets/images/cpq/cpq-bg-2.webp';
  import cpqBg3 from '~/assets/images/cpq/cpq-bg-3.webp';
  import cpqBg4 from '~/assets/images/cpq/cpq-bg-4.webp';
  import cpqBg5 from '~/assets/images/cpq/cpq-bg-5.webp';
  import cpqBg6 from '~/assets/images/cpq/cpq-bg-6.webp';
  import cpqBg7 from '~/assets/images/cpq/cpq-bg-7.webp';
  import cpqBg8 from '~/assets/images/cpq/cpq-bg-8.webp';
  import cpqBg9 from '~/assets/images/cpq/cpq-bg-9.webp';
  import cpqBg10 from '~/assets/images/cpq/cpq-bg-10.webp';

  const step = ref(0);
  const snackbar = useSnackbar();

  const quiz = [
    {
      question: 'It is a typical weekday and you have your whole morning ahead of you. What does your daily schedule look like?',
      options: {
        a: 'I am active. I do sports, manual labor, or I just prefer being outside in the sun rather than indoors.',
        b: 'I have a very relaxed schedule. I like to stay at home and do my own thing!',
        c: 'Busy. I spend about of half my time on my feet, but I can usually find a cool and comfy place to wind down later.',
        d: 'My days can be busy, but I am usually spending it relaxing at home or somewhere nice!',
      },
      background: cpqBg2,
    },
    {
      question: 'You gaze out your bedroom window. What do you expect to see?',
      options: {
        a: 'Dark clouds, rain, and flooded streets! Rain is common where I live and flooding even more so.',
        b: 'Gloomy skies. Stormy weather is common here but flooding is rare.',
        c: 'I\'m not sure. It can be hard to predict the weather because there is an equal amount of rain and sun where I live.',
        d: 'Sunny weather! I can always expect bright blue skies as it rarely rains here.',
      },
      background: cpqBg3,
    },
    {
      question: 'You have to go to work and run some errands today. What does your usual commute look like?',
      options: {
        a: 'I like to be thrifty with my commute. I will walk when I can or take public transportation.',
        b: 'I prioritize comfort. I will take my car to work or grab a taxi if I can\'t use it.',
        c: 'I like an equal mix of comfort and affordability. I\'ll spend a bit more to get a taxi on days that the weather is bad.',
        d: 'I work from home most days rarely go out, even if it\'s for errands.',
      },
      background: cpqBg4,
    },
    {
      question: 'You check your weather application and it says it is going to rain. What do you bring?',
      options: {
        a: 'I don\'t bring anything special. I\'ll find out a way to deal with the rain when it comes.',
        b: 'Trick question, I don\'t check the weather app! Still, I\'ll try to bring an umbrella, but I\'ll probably forget.',
        c: 'I don\'t have to check the weather app  because I always have an umbrella with me when I go out.',
        d: 'On top of the usual rain gear, I like to make sure I am dressed to stay warm and dry. I really don\'t like getting wet!',
      },
      background: cpqBg5,
    },
    {
      question: 'Traffic is bad, and the sky looks extra smoggy. How does this affect your day?',
      options: {
        a: 'It is an inconvenience, but I still have places to be! I can\'t move my schedule around because of some smog.',
        b: 'I will cancel all my plans and stay at home. I hate the smell of smog!',
        c: 'I\'ll wear a mask or avoid walking in the smoke if I have to go outside, but my schedule is inflexible!',
        d: 'I\'m quite health conscious, so I\'m staying inside today. I\'ll also close my windows and get an air cleaner.',
      },
      background: cpqBg6,
    },
    {
      question: 'It\'s a hot day. Out of the blue, you start to get dizzy and you feel a bit faint. What do you do?',
      options: {
        a: 'I wait for the feeling to pass. This happens to me every now and then and I\'ve more or less gotten used to it.',
        b: 'I am a little concerned and I take a seat until the feeling passes. I\'ll buy water later on if I pass by any stores.',
        c: 'I\'ll move to a cool area and drink from the water bottle or sports drink I always carry.',
        d: 'I do what I can to cool down and stay hydrated. I\'ll also observe myself to see if I experience any other symptoms.',
      },
      background: cpqBg7,
    },
    {
      question: 'You decide to take a walk around town. What does your walk look like?',
      options: {
        a: 'I live in a crowded city with lots of cars. The area is full of smog so it is quite an unpleasant walk.',
        b: 'The area is walkable most days. There is enough greenery and space for me to enjoy as long as I go at the right time.',
        c: 'There are some streets where the air looks a bit thick, but if you plan your route well the walk is tolerable.',
        d: 'The city is nice, the air smells fresh, and I love to take walks outside because of how pleasant it is.',
      },
      background: cpqBg8,
    },
    {
      question: 'While at work, the skies start pouring. You have to get home, but the streets are flooded. What do you do?',
      options: {
        a: 'I wade through the water to catch my commute home. This is a normal occurrence or me by now.',
        b: 'I try to avoid the flooded areas, but I\'ll probably still get drenched. I\'ll just shower when I get home.',
        c: 'I\'ll look for a route to avoid the flooded areas or wait it out, even if it is a little inconvenient for me.',
        d: 'I have rain boots and dry clothes for this exact situation. I like to make sure I\'m dry when I get home.',
      },
      background: cpqBg9,
    },
    {
      question: 'After a long week, you decide to spend your Saturday lounging at home. What does your environment feel like?',
      options: {
        a: 'It can get very hot at home. There are times when I feel dizzy even when I\'m indoors.',
        b: 'While it is usually cool, it can get quite hot sometimes. Even with a fan on, I can get so sweaty that I have to shower.',
        c: 'I have no complaints. It doesn\'t get too hot or too cool and I have air conditioning to use when I need it.',
        d: 'It\'s cool clean, comfortable, and perfect for spending hours relaxing.',
      },
      background: cpqBg10,
    },
  ];

  const answers = ref([]);

  function back() {
    if (step.value === 0) {
      return;
    }

    step.value--;
  }

  function next() {
    if (step.value >= 9) {
      finish();
      return;
    }

    if (!answers.value[step.value-1]) {
      snackbar.add({
        type: 'error',
        text: 'Please select an answer!',
        duration: 5000,
      });
      return;
    }

    step.value++;
  }

  function finish() {
    const tallies = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    }

    answers.value.forEach((answer) => {
      tallies[answer]++;
    });

    const max = ref(0);
    const tallyResult = ref('');
    Object.entries(tallies).forEach(([option, tally]) => {
      if (max.value < tally) {
        max.value = tally;
        tallyResult.value = option;
      }
    })

    switch(tallyResult.value) {
      case 'a':
        navigateTo('/climate-personality/result/sunny');
        break;
      case 'b':
        navigateTo('/climate-personality/result/chilly');
        break;
      case 'c':
        navigateTo('/climate-personality/result/windy');
        break;
      case 'd':
        navigateTo('/climate-personality/result/calm');
        break;
    }
  }
</script>

<template>
  <section class="section bg-[url(/assets/images/cpq/cpq-bg-1.webp)] bg-size-[100%_100%] text-center" :class="{ 'hidden': step > 0 }">
    <div class="container">
      <div class="text-title mb-6">Discover your Climate Personality</div>
      <div class="text-body mb-16 max-w-214">
        How do you react to the world around you, and what role does this play in your health?
        Discover your Climate Personality and learn about how to protect your health from the changing climate.
      </div>
      <button class="button text-button w-70 text-white" @click="step++">Start</button>
    </div>
  </section>
  <section class="section bg-size-[100%_100%] transition-all" :class="{ 'hidden': step === 0 }" :style="{ backgroundImage: `url(${quiz[step-1]?.background})`}">
    <div class="container">
      <div class="text-label mb-6">Question {{ step }}/9</div>
      <div class="text-h3 mb-16">{{ quiz[step-1]?.question }}</div>
      <div class="text-body2 grid grid-cols-2 gap-2 mb-16">
        <div class="col-span-1 relative" v-for="option in Object.keys(quiz[step-1]?.options || {})">
          <input type="radio" :id="`${step}-${option}`" :value="option" :name="`${step-1}`" class="absolute opacity-0 peer" v-model="answers[step-1]">
          <label :for="`${step}-${option}`" class="block p-6 rounded-2xl cursor-pointer hover:bg-[#FFF3] peer-checked:ring-1 ring-white/75 peer-checked:bg-[#FFF3]">
            {{ quiz[step-1]?.options?.[option as keyof object] }}
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
    </div>
  </section>
</template>