<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <!--TODO: Add last updated or copyright date (ask AI)-->
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-6">
          <h2 class="mb-3 text-left text-[22px] font-bold text-pink-600">
            City Stanja complete e-commerce UI/UX design, full-stack development & mobile app
          </h2>
          <p class="mb-2 text-left text-sm text-neutral-100">
            In this
            <a class="link" href="https://citystanja.com/" target="_blank">City Stanja ↗</a>
            e-commerce project, I handled UI/UX design, full-stack development, comprehensive
            testing, efficient deployment, and marketing strategy. As a UI/UX designer, I revamped
            websites using Photoshop, focusing on brand consistency and mobile responsiveness. I
            also optimized on-page SEO and streamlined cart and checkout processes. In full-stack
            development, I managed MySQL databases, secured against SQL injection, and optimized
            website performance. Additionally, I led digital marketing initiatives, including
            multilevel affiliate programs and Facebook-centric viral marketing
            Pay-Per-Facebook-Share model.
          </p>
          <p class="mb-2 font-semibold">
            I boosted our online business in the Bangladesh e-commerce clothing market, reaching
            150,000 customers and earning 5 million BDT in revenue last year.
          </p>
          <p>
            Tech stack: Photoshop, HTML, CSS, RWD, JavaScript, jQuery, PHP, MySQL, SEO, DevOps, and WebView app.
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-6">
          <div>
            <h3 class="mb-3">Customer section</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/bXk35qH8UKs?si=qK5XotXcTN23ijJJ"
            />
          </div>

          <div>
            <h3 class="mb-3">Pay-Per-Facebook-Share marketing and multi level affiliate system</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/HOyzCLF7ICQ?si=5J0RsEmkmoMJ8fof"
            />
          </div>

          <div>
            <h3 class="mb-3">Admin section</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/vAUSkbBSNgc?si=lDT5Ob52RIUZILSp"
            />
          </div>

          <div>
            <h3 class="mb-3">Coupon system</h3>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/Ru-GMwrcfI0?si=9ERXZhye1edFmWL4"
            />
          </div>

          <!--  Image -->
          <div>
            <h3 class="mb-3">WebView app</h3>
              <img
                alt="App screenshot"
                class="h-full w-full overflow-hidden rounded-lg"
                src="/src/assets/images/stanja-app.jpg"
              />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
