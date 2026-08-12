<template>
  <section class="section relative bg-[url(/assets/images/home/home-bg-1.webp)] text-center text-white lg:bg-size-[100%_100%]">
    <div class="container flex-1 justify-between">
      <div class="h-[143px] lg:h-[175px] invisible"></div>
      <div class="flex flex-col items-center">
        <div class="text-7xl mb-8 font-medium lg:text-title lg:mb-16">How does Climate Change affect my health?</div>
        <div class="text-2xl mb-4 font-bold lg:text-h2 max-w-214 lg:mb-0">Climate change is a global health issue...</div>
        <div class="text-body max-w-214">but how does it really affect me? What are the dangers I am facing today, and how can I prepare for it now?</div>
      </div>
      <div class="flex flex-col justify-center items-center mb-8 lg:mb-16">
        <div class="text-button mb-4">Scroll Down</div>
        <NuxtLink :to="{ hash: '#heat' }">
          <button class="button button-circle h-16 w-16">
            <i class="fa-solid fa-chevron-down animate text-xl"></i>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-2.webp)] bg-position-[-24px] bg-size-[auto_100%] lg:bg-position-[0px] lg:bg-size-[100%_100%]" id="heat">
    <div class="container flex-1 justify-between">
      <div class="h-24 lg:h-32 invisible"></div>
      <div class="flex flex-col justify-between gap-10 lg:gap-20 lg:flex-row">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-5xl font-medium mb-4 lg:text-h1 lg:mb-0">Temperatures in the Philippines have become dangerous</div>
          <div class="text-lg lg:text-body">Climate change is making extreme temperatures more frequent, and Metro Manila may one day become a hotspot for deadly heat. 
            While hot weather may seem normal in a tropical country, spending too much time in the heat, doing strenuous activities in hot places, 
            and not drinking enough water can lead to ilnesses like <span class="font-bold">heat stroke</span></div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-7xl font-medium lg:text-title">51°C</div>
          <div class="text-lg font-bold lg:text-h2">Highest heat index recorded in the Philippines</div>
          <div class="text-label">as of May 2021, Philstar</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mb-8 lg:mb-16">
        <NuxtLink :to="{ hash: '#rain' }">
          <button class="button button-circle h-16 w-16 bg-white border-2 border-secondary">
            <i class="fa-solid fa-chevron-down animate text-secondary text-xl"></i>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-3.webp)] bg-position-[-29px] bg-size-[auto_100%] lg:bg-position-[-5px] lg:bg-size-[100%_100%]" id="rain">
    <div class="container flex-1 justify-between">
      <div class="h-12 lg:h-32 invisible"></div>
      <div class="flex flex-col justify-between gap-10 lg:gap-20 lg:flex-row">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-5xl font-medium mb-4 lg:text-h1 lg:mb-0">Contaminated water is a host for disease</div>
          <div class="text-lg lg:text-body">Climate change has muddied the lines between seasons, and the weather in the Philippines has become unpredictable. 
            Going outside unprepared can expose you to unexpected rain and flooding. 
            Flooded areas can be a breeding ground for bacteria and insects, and exposure to contaminated water can cause illnesses 
            like <span class="font-bold">leptospirosis</span> or <span class="font-bold">dengue</span></div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-7xl font-medium lg:text-title">195,603</div>
          <div class="text-lg font-bold lg:text-h2">Dengue cases in the Philippines</div>
          <div class="text-label">as of December 2023, World Health Organization</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mb-8 lg:mb-16">
        <NuxtLink :to="{ hash: '#pollution' }">
          <button class="button button-circle h-16 w-16 bg-white border-2 border-secondary">
            <i class="fa-solid fa-chevron-down animate text-xl text-secondary"></i>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section relative bg-[url(/assets/images/home/home-bg-4.webp)] bg-position-[-24px] bg-size-[auto_100%] lg:bg-size-[100%_100%]" id="pollution">
    <div class="container flex-1 justify-between">
      <div class="h-[143px] lg:h-[175px] invisible"></div>
      <div class="flex flex-col justify-between gap-10 lg:gap-20 lg:flex-row">
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-5xl font-medium mb-4 lg:text-h1 lg:mb-0">Air pollution can cause heart and lung problems</div>
          <div class="text-lg lg:text-body">Air pollution in Philippine cities, particularly Metro Manila, has gotten so bad that it's been mistaken for volcanic smog. 
            Inhaling smoke from vehicles and other air polluters can increase your risk for <span>cardiorespiratory diseases</span>, 
            and it may evenaffect your body's response to the effects of other viruses like COVID-19.</div>
        </div>
        <div class="w-full flex flex-col item-center justify-center">
          <div class="text-7xl font-medium lg:text-title">7 million</div>
          <div class="text-lg font-bold lg:text-h2">Deaths caused by air pollution each year</div>
          <div class="text-label">World Health Organization</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mb-16 text-white">
        <div class="text-button mb-4">What Now?</div>
        <NuxtLink :to="{ hash: '#steps'}">
          <button class="button button-circle h-16 w-16">
            <i class="fa-solid fa-chevron-down animate text-xl"></i>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section text-white bg-[url(/assets/images/home/home-bg-5.webp)] bg-position-[-24px] bg-size-[auto_100%] lg:bg-size-[100%_100%]" id="steps">
    <div class="container flex-1 justify-center">
      <div class="text-4xl mb-8 font-medium lg:text-title lg:mb-16">What can I do now?</div>
      <div class="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div class="flex flex-col items-center justify-center w-full py-8 px-6 bg-[#00A89B]/80 text-center rounded-2xl lg:p-8">
          <div class="text-2xl font-bold mb-4 lg:text-h2">Build your Climate Care Kit</div>
          <div class="text-md mb-8 lg:text-body">Preparedness starts with you. One step you can take to protect your health is by including
            climate-ready items in your personal health kit. Take the first step by learning how to build your own climate care kit with us.
          </div>
          <NuxtLink :to="'/kit-builder'">
            <button class="button text-button w-70">
              Build my Kit
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center justify-center w-full py-8 px-6 bg-[#FF7255]/80 text-center rounded-2xl lg:p-8">
          <div class="text-2xl font-bold mb-4 lg:text-h2">Find your Climate Personality</div>
          <div class="text-md mb-8 lg:text-body">Your lifestyle, daily routines, and beliefs all play a role in your risk for the effects of climate change. 
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