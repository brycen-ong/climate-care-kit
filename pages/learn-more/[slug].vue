<script setup lang="ts">
import type { Slug } from '~/types';
import extremeHeatCardImg1 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-card-1.webp';
import extremeHeatCardImg2 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-card-2.webp';
import extremeHeatCardImg3 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-card-3.webp';
import extremeHeatCardImg4 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-card-4.webp';
import extremeHeatBg1 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-bg-1.webp';
import extremeHeatBg2 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-bg-2.webp';
import extremeHeatBg3 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-bg-3.webp';
import extremeHeatBg4 from '~/assets/images/learn-more/extreme-heat/learn-more-eh-bg-4.webp';
import rainAndFloodingCardImg1 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-card-1.webp';
import rainAndFloodingCardImg2 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-card-2.webp';
import rainAndFloodingCardImg3 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-card-3.webp';
import rainAndFloodingCardImg4 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-card-4.webp';
import rainAndFloodingBg1 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-bg-1.webp';
import rainAndFloodingBg2 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-bg-2.webp';
import rainAndFloodingBg3 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-bg-3.webp';
import rainAndFloodingBg4 from '~/assets/images/learn-more/rain-and-flooding/learn-more-raf-bg-4.webp';
import airPollutionCardImg1 from '~/assets/images/learn-more/air-pollution/learn-more-ap-card-1.webp';
import airPollutionCardImg2 from '~/assets/images/learn-more/air-pollution/learn-more-ap-card-2.webp';
import airPollutionCardImg3 from '~/assets/images/learn-more/air-pollution/learn-more-ap-card-3.webp';
import airPollutionCardImg4 from '~/assets/images/learn-more/air-pollution/learn-more-ap-card-4.webp';
import airPollutionBg1 from '~/assets/images/learn-more/air-pollution/learn-more-ap-bg-1.webp';
import airPollutionBg2 from '~/assets/images/learn-more/air-pollution/learn-more-ap-bg-2.webp';
import airPollutionBg3 from '~/assets/images/learn-more/air-pollution/learn-more-ap-bg-3.webp';
import airPollutionBg4 from '~/assets/images/learn-more/air-pollution/learn-more-ap-bg-4.webp';

const route = useRoute();
const slug: Slug = route.params.slug as Slug;

