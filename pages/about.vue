<script setup lang="ts">
  const sourcesOpened = ref(false);
  
  function toggle() {
    sourcesOpened.value = !sourcesOpened.value;
    console.log('toggle');
    console.log(sourcesOpened.value);
  }
</script>
<template>
  <section class="section bg-[url(/assets/images/about/about-bg-1.webp)] bg-size-[100%_100%]">
    <div class="container items-start">
      <div class="text-h1 max-w-165">Climate change affects more than the environment...</div>
      <div class="text-body mt-8 max-w-139">In the Philippines, common depictions of climate change include natural disasters in far-off communities. While these disasters are devastating, we may forget that it also affects our day-to-day health as well.</div>
      <div class="text-body mt-8 max-w-139">Climate change is an issue of public health. As early as now, we need to start preparing for the situations that will arise because of the changing climate.</div>
      <div class="bg-white mt-8 rounded-2xl w-139 p-4">
        <div class="text-label italic">Note: Climate Care Kit is a student-researched project, and is not intended to be taken as professional medical advice. Always consult your healthcare providers for any concerns about your health.</div>
        <div class="text-label italic mt-5">Does any of the information seem inaccurate to you? Is there anything you think we should know? Email us at <a href="mailto:climatecarekit@gmail.com" class="text-primary">climatecarekit@gmail.com</a></div>
      </div>
    </div>
  </section>
  <section class="section bg-[url(/assets/images/about/about-bg-2.webp)] bg-size-[100%_100%] text-center text-white">
    <div class="container">
      <div class="text-h1 mb-3">What does climate change mean for...</div>
      <div class="grid grid-cols-3 gap-37">
        <div class="flex flex-col items-center justify-center">
          <img src="/assets/images/about/about-city-icon.webp" class="h-40 mb-10"></img>
          <div class="text-h2 mb-6">City Dwellers</div>
          <div class="text-body">While sturdy city infrastructure may be more resistant to disasters like typhoons, cities are more susceptible to the effects of heat and air pollution</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/assets/images/about/about-young-people-icon.webp" class="h-40 mb-10"></img>
          <div class="text-h2 mb-6">Young Adults</div>
          <div class="text-body">Age is only one of the factors that contribute to your health risk. For young adults, your day-to-day behaviors, activities, and level of preparedness can all lead to unintentional illness or death from these risks.</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/assets/images/about/about-health-system-icon.webp" class="h-40 mb-10"></img>
          <div class="text-h2 mb-6">Our Health Systems</div>
          <div class="text-body">Based on what we've seen from the COVID-19 pandemic, our health systems can easily be overwhelmed. The Philippines needs to eventually adapt to the climate crisis, but we can protect ourselves in the meantime.</div>
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-[url(/assets/images/about/about-bg-3.webp)] bg-size-[100%_100%]">
    <div class="container">
      <div class="grid grid-cols-2">
        <div class="col-start-2 flex flex-col items-start">
          <div class="text-h1">Introducing Climate Care Kit</div>
          <div class="text-body max-w-139 mb-14">Climate Care Kit is a student project that aims to motivate young adults in Metro Manila to prepare for climate change related health risks. While the website is geared towards a younger audience, people of all changes should start preparing for climate change.</div>
          <div class="text-h2 mb-2">Why a kit?</div>
          <div class="text-body max-w-139">Preparedness starts with you. While health systems in the Philippines still need policies and programs to adapt to climate change, you can always take the first step by putting your health in your hands.</div>
          <div class="text-body max-w-139 mt-8">Many of us use health kits to prepare for general health emergencies. Adding climate change health risks to this practice is an easy way to begin preparing for it.</div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="grid grid-cols-2">
        <div class="flex flex-col items-start max-w-110 justify-center">
          <div class="text-h2">About the designer</div>
          <div class="text-body mb-9 text-[#696969]">Casey del Rosario is a gradute of Information Design from Ateneo de Manila University. She believes in using exciting design to help make the world a better place.</div>
          <div class="text-h3 mb-3">Get in touch!</div>
          <a class="text-body text-[#696969] hover:text-primary" target="_blank" href="mailto:caseydelr@gmail.com">caseydelr@gmail.com</a>
          <a class="text-body text-[#696969] hover:text-primary" target="_blank" href="https://caseysvg.carrd.co/">caseysvg.carrd.co</a>
          <a class="text-body text-[#696969] hover:text-primary" target="_blank" href="https://www.linkedin.com/in/caseydelr">Linkedin</a>
        </div>
        <img src="/assets/images/about/about-designer-casey.webp"></img>
      </div>
    </div>
  </section>
  <section class="w-[100%] py-37 flex flex-col justify-center items-center">
    <div class="container">
      <div class="text-h1">Our Sources</div>
      <div class="text-body text-[#696969]">The content used in this project is based on readily available sources.</div>
      <div class="w-full p-8 text-white cursor-pointer bg-primary mt-8" @click="toggle">
        <div class="grid grid-cols-3">
          <div class="col-start-2 flex flex-col items-center justify-center text-h3">Sources</div>
          <div class="col-start-3 flex flex-col items-end justify-center">
            <SvgLoader
              icon="chevron-y"
              class="h-6 w-6 transition-all duration-500"
              :class="{'rotate-180': sourcesOpened}"
            ></SvgLoader>
          </div>
        </div>
      </div>
      <div class="max-h-0 w-full overflow-hidden transition-all duration-500 border-1 border-[#E3E3E3]" :class="{'max-h-500': sourcesOpened}">
        <div class="flex flex-col">
          <a class="text-body text-[#696969] hover:text-primary ms-4 mt-4" target="_blank" href="https://www.nrdc.org/stories/air-pollution-everything-you-need-know#whatis">Air Pollution: Everything You Need to Know, NRDC</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.iqair.com/philippines/ncr/manila">Air Quality in manila, IQAir</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://scied.ucar.edu/learning-zone/air-quality/air-quality-and-climate-change">Air Quality and Climate Change, UCAR Center for Science Education</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/teams/environment-climate-change-and-health/air-quality-energy-and-health/sectoral-interventions/ambient-air-pollution/health-risks#:~:text=4.2%20million%20people%20die%20prematurely,and%206%25%20to%20lung%20cancer.">Air Quality, Energy, and Health, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://aafa.org/asthma/asthma-triggers-causes/air-pollution-smog-asthma/#:~:text=Other%20forms%20of%20air%20pollution,from%20breathing%20in%20small%20particles.">Asthma, Asthma and Allergy Foundation of America</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/news-room/fact-sheets/detail/asthma/">Asthma, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.mayoclinic.org/diseases-conditions/asthma-attack/symptoms-causes/syc-20354268">Asthma Attack, Mayo Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.uclahealth.org/news/article/can-you-get-sick-floodwater#:~:text=Skin%20rash%3A%20Direct%20contact%20with,a%20severe%20nervous%20system%20disease.">Can You Get Sick from Floodwater?, UCLA Health</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.cdc.gov/cholera/signs-symptoms/?CDC_AAref_Val=https://www.cdc.gov/cholera/illness.html">Cholera, CDC</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/news-room/fact-sheets/detail/cholera">Cholera, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/8709-chronic-obstructive-pulmonary-disease-copd">Chronic Obstructive Pulmonary Disease (COPD), Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)">Chronic Obstructive Pulmonary Disease, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10880509/#:~:text=Typhi%20is%20primarily%20transmitted%20through,et%20al.%2C%202018).">Climate Change Affects the Spread of Typhoid Pathogens, Jia et al.</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/4108-diarrhea">Diarrhea, Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.healthline.com/health/heat-stroke-vs-heat-exhaustion#:~:text=Learn%20the%20Signs&text=Heat%20exhaustion%20occurs%20when%20your,to%20control%20its%20internal%20temperature">Do You Have Heat Stroke or Heat Exhaustion? Healthline</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://newsinfo.inquirer.net/1752307/doh-records-118-cases-of-heat-exhaustion-in-march">DOH Records 118 Cases of Heat Exhaustion, Inquirer</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/westernpacific/wpro-emergencies/surveillance/dengue">Dengue Situation Update, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://fire-flood-restoration.com/news/drying-out-after-a-flood">Drying Out After a Flood, Rainbow Restoration</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://climate.mit.edu/explainers/extreme-heat">Extreme Heat, Climate Portal, MIT</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.medicoverhospitals.in/articles/foods-to-avoid-in-rainy-season#:~:text=Street%20Food%20and%20Fried%20Snacks&text=Street%20food%20vendors%20may%20not,food%20poisoning%20and%20gastrointestinal%20infections.">Foods to Avoid in Rainy Season, Medicover Hospitals</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.linkedin.com/pulse/health-risks-living-exercising-near-highways-dhanendiren-narayanasamy-xpync/">Health Risks of Living or Exercising Near Highways, Narayanasamy</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/24866-heat-cramps">Heat Cramps, Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.webmd.com/fitness-exercise/heat-cramps">Heat Cramps, WebMD</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.healthdirect.gov.au/heat-rash">Heat Rash, Healthdirect</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/21480-heat-exhaustion">Heat Exhaustion, Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://koreystringer.institute.uconn.edu/heat-syncope/">Heat Syncope, Korey Stringer Institute</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.webmd.com/a-to-z-guides/heat-stroke-symptoms-and-treatment#1-1">Heatstroke, Symptoms and Treatment, WebMD</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/21812-heatstroke">Heatstroke, Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.ajhospital.in/news/heatwave-survival-kit-must-have-items-for-staying-safe-in-extreme-heat">Heat Survival Kit, A.J. Hospital & Research Centre</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/publications/i/item/WHO-FWC-PHE-EPE-15.14">Heat and Climate Change, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://rmc.doh.gov.ph/patientscorner/health-corner/97-heat-stroke">Heat Stroke, Rizal Medical Center, Department of Health</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health">Household Air Pollution, WHO</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.unep.org/news-and-stories/story/how-climate-change-making-record-breaking-floods-new-normal">How Climate Change is Making Record-Breaking Floods, UN Environment Programme</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.cdc.gov/winter-weather/prevention/?CDC_AAref_Val=https://www.cdc.gov/disasters/winter/staysafe/hypothermia.html">Hypothermia, CDC</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.ncbi.nlm.nih.gov/books/NBK209964/#:~:text=DESCRIPTION,getting%20enough%20blood%20and%20oxygen.">Ischemic Heart Disease, NCBI</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.victorchang.edu.au/heart-disease/ischaemic-heart-disease">Ischemic Heart Disease, Victor Chang Cardiac Research Institute</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.bradfordairandheating.com/blog/2022/april/is-it-safe-to-run-your-air-conditioner-when-outs/#:~:text=As%20you%20can%20see%2C%20it's,poor%20air%20from%20the%20outdoors.">Is it Safe to Run Your Air Conditioner, Bradford Air & Heating</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://climate-adapt.eea.europa.eu/en/observatory/evidence/health-effects/water-and-food-borne-diseases/leptospirosis-factsheet#:~:text=Climate%20Change%20Impact&text=Projected%20changes%20are%20expected%20to,frequency%20of%20extreme%20weather%20events">Leptospirosis, Climate Adapt</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.cdc.gov/leptospirosis/about/?CDC_AAref_Val=https://www.cdc.gov/leptospirosis/symptoms/index.html">Leptospirosis, CDC</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.webmd.com/a-to-z-guides/what-is-leptospirosis">Leptospirosis, WebMD</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html">Make a First Aid Kit, American Red Cross</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://support.wwf.org.ph/resource-center/story-archives-2020/philippine-cities-on-the-road-to-sustainability/">Philippine Cities on the Road to Sustainability, WWF</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.lung.org/blog/poor-air-quality-protection">Protecting Yourself from Poor Air Quality, American Lung Association</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://my.clevelandclinic.org/health/diseases/4471-pneumonia">Pneumonia, Cleveland Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204#:~:text=Pneumonia%20is%20an%20infection%20that,and%20fungi%2C%20can%20cause%20pneumonia.">Pneumonia, Mayo Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.philstar.com/nation/2021/05/10/2097066/philippines-records-51-degrees-celsius-heat-index-pangasinan">Philippines Records 51 Degrees Celcius, Philstar</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.pna.gov.ph/articles/1205373">Public Warned VS. Water, Vector-Borne Diseases, Republic of the Philippines Philippine News Agency</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.cdc.gov/niosh/rhabdo/about/?CDC_AAref_Val=https://www.cdc.gov/niosh/topics/rhabdo/default.html">Rhabdomyolysis, CDC</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.kitpropertiesinc.com/blog/2019/6/19/safety-tips-for-the-rainy-season">Safety Tips for the Rainy Season, Kit Properties</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://mb.com.ph/2023/9/22/smog-in-metro-manila-due-to-heavy-traffic-thermal-inversion-not-taal-denr">Smog in Metro Manila, Manila Bulletin</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113#:~:text=An%20ischemic%20stroke%20occurs%20when,stroke%20is%20a%20hemorrhagic%20stroke.">Stroke, Mayo Clinic</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.rockefellerfoundation.org/perspective/the-increasing-burden-of-dengue-fever-in-a-changing-climate/#:~:text=Warmer%20temperatures%20enhance%20dengue%20virus,higher%20elevations%20and%20latitudes.">The Increasing Burden of Dengue Fever, The Rockefeller Foundation</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.pchrd.dost.gov.ph/news_and_updates/the-risks-of-flooding-protect-yourself-from-floodwater-diseases/">The Risks of Flooding, Republic of the Philippines, DOST, Philippine Council for Health Research and Development</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.betterhealth.vic.gov.au/using-air-conditioners-when-its-smoky-outside">Using Air Conditioners When It's Smoky Outside, BetterHealth Channel</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.dir.ca.gov/dosh/etools/08-006/whatis.htm#:~:text=Heat%20illness%20can%20be%20one,%2C%20heat%20exhaustion%2C%20and%20heatstroke">What is Heat Illness?, State of California, Department of Industrial Relations</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://time.com/6186988/extreme-heat-human-body-impact/">What Extreme Heat Does, Time</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://pharmeasy.in/story/best-ways-to-prevent-dengue-fever">Best Ways to Avoid Dengue Fever, Pharmeasy</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4" target="_blank" href="https://www.lung.org/clean-air/outdoors/10-tips-to-protect-yourself">10 Tips to Protect Yourself from Unhealthy Air, American Lung Association</a>
          <a class="text-body text-[#696969] hover:text-primary ms-4 mb-4" target="_blank" href="https://www.metropolisindia.com/blog/preventive-healthcare/air-pollution-diseases-you-need-to-be-aware-of">10 Air Pollution Diseases, Metropolis: The Pathology Specialist</a>
      </div>

      </div>
    </div>
  </section>
</template>