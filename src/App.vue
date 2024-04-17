<script setup lang="ts"></script>

<template>
  <div class="w-full h-screen bg-[#1d1d20] flex place-content-center">

    <div class="relative p-8 lg:p-12 max-w-7xl m-auto">
      <!--Top arrow-->
      <div class="absolute top-0 left-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M193 -3.0598e-07C196.866 -1.36992e-07 200 3.13401 200 7C200 10.866 196.866 14 193 14L7 14C3.134 14 -4.74968e-07 10.866 -3.0598e-07 6.99999C-1.36992e-07 3.134 3.134 -8.60529e-06 7 -8.4363e-06L193 -3.0598e-07Z"
            fill="url(#paint0_linear_2635_43)"
          />
          <path
            d="M14 193C14 196.866 10.866 200 6.99999 200C3.13399 200 -8.60529e-06 196.866 -8.4363e-06 193L-3.0598e-07 6.99999C-1.36992e-07 3.134 3.134 -8.60529e-06 7 -8.4363e-06C10.866 -8.09832e-06 14 3.134 14 6.99999L14 193Z"
            fill="url(#paint1_linear_2635_43)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2635_43"
              x1="200"
              y1="7"
              x2="28.445"
              y2="217.855"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="8.63033e-05" stop-color="#9D174D" />
              <stop offset="1" stop-color="#0284C7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2635_43"
              x1="200"
              y1="7"
              x2="28.445"
              y2="217.855"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="8.63033e-05" stop-color="#9D174D" />
              <stop offset="1" stop-color="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!--Content-->
      <div class="grid grid-cols-[16.5%_1fr_16.5%]">
        <!--Logo & social media icons-->
        <div class="flex flex-col justify-between">
          <a class="text-[34px] font-bold text-left text-neutral-100 tracking-[4px]" href="/">
            Arif
          </a>
          <div class="text-neutral-100">Facebook</div>
        </div>

        <!--Project details-->
        <div class="py-16">
          <!--Text content-->
          <div class="mb-6">
            <p class="text-[22px] font-bold text-left text-pink-600 mb-2">Form builder</p>
            <p class="text-sm text-left text-neutral-100">
              Embark on a virtual journey through a bustling cityscape, crafted entirely in-browser.
              Perfect for mastering 3D modeling techniques using Blender, with a focus on intricate
              details and realistic textures. Dive into the world of interactive web development
              with React Three Fiber, bringing your creations to life with dynamic animations and
              immersive experiences.
            </p>
          </div>

          <!--Video-->
          <iframe
            class="rounded-lg overflow-hidden w-full h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/oKIThIihv60?si=8U1VM7C6datFQdew"
            title="YouTube video player"
          >
          </iframe>
        </div>

        <!--Project list-->
        <div class="flex flex-col justify-start items-end gap-2">
          <h2 class="flex-grow-0 flex-shrink-0 text-[22px] font-bold text-left text-neutral-100">
            Projects
          </h2>
          <div
            class="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 [&_a]:left-0 [&_a]:top hover:[&_a]:text-pink-700 [&_a]:transition-all [&_a]:duration-300"
          >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >Intro</a
            >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >Dev hub</a
            >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >Web code mingle</a
            >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >Pixel forge</a
            >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#">
              Form builder
            </a>
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >Visual builder</a
            >
            <a class="flex-grow-0 flex-shrink-0 text-sm text-right text-neutral-100" href="#"
              >AI extension</a
            >
          </div>
        </div>
      </div>

      <!--Bottom arrow-->
      <div class="absolute bottom-0 right-0">
        <svg
          class="ml-auto"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00001 200C3.13401 200 -1.36992e-07 196.866 -3.0598e-07 193C-4.74968e-07 189.134 3.13401 186 7 186L193 186C196.866 186 200 189.134 200 193C200 196.866 196.866 200 193 200L7.00001 200Z"
            fill="url(#paint0_linear_2635_44)"
          />
          <path
            d="M186 6.99999C186 3.13399 189.134 -8.26731e-06 193 -8.4363e-06C196.866 -8.60529e-06 200 3.13399 200 6.99999L200 193C200 196.866 196.866 200 193 200C189.134 200 186 196.866 186 193L186 6.99999Z"
            fill="url(#paint1_linear_2635_44)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2635_44"
              x1="-2.08016e-06"
              y1="193"
              x2="171.555"
              y2="-17.8548"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="8.63033e-05" stop-color="#9D174D" />
              <stop offset="1" stop-color="#0284C7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2635_44"
              x1="-2.08016e-06"
              y1="193"
              x2="171.555"
              y2="-17.8548"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="8.63033e-05" stop-color="#9D174D" />
              <stop offset="1" stop-color="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
