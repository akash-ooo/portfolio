<script lang="ts" setup>
import ResponsiveYoutubeIframe from '@/components/ResponsiveYoutubeIframe.vue'
</script>

<template>
  <section class="h-full grow overflow-auto lg:basis-full lg:px-6 lg:py-12">
    <div v-custom-scroll-bar class="h-full overflow-auto rounded-md" data-scrollbar-type="dynamic">
      <div class="sliding-left-animation overflow-auto">
        <!--Text-->
        <div class="mb-6">
          <h2 class="mb-3 text-left text-[22px] font-bold text-pink-600">Other projects</h2>
          <p class="mb-2 text-left text-sm text-neutral-100">
            During my free time, I passionately explore a diverse range of technologies and
            frameworks. Here, I present a collection of my experimental projects alongside small
            client projects.
          </p>
          <p class="font-semibold text-pink-600">
            Please note that some of my client projects are covered by non-disclosure agreements
            (NDAs), preventing me from sharing details publicly. If you're interested in seeing more
            of my high-value projects, please feel free to reach out via email, and I'll be happy to
            discuss further.
          </p>
        </div>

        <!--Videos-->
        <section class="space-y-6">
          <div>
            <div class="mb-3">
              <h3 class="mb-1">Vue.js SPA todo app</h3>
              <p>
                I built a todo app with a sleek gradient UI and animations using Vuetify, Vue,
                TypeScript, and I18n entirely by myself for practice.
                <a
                  class="link"
                  href="https://akash-ooo.github.io/vue-todo-app-with-animation-and-multi-lang/"
                  target="_blank"
                  >Try it ↗</a
                >
              </p>
            </div>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/N04B_L4l4V0?si=N8dTP0mXwpQcjPGQ"
            />
          </div>
          <div>
            <div class="mb-3">
              <h3 class="mb-1">Digital signature drawing app</h3>
              <p>
                I developed a signature drawing app using raw JavaScript's 2D canvas, following my
                instructor and leveraging my expertise in JavaScript and canvas-based programming.
                During this project, I also explored 3D concepts and WebGL.
                <a
                  class="link"
                  href="https://akash-ooo.github.io/drawing-app-using-javascript/"
                  target="_blank"
                  >Try it ↗</a
                >
              </p>
            </div>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/3CwPRvq-A20?si=19CQaYjk0CKjYMZT"
            />
          </div>
          <div>
            <div class="mb-3">
              <h3 class="mb-1">E-commerce prototype design for a USA-based company</h3>
              <p>
                Created an e-commerce prototype, meticulously following their product
                specifications, target audience preferences, and brand guidelines using Adobe XD.
                After completing this initial low-fidelity design, I was tasked with refining it into
                a high-fidelity prototype and developing the frontend.
              </p>
            </div>
            <ResponsiveYoutubeIframe
              url="https://www.youtube.com/embed/weP2Sxs4Tfk?si=x2SCSGrt7bOjg2I-"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