const content = {
  'extreme-heat': {
    title: 'Extreme Heat',
    body: 'The warming climate raises global temperatures, which leads to very hot days and nights. These temperatures can be extremely dangerous for our health, and Metro Manila may one day be a deadly hot spot for heat.\n\nOur bodies work best at around 37°C or 98.6°F. If we get too hot, our blood starts to thicken, which makes our heart work harder. Our bodies sweat to cool themselves, but high temperatures and humidity can interfere with our ability to cool down effectively. All this strain on our heart can damage our organs. If our core temperatures rise above 104°F or 40°C, our organs start shutting down and we may get heat stroke.',
    color: '#D37834',
    backgrounds: [
      extremeHeatBg1,
      extremeHeatBg2,
      extremeHeatBg3,
      extremeHeatBg4,
    ],
    spotting: 'dangerous temperatures',
    cards: [
      {
        card: {
          title: 'Exercising in hot weather',
          image: extremeHeatCardImg1,
        },
        info: {
          title: 'Heat Exhaustion',
          body: 'Exercising outdoors during hot days can cause your body to overheat, and it may not be able to cool itself down. In this situation, you may develop heat exhaustion. If it is especially humid, your sweat won\'t be able to evaporate.\n\nThis type of heat exhaustion is a common problem among athletes and military recruits.'
        }
      },
      {
        card: {
          title: 'Changing of the seasons',
          image: extremeHeatCardImg2,
        },
        info: {
          title: 'Rise in temperatures',
          body: 'Unlike other countries, the Philippines has two seasons: the wet season and the dry season.\n\nDuring the dry season, the temperatures will rise and the number of hot days will increase. These temperatures can become dangerous, and it is important to monitor them.'
        }
      },
      {
        card: {
          title: 'Feeling dizzy while in a hot room',
          image: extremeHeatCardImg3
        },
        info: {
          title: 'Heat Stroke',
          body: 'Heat stroke doesn\'t just happen outdoors. Indoor temperatures can become equally dangerous, especially if there is no ventilation.\n\nOne of the symptoms of heat stroke is an altered state of mind, like being confused, slurring speech, or even having seizures. Get medical help right away if you notice anybody with these signs.'
        }
      },
      {
        card: {
          title: 'Strolling around the city',
          image: extremeHeatCardImg4
        },
        info: {
          title: 'Urban Heat Island (UHI)',
          body: 'Cities can actually increase the effects of extreme heat. Since there is less greenery to provide shade, more traffic, and lots of pavement that absorbs heat; there is a higher likelihood for heat-related illnesses in urban environments. This is called the Urban Heat Island effect. Metro Manila, like other Philippine cities, suffers from the UHI.'
        }
      }
    ],
    prepared: 'extreme heat',
    tips: [
      'Find places you can go to cool down such as shopping malls, cafes, or libraries. If you can\'t find a cool area, stay on the lowest floor of a building, away from the sunshine.',
      'Learn about the different types of heat illnesses and how to spot them.',
      'Dress in loose and lightweight clothing.',
      'Drink plenty of water regularly.'
    ]
  },
  'rain-and-flooding': {
    title: 'Rain and Flooding',
    body: 'Climate change affects the intensity of rain and the quality of water. Floodwater is already polluted, but the warming waters from climate change create an environment for harmful bacteria and pathogens to thrive.\n\nYou may be familiar with some diseases caused by contaminated water, but you may not realize that climate change is making them more severe. Climate change increases the growth and activity of bacteria that causes leptospirosis, of mosquitos that carry dengue, and the pathogens that cause typhoid fever; among other diseases.',
    color: '#3382C8',
    backgrounds: [
      rainAndFloodingBg1,
      rainAndFloodingBg2,
      rainAndFloodingBg3,
      rainAndFloodingBg4,
    ],
    spotting: 'contaminated water',
    cards: [
      {
        card: {
          title: 'Wading through floodwater',
          image: rainAndFloodingCardImg1,
        },
        info: {
          title: 'Injury and Illness',
          body: 'Direct contact with floodwater can irritate your skin. If you have an open wound you could possibly be exposed to dangerous diseases like leptospirosis.\n\nEven if you do not have an open wound, some floodwater contains debris that can puncture your skin.'
        }
      },
      {
        card: {
          title: 'Going inside a damp building',
          image: rainAndFloodingCardImg2
        },
        info: {
          title: 'Asthma and Allergies',
          body: 'If buildings do not properly dry after a flood, mold and bacteria can grow, which can trigger an allergic reaction or cause asthma to flare up. These bacteria can grow on wet items as well, so it is important for them to fully dry after a flood.'
        }
      },
      {
        card: {
          title: 'Eating street food during heavy rain',
          image: rainAndFloodingCardImg3
        },
        info: {
          title: 'Food Poisoning',
          body: 'The ingredients used in street food may be exposed to contaminated water during heavy rain. While they are delicious, eating them could lead to food poisoning or gastrointestinal infections.'
        }
      },
      {
        card: {
          title: 'Hanging out near puddled water',
          image: rainAndFloodingCardImg4
        },
        info: {
          title: 'Dengue Fever',
          body: 'After heavy rain, puddles may remain and pools of still water can be trapped in tires, flower pots, water bowls and other containers. Stagnant water is a breeding ground for mosquitos, many of which may carry the virus that causes dengue fever.'
        }
      }
    ],
    prepared: 'unexpected rain',
    tips: [
      'Avoid walking or wading through flooded areas.',
      'Practice Proper hygiene and wash with soap and water if you come into contact with flood water.',
      'Drain stagnant water near your home and use mosquito repellants after it rains.',
    ]
  },
  'air-pollution': {
    title: 'Air Pollution',
    body: 'Air pollution and climate change are linked. Many of the sources that worsen air quality also contribute to climate change. The warming climate can increase the number of certain air pollutants, including greenhouse gases, which warms the planet further.\n\nAir pollution kills 7 million people each year. Exposure to air pollution can lead to ischemic stroke and heart disease, lung cancer, neurological disorders, pregnancy complications, and other severe health issues. Even short term exposure to poor air quality can have drastic effects on your body depending on the type of pollutant you inhale.',
    color: '#6E56B9',
    backgrounds: [
      airPollutionBg1,
      airPollutionBg2,
      airPollutionBg3,
      airPollutionBg4,
    ],
    spotting: 'air pollution',
    cards: [
      {
        card: {
          title: 'Working out near a busy road',
          image: airPollutionCardImg1
        },
        info: {
          title: '',
          body: 'Your morning jog may pass through busy roads, but breathing in the air from highways can lead you to inhaling air pollutants.\n\nAdults that live or work near highways (such as traffic police) are at greater risk for cardio-respiratory conditions, among other illnesses. Children that live close to major roads may develop asthma, reduced lung function, or even leukemia.'
        }
      },
      {
        card: {
          title: 'Cooking using wood or charcoal',
          image: airPollutionCardImg2
        },
        info: {
          title: '',
          body: 'The air quality inside your household can be just as dangerous for your health as outdoor air. Burning polluting fuels like wood, charcoal, and kerosene in open fires or inefficient stoves can be worsen the air quality in your home.\n\nHousehold air pollution leads to 3 million deaths each year. In children less than 5 years old, breathing in polluted air at home causes nearly half of all pneumonia deaths.'
        }
      },
      {
        card: {
          title: 'Going outside without knowing the air quality levels',
          image: airPollutionCardImg3
        },
        info: {
          title: '',
          body: 'Although the air outside may look clear, the reality may be very different. You may need to bring a high-filtration mask if the quality is less than ideal.\n\nMake sure to check the air quality in your city with the Philippines\' air quality-monitoring application before going outside.'
        }
      },
      {
        card: {
          title: 'Using air conditioning when the air quality outside is poor',
          image: airPollutionCardImg4
        },
        info: {
          title: '',
          body: 'If you use a window air conditioner when the air quality outside is bad, it may bring the poor air into your home. If you have this type of air conditioner, see if you can set it to a "fresh air", "ventilation", or "recirculating" setting so that only indoor air is cycled.'
        }
      }
    ],
    prepared: 'air pollution',
    tips: [
      'Avoid exercising near areas with lots of traffic, and avoid going outside at all when the air quality is poor.',
      'Familiarize yourself with the air quality in your area. Check for daily air pollution with applications like the Philippines\' Air Quality Index app.',
      'If you have to go outdoors when the air quality is bad, wear a high-filtration mask like an N95 or a KN95.',
    ]
  },
}

