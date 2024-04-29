<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div
      v-custom-scroll-bar
      class="h-full overflow-auto rounded-md"
      data-scrollbar-type="dynamic"
    >
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-4">
          <h2 class="mb-2 text-left text-[22px] font-bold text-pink-600">Form builder</h2>
          <p class="text-left text-sm text-neutral-100">
            Embark on a virtual journey through a bustling cityscape, crafted entirely
            in-browser. Perfect for mastering 3D modeling techniques using Blender, with a
            focus on intricate details and realistic textures. Dive into the world of
            interactive web development with React Three Fiber, bringing your creations to
            life with dynamic animations and immersive experiences.
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-4">
          <ResponsiveYoutubeIframe url="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew" />
          <ResponsiveYoutubeIframe url="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew" />
          <ResponsiveYoutubeIframe url="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew" />
          <ResponsiveYoutubeIframe url="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew" />
          <ResponsiveYoutubeIframe url="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew" />
        </section>
      </div>
    </div>
  </section>
</template>
