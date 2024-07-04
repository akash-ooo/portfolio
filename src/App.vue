<script lang="ts" setup>
import TopArrow from '@/components/svg/TopArrow.vue'
import BottomArrow from '@/components/svg/BottomArrow.vue'
import SideNav from '@/components/SideNav.vue'
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'
import MobileNav from '@/components/MobileNav.vue'
import NameLogo from '@/components/NameLogo.vue'
</script>

<template>
  <!--Take full display & make wraper center in lg-->
  <div class="h-full w-full lg:flex lg:items-center lg:justify-center">
    <!--Content wrapper -->
    <div class="relative h-full w-full p-[36px] lg:h-[700px] lg:max-w-7xl lg:p-[48px]">
      <!--Top arrow-->
      <div class="absolute left-0 top-0 m-2">
        <TopArrow />
      </div>

      <!--Main portfolio contents-->
      <section
        class="z-1 relative flex h-full flex-col space-y-2 lg:m-auto lg:flex-row lg:space-y-0"
      >
        <!--Logo-->
        <NameLogo />

        <!--Mobile nav show on small device only-->
        <MobileNav />

        <!--Project details text and video-->
        <!--Use the 'key' directive to ensure smooth transitions on every route change, as the Route View component gets fully destroyed, causing a sliding animation each time-->
        <RouterView :key="$route.fullPath" />

        <!--Desktop nav show on lg device only-->
        <SideNav class="basis-[20%]" />

        <!--Socail icons for mobile-->
        <div class="justify-self-start lg:hidden">
          <SocialMediaIcons />
        </div>
      </section>

      <!--Social icons for dektop-->
      <div class="absolute bottom-[48px] left-[48px] hidden justify-self-start lg:block">
        <SocialMediaIcons />
      </div>

      <!--Bottom arrow-->
      <div class="absolute bottom-0 right-0 m-2">
        <BottomArrow />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
