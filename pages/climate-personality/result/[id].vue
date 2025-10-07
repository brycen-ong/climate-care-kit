<script setup lang="ts">
  import type { Result } from '~/types';

  const route = useRoute();
  const snackbar = useSnackbar();
  const clipboard = useClipboard();
  const result: Result = route.params.id as Result;

  const results = {
    sunny: {
      header: 'You like to be active and you thrive under the sun',
      subheader: 'However, your environments and habits may leave you exposed to these health risks',
      colors: {
        header: '#D37834',
        bg: '#FFFBF6',
        personality: '#E98A43',
        tips: '#D37834',
      },
      risks: {
        'extreme-heat': true,
        'rain-and-flooding': true,
        'air-pollution': true,
      },
      personality: [
        'You love the outdoors. Make sure to look out for these risks!',
        'You feel a little invincible. Climate change health risks affect everybody, including you. Make sure to protect yourself!',
      ],
      tips: [
        'Stay hydrated',
        'Bring rain gear when going out',
        'Wear a mask in areas with a lot of smog or congestion',
      ]
    },
    chilly: {
      header: 'You are a relaxed person that enjoys spending time at home',
      subheader: 'Still, your environments and habits may leave you exposed to these health risks',
      colors: {
        header: '#5AAAF1',
        bg: '#F6FBFF',
        personality: '#5AAAF1',
        tips: '#4499E3',
      },
      risks: {
        'extreme-heat': true,
        'rain-and-flooding': true,
        'air-pollution': false,
      },
      personality: [
        'You are a homebody. Remember that overheating can occur indoors as well!',
        'You can be a little careless. Try keeping reminders of your health tips with you!',
      ],
      tips: [
        'Stay hydrated',
        'Keep your home well ventilated and cool',
        'Wear a mask in areas with a lot of smog or congestion',
      ]
    },
    windy: {
      header: 'You are a busybody with a hectic schedule',
      subheader: 'Your environments and habits may leave you exposed to these health risks',
      colors: {
        header: '#A592E0',
        bg: '#F9F6FF',
        personality: '#A592E0',
        tips: '#907BD2',
      },
      risks: {
        'extreme-heat': true,
        'rain-and-flooding': false,
        'air-pollution': true,
      },
      personality: [
        'You are a go-getter with lots to do. Remember to keep an eye out for your health in between all your activities!',
        'You love the fast paced city life. Cities can bring heat and smog, so make sure to prepare when going out!',
      ],
      tips: [
        'Stay hydrated',
        'Bring an umbrella and cooling items when going out',
        'Wear a mask in areas with a lot of smog or congestion',
      ]
    },
    calm: {
      header: 'You are the type that likes to be prepared',
      subheader: 'Still, your environments and habits may leave you exposed to these health risks',
      colors: {
        header: '#53D1C7',
        bg: '#F2FFFE',
        personality: '#48BEB5',
        tips: '#00A89B',
      },
      risks: {
        'extreme-heat': false,
        'rain-and-flooding': true,
        'air-pollution': true,
      },
      personality: [
        'You are health conscious. Remember that climate change health risks are something to consider as well!',
        'You enjoy being comfortable. Make sure that your home environment is well ventilated too!',
      ],
      tips: [
        'Avoid walking through flooded water if you get caught in the rain',
        'Wear a mask in areas with a lot of smog or congestion',
        'Keep your home well ventilated',
      ]
    }
  }

  function share() {
    const fullUrl = `${window.location.origin}${route.fullPath}`;
    clipboard.copy(fullUrl);
    snackbar.add({
      text: 'URL copied — share it with your friends!',
      type: 'success',
      duration: 5000,
    })
  }
</script>

