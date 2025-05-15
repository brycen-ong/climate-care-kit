<template>
  <section class="section relative bg-[url(/assets/images/home/home-bg-1.png)] bg-size-[100%_100%] text-center text-white">
    <div class="container">
      <div class="text-title mb-16">How does Climate Change affect my health?</div>
      <div class="text-h2 max-w-214">Climate change is a global health issue...</div>
      <div class="text-body max-w-214">but how does it really affect me? What are the dangers I am facing today, and how can I prepare for it now?</div>
      <div class="flex flex-col justify-center items-center absolute bottom-19">
        <div class="text-button mb-4">Scroll Down</div>
        <NuxtLink :to="{ hash: '#heat' }">
          <button class="button button-circle h-16 w-16">
            <SvgLoader :icon="'chevron-y'" class="w-5 h-5 animate"></SvgLoader>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-2.png)] bg-size-[100%_100%]" id="heat">
    <div class="container">
      <div class="flex justify-between gap-20">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-h1">Temperatures in the Philippines have become dangerous</div>
          <div class="text-body">Climate change is making extreme temperatures more frequent, and Metro Manila may one day become a hotspot for deadly heat. 
            While hot weather may seem normal in a tropical country, spending too much time in the heat, doing strenuous activities in hot places, 
            and not drinking enough water can lead to ilnesses like <span class="font-bold">heat stroke</span></div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-title">51°C</div>
          <div class="text-h2">Highest heat index recorded in the Philippines</div>
          <div class="text-label">as of May 2021, Philstar</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center absolute bottom-19">
        <NuxtLink :to="{ hash: '#rain' }">
          <button class="button button-circle h-16 w-16 bg-white border-2 border-secondary">
            <SvgLoader :icon="'chevron-y'" class="w-5 h-5 text-secondary animate"></SvgLoader>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-3.png)] bg-size-[100%_100%]" id="rain">
    <div class="container">
      <div class="flex justify-between gap-20">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-h1">Contaminated water is a host for disease</div>
          <div class="text-body">Climate change has muddied the lines between seasons, and the weather in the Philippines has become unpredictable. 
            Going outside unprepared can expose you to unexpected rain and flooding. 
            Flooded areas can be a breeding ground for bacteria and insects, and exposure to contaminated water can cause illnesses 
            like <span class="font-bold">leptospirosis</span> or <span class="font-bold">dengue</span></div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-title">195,603</div>
          <div class="text-h2">Dengue cases in the Philippines</div>
          <div class="text-label">as of December 2023, World Health Organization</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center absolute bottom-19">
        <NuxtLink :to="{ hash: '#pollution' }">
          <button class="button button-circle h-16 w-16 bg-white border-2 border-secondary">
            <SvgLoader :icon="'chevron-y'" class="w-5 h-5 text-secondary animate"></SvgLoader>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-4.png)] bg-size-[100%_100%]" id="pollution">
    <div class="container">
      <div class="flex justify-between gap-20">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-h1">Air pollution can cause heart and lung problems</div>
          <div class="text-body">Air pollution in Philippine cities, particularly Metro Manila, has gotten so bad that it's been mistaken for volcanic smog. 
            Inhaling smoke from vehicles and other air polluters can increase your risk for <span>cardiorespiratory diseases</span>, 
            and it may evenaffect your body's response to the effects of other viruses like COVID-19.</div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-title">7 million</div>
          <div class="text-h2">Deaths caused by air pollution each year</div>
          <div class="text-label">World Health Organization</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center absolute bottom-19 text-white">
        <div class="text-button mb-4">What Now?</div>
        <NuxtLink :to="{ hash: '#steps'}">
          <button class="button button-circle h-16 w-16">
            <SvgLoader :icon="'chevron-y'" class="w-5 h-5 animate"></SvgLoader>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section text-white bg-[url(/assets/images/home/home-bg-5.png)] bg-size-[100%_100%]" id="steps">
    <div class="container">
      <div class="text-title mb-16">What can I do now?</div>
      <div class="flex justify-between gap-4">
        <div class="flex flex-col items-center justify-center w-full p-8 bg-[#00A89B]/80 text-center rounded-2xl">
          <div class="text-h2 mb-4">Build your Climate Care Kit</div>
          <div class="text-body mb-8">Preparedness starts with you. One step you can take to protect your health is by including
            climate-ready items in your personal health kit. Take the first step by learning how to build your own climate care kit with us.
          </div>
          <NuxtLink :to="'/kit-builder'">
            <button class="button text-button w-70">
              Build my Kit
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center justify-center w-full p-8 bg-[#FF7255]/80 text-center rounded-2xl">
          <div class="text-h2 mb-4">Find your Climate Personality</div>
          <div class="text-body mb-8">Your lifestyle, daily routines, and beliefs all play a role in your risk for the effects of climate change. 
            Take our quiz to discover your unique climate personality and what it means for your health.
          </div>
          <NuxtLink :to="'/climate-personality'">
            <button class="button text-button w-70">
              Take the Quiz
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>