<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-6">
          <h2 class="mb-3 text-left text-[22px] font-bold text-pink-600">Virtual game room UI/UX design & full-stack app</h2>
          <p class="text-left text-sm text-neutral-100">
            I independently spearheaded the development of this virtual game room platform where
            players of PUBG and Valorant-type games can join tournaments and engage in competitive
            gaming. I optimized the UI/UX in Adobe XD, creating a high-fidelity prototype, and
            implemented a mobile-first frontend using HTML, CSS, and JavaScript. Backend
            functionalities, powered by Laravel PHP and MySQL, and managed through DevOps practices,
            include a dynamic admin panel for seamless operation. This project integrates
            virtual rooms, multiplayer gaming, tournament management, live streaming, and delivers a responsive,
            SEO-optimized experience across devices. Please note, the project video is not final.
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-6">
          <div>
            <h3 class="mb-3">XD high-fidelity interactive design</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/bDqu0KY5y18?si=T8_U09RgkWvUIZRM"
            />
          </div>

          <div>
            <h3 class="mb-3">Responsive front-end</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/Pv76rQNkxQ8?si=nHb-mkFVcMsL7VTX"
            />
          </div>

          <div>
            <h3 class="mb-3">Full-stack admin panel</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/XQQ7hD3mcxc?si=UCp2y2e73FTikbRW"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
