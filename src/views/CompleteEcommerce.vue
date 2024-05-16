<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-4">
          <h2 class="mb-4 text-left text-[22px] font-bold text-pink-600">
            City Stanja Complete E-commerce Website & Android App
          </h2>
          <p class="mb-2">
            Tech Stack: Photoshop, HTML, CSS, RWD, JavaScript, jQuery, PHP, MySQL, SEO, and DevOps.
          </p>
          <p class="text-left text-sm text-neutral-100">
            In this
            <a class="link" href="https://citystanja.com/" target="_blank">www.citystanja.com</a>
            e-commerce project, I handled UI/UX design, full-stack development, comprehensive
            testing, efficient deployment, and marketing strategy. As a UI/UX designer, I revamped
            websites using Photoshop, focusing on brand consistency and mobile responsiveness. I
            also optimized on-page SEO and streamlined cart and checkout processes. In full-stack
            development, I managed MySQL databases, secured against SQL injection, and optimized
            website performance. Additionally, I led digital marketing initiatives, including
            multilevel affiliate programs and Facebook-centric viral marketing
            Pay-Per-Facebook-Share model. Overall, I played a key role in boosting the startup's
            prominence in the Bangladesh e-commerce clothing market, achieving 150,000 customers and
            significant revenue growth.
          </p>
        </div>

        <!--Videos-->
        <section>
          <div class="mb-4">
            <h3 class="mb-3">Customer section</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/IprckT524MM?si=mnGOFnPlaLbkfI6L"
            />
          </div>

          <div class="mb-4">
            <h3 class="mb-3">
              Multi level affiliate system and Pay-Per-Facebook-Share affiliate model
            </h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/HOyzCLF7ICQ?si=5J0RsEmkmoMJ8fof"
            />
          </div>

          <div class="mb-4">
            <h3 class="mb-3">Coupon system</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/Ru-GMwrcfI0?si=9ERXZhye1edFmWL4"
            />
          </div>

          <div>
            <h3 class="mb-3">Admin section</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/vAUSkbBSNgc?si=lDT5Ob52RIUZILSp"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
