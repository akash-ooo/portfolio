<!-- TODO Mobile, Route  -->
<!--Credit: osorina (codepen), custom-cursor (custom-cursor-logo), Animista -->
<!-- Todo (future): fix cursor  -->

<script lang="ts" setup>
import StarDroppingBgAnimation from '@/components/StarDroppingBgAnimation.vue'
import TopArrow from '@/components/svg/TopArrow.vue'
import BottomArrow from '@/components/svg/BottomArrow.vue'
import SideNav from '@/components/SideNav.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'
</script>

<template>
  <div class="relative flex h-screen w-full">
    <StarDroppingBgAnimation />
    <div class="relative m-auto mx-2 max-w-7xl p-4 lg:mx-0 lg:p-8">
      <!--Top arrow-->
      <div class="absolute left-0 top-0">
        <TopArrow />
      </div>

      <!--Content-->
      <div
        class="grid grid-cols-[24px_1fr_24px] grid-rows-[90vh] lg:grid-cols-[12%_1fr_12%] lg:grid-rows-[750px]"
      >
        <!--Logo & social media icons-->
        <div class="flex flex-col justify-between">
          <!--Logo-->
          <div class="logo-animation invisible lg:block">
            <a
              v-typing-animation="'Arif'"
              class="line-animation text-left text-[34px] font-bold tracking-[4px] text-neutral-100"
              href="/"
              >A</a
            >
          </div>
          <!--Icon-->
          <SocialMediaIcons />
        </div>

        <!--Project details-->
        <div
          v-custom-scroll-bar
          class="content-animation my-8 overflow-auto lg:my-16"
          data-scrollbar-type="dynamic"
        >
          <!--Text content-->
          <div class="mb-6">
            <p class="mb-2 text-left text-[22px] font-bold text-pink-600">Form builder</p>
            <p class="text-left text-sm text-neutral-100">
              Embark on a virtual journey through a bustling cityscape, crafted entirely in-browser.
              Perfect for mastering 3D modeling techniques using Blender, with a focus on intricate
              details and realistic textures. Dive into the world of interactive web development
              with React Three Fiber, bringing your creations to life with dynamic animations and
              immersive experiences.
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
          </section>
        </div>

        <!--Project list nav-->
        <SideNav />
      </div>

      <!--Bottom arrow-->
      <div class="absolute bottom-0 right-0">
        <BottomArrow />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Logo animation*/
.logo-animation :first-child {
  padding: 0 5px;
  transition: all 0.4s ease-in-out 0s;
  box-shadow: inset 0 0 0 0 #db2777;
}
.logo-animation > :first-child:hover {
  color: white;
  box-shadow: inset 300px 0 0 0 #db2777;
}

/*Content animation*/
@keyframes blazy_pb8k01 {
  0% {
    clip-path: inset(0% 0% 0% 100%);
  }

  100% {
    clip-path: inset(0% 0% 0% 0%);
  }
}
.content-animation {
  animation-name: blazy_pb8k01;
  animation-duration: 999ms;
  animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
  animation-delay: 1ms;

  /* Element properties */
  animation-iteration-count: 1;
  animation-direction: normal;

  clip-path: inset(0% 0% 0% 100%);
  animation-fill-mode: forwards;
}

@keyframes blazy_7cnpng {
  0% {
    clip-path: circle(0% at center);
  }

  100% {
    clip-path: circle(100% at center);
  }
}
.content-animation-2 {
  animation-name: blazy_7cnpng;
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  clip-path: circle(0% at center);
  animation-fill-mode: forwards;
}
</style>
