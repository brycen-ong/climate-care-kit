<script setup lang="ts">
  import type {
    Icon,
    Size,
  } from '~/types';

  const route = useRoute();
  const size: Size = route.query['size'] as Size;
  const extremeHeat = route.query['extreme-heat'] === 'true';
  const rainAndFlooding = route.query['rain-and-flooding'] === 'true';
  const airPollution = route.query['air-pollution'] === 'true';
  const hygiene = route.query['hygiene'] === 'true';
  const menstrual = route.query['menstrual'] === 'true';

  const sizeData = {
    small: {
      container: 'A small waterproof zippered pouch or a container with compartments',
      items: [
        'A first aid guide',
        '4 Antibiotic ointment packs',
        '4 Antiseptic cleansing wipes (sting free)',
        '1 Hydrocortisone pack (0.9g)',
        '2 Hand sanitizer packs (0.9g)',
        '10 Bandages of different sizes',
        '1 Instant cold compress',
        '1 Triangular bandage',
        '1 Trauma pad (5x9 inches)',
        '4 Gauze dressing pads (3x3 inches)',
        '2 Gauze dressing pads (4x4 inches)',
        '1 First aid tape roll (3/4 inches wide, 5 yards long)',
        '1 Gauze roll bandage (3 inches)',
        '1 CPR mask (with one-way valve)',
        '2 Pairs of non-latex gloves',
        '1 Thermometer (non-mercury/non-glass)',
        '1 Pair of scissors',
        '1 Pair of tweezers',
        'Personal medication',
      ]
    },
    medium: {
      container: 'A medium waterproof zippered pouch or a hard container with compartments',
      items: [
        'A first aid guide',
        '1 Antibiotic ointment',
        '8 Antiseptic cleansing wipes (sting free)',
        '2 Hydrocortisone packs (0.9g)',
        '1 Hand sanitizer',
        '20 Bandages of different sizes',
        '1 Instant cold compress',
        '2 Triangular bandages',
        '2 Trauma pads (5x9 inches)',
        '8 Gauze dressing pads (3x3 inches)',
        '4 Gauze dressing pads (4x4 inches)',
        '1 First aid tape roll (3/4 inches wide, 10 yards long)',
        '1 Gauze roll bandage (3 inches)',
        '1 CPR mask (with one-way valve)',
        '2 Pairs of non-latex gloves',
        '1 Thermometer (non-mercury/non-glass)',
        '1 Pair of scissors',
        '1 Pair of tweezers',
        'Personal medication',
      ]
    },
    large: {
      container: 'A large waterproof container with compartments',
      items: [
        'A first aid guide',
        '1 Antibiotic ointment',
        '10 Antiseptic cleansing wipes (sting free)',
        '4 Hydrocortisone packs (0.9g)',
        '1 Hand sanitizer',
        '30 Bandages of different sizes',
        '1 Instant cold compress',
        '2 Triangular bandages',
        '4 Trauma pads (5x9 inches)',
        '16 Gauze dressing pads (3x3 inches)',
        '8 Gauze dressing pads (4x4 inches)',
        '2 Absorbent compress dressings (5x9 inches)',
        '1 Roller bandages (4 inches wide)',
        '1 First aid tape roll (3/4 inches wide, 10 yards long)',
        '1 Adhesive cloth tape (1 inch wide, 10 yards long)',
        '1 Gauze roll bandage (3 inches)',
        '2 Packets of aspirin (81mg each)',
        '1 CPR mask (with one-way valve)',
        '2 Pairs of non-latex gloves',
        '1 Thermometer (non-mercury/non-glass)',
        '1 Pair of scissors',
        '1 Pair of tweezers',
        'Personal medication',
      ]
    },
  };

  const healthKit= ref([
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: true,
      title: 'Climate Preparedness',
      description: 'Our printable materials have handy information to help you familiarize yourself with climate change health risks. Print them as a reference and keep them with alongside the other climate preparedness items.',
      color: '#5AAAF1',
      content: [
        {
          title: 'Print and save these items',
          items: [
            'Climate change health primer',
            'Flashcards on extreme heat illnesses',
            'Flashcards on illnesses related to rain and flooding',
            'Flashcards on illnesses related to air pollution',
            'Stickers and labels for your climate care kit',
          ],
        },
        {
          title: 'Bring these items with you every day',
          items: [
            'Umbrella for rain and heat',
            'Water for hydration',
            'N95 or KN95 mask for air pollution',
          ],
        }
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: true,
      title: 'Basic Materials',
      description: 'Basic materials to include in every health kit according to the American Red Cross. Check your items every year to make sure they\'re well stocked. For more information, see our source.',
      color: '#48BEB5',
      content: [
        {
          title: 'Container',
          items: [
            sizeData[size].container,
          ]
        },
        {
          title: 'Items',
          items: sizeData[size].items,
        }
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: extremeHeat,
      title: 'Extreme Heat',
      description: 'Items to stay cool during the extreme heat. For more information, see our source.',
      color: '#D37834',
      content: [
        {
          title: 'Items',
          items: [
            'Water bottle or tumbler',
            'Umbrella',
            'Sunscreen with SPF of at least 30',
            'Cooling towels',
            'Sunglasses'
          ]
        },
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: rainAndFlooding,
      title: 'Rain and Flooding',
      description: 'Items to stay dry and safe during a rain or flood.',
      color: '#3382C8',
      content: [
        {
          title: 'Items',
          items: [
            'Umbrella',
            'Mosquito repellant',
            'Rain gear, like ponchos or rain boots',
            'Hand sanitizer',
          ]
        }
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: airPollution,
      title: 'Air Pollution',
      description: 'Items to protect yourself from air pollution.',
      color: '#907BD2',
      content: [
        {
          title: 'Items',
          items: [
            'A mask suited for air pollution, like an N95 or a KN95',
          ]
        }
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: hygiene,
      title: 'Hygiene Essentials',
      description: 'Items for grooming and oral care.',
      color: '#A592E0',
      content: [
        {
          title: 'Personal Items',
          items: [
            'Hand sanitizer',
            'Disinfectant wipes',
            'Deodorant',
            'Hand towels',
            'Toothbrush',
            'Toothpaste',
          ]
        }
      ]
    },
    {
      opened: false,
      icon: 'plus' as Icon,
      condition: menstrual,
      title: 'Menstrual Hygiene',
      description: 'Items to include in a period pack.',
      color: '#FFA691',
      content: [
        {
          title: 'Menstrual Items',
          items: [
            'Washcloth',
            'Soap',
            'Extra underwear',
            'Sanitary napkins or tampons',
            'Small cloth or plastic bag for soiled clothes',
          ]
        }
      ]
    },
  ]);

  const visibleHealthKit = computed(() => 
    healthKit.value.filter((item) => item.condition)
  );

  function toggle(index: number) {
    visibleHealthKit.value[index].opened = !visibleHealthKit.value[index].opened;
    visibleHealthKit.value[index].icon === 'plus' ? visibleHealthKit.value[index].icon = 'minus' : visibleHealthKit.value[index].icon = 'plus';
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
        <li class="w-214 mb-2" v-for="(item, index) in visibleHealthKit">
          <div class="w-full p-8 text-white cursor-pointer" :style="{backgroundColor: item.color}" @click="toggle(index)">
            <div class="flex justify-between">
              <div class="text-h3">{{ item.title }}</div>
              <i class="fa-solid fa-plus text-2xl" v-if="!visibleHealthKit[index].opened"></i>
              <i class="fa-solid fa-minus text-2xl" v-if="visibleHealthKit[index].opened"></i>
            </div>
            <div class="text-body text-left mt-2">{{ item.description }}</div>
          </div>
          <div class="max-h-0 overflow-hidden transition-all duration-500 border-1 border-[#E3E3E3]" :class="{'max-h-200': visibleHealthKit[index].opened}">
            <ul class="text-[#696969] text-left px-8 py-4">
              <template v-for="(content, contentIndex) in item.content">
                <li class="text-body3 mb-2">{{ content.title }}</li>
                <li v-for="(contentItem, contentItemIndex) in content.items">
                  <label :for="`item-${index}-${contentIndex}-${contentItemIndex}`" class="cursor-pointer flex text-body">
                    <input type="checkbox" :id="`item-${index}-${contentIndex}-${contentItemIndex}`" class="text-[#E3E3E3] border-[#E3E3E3] me-4 cursor-pointer">
                    <div>{{ contentItem }}</div>
                  </label>
                </li>
              </template>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>