</script>
<template>
  <section class="section bg-size-[auto_100%] bg-center text-center lg:bg-size-[100%_100%]" :style="{ backgroundImage: `url(${content[slug].backgrounds[0]})`}">
    <div class="container">
      <div class="text-8xl font-medium lg:text-title mt-24 mb-4" :style="{ color: content[slug].color }">{{ content[slug].title }}</div>
      <div class="text-lg lg:text-body whitespace-pre-line">{{ content[slug].body }}</div>
    </div>
  </section>
  <section class="section bg-size-[auto_100%] bg-center text-center lg:bg-size-[100%_100%]" :style="{ backgroundImage: `url(${content[slug].backgrounds[1]})`}">
    <div class="container">
      <div class="text-white text-h1 mb-4">Spotting <span class="lowercase">{{ content[slug].title }}</span></div>
      <div class="text-white text-body mb-16 max-w-214">It's important to learn how to spot situations where you may be at risk for {{ content[slug].spotting }}. See if you can guess how these day-to-day activities can turn dangerous.</div>
      <div class="flex gap-6 flex-wrap justify-center">
        <label v-for="card in content[slug].cards" class="block relative rounded-2xl w-91 h-113 px-2 py-4 bg-white cursor-pointer transition-all hover:translate-y-[-12px]">
          <div class="w-full flex flex-col items-center justify-center" :for="card.card.title">
            <input type="checkbox" class="absolute invisible peer" :id="card.card.title">
            <img :src="card.card.image" class="max-w-75 peer-checked:invisible">
            <div class="text-body2 mt-10 peer-checked:invisible max-w-75">{{ card.card.title }}</div>
            <div class="absolute invisible peer-checked:visible max-w-75 top-5">
              <div class="text-body3 mb-4">{{ card.info.title }}</div>
              <div class="text-body">{{ card.info.body }}</div>
            </div>
          </div>
          <div></div>
        </label>
      </div>
    </div>
  </section>
  <section class="h-25 bg-size-[auto_100%] lg:bg-size-[100%_100%] lg:h-50" :style="{ backgroundImage: `url(${content[slug].backgrounds[2]})`}"></section>
  <section class="section lg:p-0">
    <div class="text-h1 mb-4">Staying Prepared</div>
    <div class="text-body mb-4">Making small adjustments to your lifestyle can help you prepare for times of extreme heat. Here are a few things you can start doing today.</div>
    <div class="w-full h-70 bg-size-[auto_100%] bg-center grid grid-cols-2 lg:h-291 lg:bg-size-[100%_100%]" :style="{ backgroundImage: `url(${content[slug].backgrounds[3]})`}">
      <div v-for="tip in content[slug].tips" class="flex items-center justify-center" :class="{'last:col-span-2': content[slug].tips.length%2!==0}">
        <button class="tooltip animate w-16 h-16 group relative">
          <div class="tooltip-circle w-6 h-6"></div>
          <div class="invisible group-[:hover]:visible min-w-50 absolute p-8 bg-white text-body3 drop-shadow-lg top-[115%] text-[#696969] z-10 lg:w-120">{{ tip }}</div>
        </button>
      </div>
    </div>
  </section>
  <section class="section text-center">
    <div class="text-h2 mb-12 max-w-214">
      Keep your water bottles, umbrellas, and other items to battle extreme heat with you at all times.
    </div>
    <div class="text-h2 mb-12 max-w-214">
      Building a Climate Care Kit can keep everything you need together in one place for when you need it.
    </div>
    <div class="text-body mb-16 max-w-214">Our kit builder can show you what you need to build a climate-ready health kit for the first time. Take the first step by learning how to build your kit with us.</div>
    <NuxtLink :to="'/kit-builder'">
      <button class="button text-button text-white w-70">
        Build my Kit
      </button>
    </NuxtLink>
    <div class="w-full bg-size-[auto_100%] bg-center h-100 bg-[url(/assets/images/kit-builder/kit-builder-bg-1.webp)] lg:bg-size-[100%_100%] lg:w-250"></div>
  </section>
</template>