<template>
  <section class="section" :style="{ backgroundColor: results[result]?.colors?.bg }">
    <div class="container">
      <div class="text-h2 mb-6 mt-32" :style="{ color: results[result]?.colors?.header }">{{ results[result]?.header }}</div>
      <div class="text-body2 mb-16">{{ results[result]?.subheader }}</div>
      <div class="flex justify-around w-full mb-16">
        <div class="w-80 flex flex-col items-center justify-center text-center" v-if="results[result]?.risks?.['extreme-heat']">
          <img class="h-32 w-32" src="/assets/images/cpq-result/cpq-result-extreme-heat-icon.webp">
          <div class="text-h2">Extreme Heat</div>
          <div class="text-body">which can lead to illnesses like heat stroke, heat cramps, and others</div>
        </div>
        <div class="w-80 flex flex-col items-center justify-center text-center" v-if="results[result]?.risks?.['rain-and-flooding']">
          <img class="h-32 w-32" src="/assets/images/cpq-result/cpq-result-rain-and-flooding-icon.webp">
          <div class="text-h2">Rain and Flooding</div>
          <div class="text-body">which can lead to illnesses like dengue, leptospirosis, and others</div>
        </div>
        <div class="w-80 flex flex-col items-center justify-center text-center" v-if="results[result]?.risks?.['air-pollution']">
          <img class="h-32" src="/assets/images/cpq-result/cpq-result-air-pollution-icon.webp">
          <div class="text-h2">Air Pollution</div>
          <div class="text-body">which can lead to illnesses like stroke, coronary heart disease, and others</div>
        </div>
      </div>
      <div class="flex gap-7 mb-16">
        <div class="flex flex-col items-center justify-center h-87 w-full rounded-2xl p-8 text-center text-white" :style="{ backgroundColor: results[result]?.colors?.personality }">
          <div class="text-h2 mb-4">We think you have a <span class="capitalize">{{ result }}</span> Personality</div>
          <div class="text-body mb-4" v-for="personality in results[result]?.personality">{{ personality }}</div>
        </div>
        <div class="flex flex-col items-center justify-center h-87 w-full rounded-2xl p-8 text-center text-white" :style="{ backgroundColor: results[result]?.colors?.tips }">
          <div class="text-h2 mb-4">Tips to stay healthy</div>
          <div class="text-body mb-4" v-for="tips in results[result]?.tips">{{ tips }}</div>
        </div>
      </div>
      <button class="button text-button text-white mb-32" @click="share">Share Results</button>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="text-h1 my-32">What do my risks mean?</div>
      <div class="flex gap-8 mb-64">
        <div>
          <div class="text-h1 mb-4">Extreme Heat</div>
          <div class="text-body mb-8">Heat illnesses affect people of all ages. The summer temperatures in the Philippines have caused hundreds of students, 
            among others, to fall ill. Although you may not realize it, your health may be at risk. It is important not to underestimate the intensity 
            of the temperatures you experience and to learn how to cool down in the hot weather.</div>
          <div class="text-h2 mb-4">Staying healthy</div>
          <ul class="list-disc">
            <li class="mb-4">Learn about the different types of heat illnesses and how to spot them</li>
            <li class="mb-4">Find places where you can go to cool down such as shopping malls, cafes, or libraries.</li>
            <li class="mb-4">Dress loosely, lightly, and stay hydrated.</li>
          </ul>
        </div>
        <img class="h-139 w-139" src="/assets/images/cpq-result/cpq-result-extreme-heat.webp">
      </div>
      <div class="flex gap-8 mb-64">
        <div>
          <div class="text-h1 mb-4">Rain and Flooding</div>
          <div class="text-body mb-8">Many insect, bacterial, and water-borne diseases do better in the warmer weather brought about by climate change. 
            Exposure to city flood water may expose you to conditions as common as hypothermia or as deadly as leptospirosis and dengue. 
            Now more than ever, it is important to prepare for the sudden rain and flooding you may experience in your day-to-day life.</div>
          <div class="text-h2 mb-4">Staying healthy</div>
          <ul class="list-disc">
            <li class="mb-4">Avoid walking and wading through flooded areas</li>
            <li class="mb-4">Practice proper hygiene and wash your hands with soap and water if you come into contact with flood water.</li>
            <li class="mb-4">Use mosquito repellant if your home is in an area with stagnant water</li>
          </ul>
        </div>
        <img class="h-139 w-139" src="/assets/images/cpq-result/cpq-result-rain-and-flooding.webp">
      </div>
      <div class="flex gap-8 mb-32">
        <div>
          <div class="text-h1 mb-4">Air Pollution</div>
          <div class="text-body mb-8">Climate change makes air pollution worse by increasing outside air pollutants. 
            Air pollution is one of the causes for stroke and some heart diseases, among other cardiorespiratory complications. 
            While walking through congested streets may seem normal in your daily commute, being mindful of the air quality will sure be a boon to your health.</div>
          <div class="text-h2 mb-4">Staying healthy</div>
          <ul class="list-disc">
            <li class="mb-4">Check for daily air pollution forecasts in your area with applications like the Philippines' official AQI application.</li>
            <li class="mb-4">Avoid exercising near areas with lots of traffic, and avoid exercising outdoors at all when the air quality is poor.</li>
            <li class="mb-4">If you have to go outdoors when the air quality is bad, wear a high-filtration mask like an N95 or KN95.</li>
          </ul>
        </div>
        <img class="h-139 w-139" src="/assets/images/cpq-result/cpq-result-air-pollution.webp">
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="text-title mb-6">Other Solutions</div>
      <div class="text-body w-214 mb-32">Learning about climate risks to your life is one way to protect yourself from climate change, but it isn't the only one. 
        There are many solutions around you that can help address climate change in your life and your community.</div>
      <img class="h-50 w-50 mb-4" src="/assets/images/cpq-result/cpq-result-sustainable-icon.webp">
      <div class="text-h3 mb-4">Live a more sustainable lifestyle</div>
      <div class="text-body w-214 mb-16">While climate change requires the cooperation of all of society, there are many small adjustments that can help your planet, 
        and can also help you! Eating more plant-based food can be novel and delicious; Taking public transport can help you explore your city; 
        and using energy and water-saving appliances in your own home can save your wallet in the long run.</div>
      <img class="h-50 w-50 mb-4" src="/assets/images/cpq-result/cpq-result-green-city-icon.webp">
      <div class="text-h3 mb-4">Support your city's green initiatives and your green city officials</div>
      <div class="text-body w-214 mb-16">Some cities in the Philippines have great green initiatives. For example, Pasig City offers bike sharing programs and free shuttle 
        services alongside programs that help the city cool down amidst the heat. Learning about and supporting these initiatives alongside the officials that promote them 
        can help your community adapt to climate change, and may even be a good way to get involved in the wellbeing of your city!</div>
      <img class="h-50 w-50 mb-4" src="/assets/images/cpq-result/cpq-result-informed-icon.webp">
      <div class="text-h3 mb-4">Stay informed about different climate change solutions</div>
      <div class="text-body w-214 mb-32">There are many ways to stay informed. There are likely online webinars, classes, and community events in your area that talk about 
        climate change and their solutions. You can even join online groups on social media platforms that are dedicated to connecting members of your community to these very 
        learning opportunities.</div>
      <div class="w-214 pt-16 pb-32">
        <div class="w-full flex flex-col items-center justify-center text-white text-center bg-[#00A89B]/80 p-8 rounded-2xl">
          <div class="text-h2 mb-4">Build your Climate Care Kit</div>
          <div class="text-body mb-8">Preparedness starts with you. One step you can take to protect your health is by including climate-ready items in your personal health kit. 
            Take the first step by learning how to build your own climate care kit with us.</div>
            <NuxtLink :to="'/kit-builder'">
            <button class="button text-button w-70">
              Build my Kit
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>