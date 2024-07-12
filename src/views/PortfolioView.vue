<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-6">
          <h2 class="mb-3 text-left text-[22px] font-bold text-pink-600">My Colorful Vue.js SPA Portfolio</h2>
          <p class="text-left text-sm text-neutral-100">
            Welcome to my vibrant and clean portfolio website! Specializing in rapid UI/UX design and full-stack development, I emphasize simplicity and elegance. Using Figma for design and Tailwind CSS with Vue.js and TypeScript for frontend, I've crafted a mobile-first, responsive experience with cool animations. I'm overjoyed to have quickly completed this portfolio site within just a few days. Thank you for visiting! 🚀
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-6">
          <div>
            <h3 class="mb-3">Figma High-Fidelity Prototype Design</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/HSKVd2Lc1mk?si=UG1A3aMVNQ8tz7nq"
            />
          </div>
          <div>
            <h3 class="mb-3">Responsive Vue.js Front-End</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/R3vndoNxaqY?si=nw9x_QVkovg7J4OwM"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
