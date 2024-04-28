<!--Credit: osorina (codepen), custom-cursor (custom-cursor-logo), Animista -->
<!-- Todo (future): fix cursor  -->
<!--Todo: Logo animation error, Intro, on hover logo typing efect, fix email icon-->

<script lang="ts" setup>
import StarDroppingBgAnimation from '@/components/StarDroppingBgAnimation.vue'
import TopArrow from '@/components/svg/TopArrow.vue'
import BottomArrow from '@/components/svg/BottomArrow.vue'
import SideNav from '@/components/SideNav.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'
import MobileNav from '@/components/MobileNav.vue'
</script>

<template>
  <div class="relative h-full w-full p-8 lg:h-[900px] lg:max-w-7xl lg:p-12">
    <!--Top arrow-->
    <div class="absolute left-0 top-0 m-2">
      <TopArrow />
    </div>

    <!--Main content-->
    <section class="flex h-full flex-col space-y-4 lg:m-auto lg:flex-row lg:space-y-0">
      <!--Logo-->
      <a
        v-typing-animation="'Arif'"
        class="text-left text-[34px] font-bold leading-[34px] tracking-[4px] text-neutral-100 lg:basis-[12%]"
        href="/"
        >A</a
      >

      <!--Mobile nav-->
      <MobileNav />

      <!--Project details text and video-->
      <!--  <RouterView :key="$route.fullPath" />-->
      <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-16">
        <div
          v-custom-scroll-bar
          class="h-full overflow-auto rounded-md"
          data-scrollbar-type="dynamic"
        >
          <div class="sliding-left-animation overflow-auto">
            <!--Text-->
            <div class="mb-4">
              <p class="mb-2 text-left text-[22px] font-bold text-pink-600">Form builder</p>
              <p class="text-left text-sm text-neutral-100">
                Embark on a virtual journey through a bustling cityscape, crafted entirely
                in-browser. Perfect for mastering 3D modeling techniques using Blender, with a focus
                on intricate details and realistic textures. Dive into the world of interactive web
                development with React Three Fiber, bringing your creations to life with dynamic
                animations and immersive experiences.
              </p>
            </div>

            <!--Video-->
            <section class="space-y-4">
              <div class="aspect-h-9 aspect-w-16">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full overflow-hidden rounded-lg"
                  frameborder="0"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
                  title="YouTube video player"
                >
                </iframe>
              </div>
              <div class="aspect-h-9 aspect-w-16">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full overflow-hidden rounded-lg"
                  frameborder="0"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
                  title="YouTube video player"
                >
                </iframe>
              </div>
              <div class="aspect-h-9 aspect-w-16">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full overflow-hidden rounded-lg"
                  frameborder="0"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
                  title="YouTube video player"
                >
                </iframe>
              </div>
              <div class="aspect-h-9 aspect-w-16">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full overflow-hidden rounded-lg"
                  frameborder="0"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
                  title="YouTube video player"
                >
                </iframe>
              </div>
              <div class="aspect-h-9 aspect-w-16">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full overflow-hidden rounded-lg"
                  frameborder="0"
                  referrerpolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
                  title="YouTube video player"
                >
                </iframe>
              </div>
            </section>
          </div>
        </div>
      </section>

      <!--Desktop Nav-->
      <SideNav class="basis-[12%]" />

      <!--Icon for mobile-->
      <div class="justify-self-start lg:hidden">
        <SocialMediaIcons />
      </div>
    </section>

    <!--Icon for dektop-->
    <div class="hidden justify-self-start lg:block">
      <SocialMediaIcons />
    </div>

    <!--Bottom arrow-->
    <div class="absolute bottom-0 right-0 m-2">
      <BottomArrow />
    </div>
  </div>
</template>

<style scoped></style>
