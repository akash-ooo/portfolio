<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-6">
          <h2 class="mb-3 text-left text-[22px] font-bold text-pink-600">
            Police CDR crime data analyzer UI/UX design, web app, hybrid desktop & mobile software
          </h2>
          <p class="mb-2 text-left text-sm text-neutral-100">
            I managed this entire project individually for the X Detective Branch Police (DB) team.
            Developed a versatile full-stack web app, hybrid desktop, and mobile software. Created a
            modern crime data analysis system to automate tasks previously handled in Excel.
            Developed an automated system to generate summaries of suspect communications and
            relationships using call, SMS, location, and IMEI data. Implemented an advanced suspect detection system using multiple CDR cross-matching, device switching, night stay patterns, and advanced CDR data filtering techniques. Currently, I am enhancing the UI/UX design and integrating new software
            features.
          </p>
          <p class="mb-2 font-semibold">
            These efforts collectively reduced crime data analysis time by approximately 80%,
            facilitating quicker insights.
          </p>
          <p>
            Tech stack: Figma, Laravel PHP, SQLite, JavaScript, Vue.js, Quasar cross-platform framework, Capacitor JS, and
            Electron.
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-6">
          <div>
            <h3 class="mb-3">Hybrid desktop software</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/kaxbAqYLUXI?si=81S-b_A1KmQY0CRM"
            />
          </div>

          <div>
            <h3 class="mb-3">Updated Figma high-fidelity interactive designs for desktop and mobile apps</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/H1UuGM53gM8?si=KfFhke9ItXLpeyRX"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
