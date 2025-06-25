<script setup lang="ts">
  type Size = 'small' | 'medium' | 'large';

  const route = useRoute();
  const size: Size = route.query['size'] as Size;
  const extremeHeat = route.query['extreme-heat'] === 'true';
  const rainAndFlooding = route.query['rain-and-flooding'] === 'true';
  const airPollution = route.query['air-pollution'] === 'true';
  const hygiene = route.query['hygiene'] === 'true';
  const firstAid = route.query['first-aid'] === 'true';
</script>
<template>
  <section class="section">
    <div class="container text-center">
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
          <div class="bg-[#5AAAF1] w-full p-8">
            <div>Climate Preparedness</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>