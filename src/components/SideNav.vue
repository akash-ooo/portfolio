<script lang="ts" setup></script>

<template>
  <div class="hidden lg:order-3 lg:block">
    <!--Heading-->
    <div class="fill-animation mb-4 flex justify-end">
      <h2 class="line-animation text-right text-[22px] font-bold text-neutral-100">Projects</h2>
    </div>

    <!--Nav link-->
    <div
      class="[&_a]:font-semibold [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:text-pink-600 space-y-1"
    >
      <div class="text-right">
        <RouterLink
          :to="{ name: 'intro' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Intro
        </RouterLink>
      </div>
      <div class="text-right">
        <RouterLink
          :to="{ name: 'ecommerce' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Complete E-Commerce
        </RouterLink>
      </div>
      <div class="text-right">
        <RouterLink
          :to="{ name: 'analyzer' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Call & SMS Analyzer
        </RouterLink>
      </div>
      <div class="text-right">
        <RouterLink
          :to="{ name: 'gaming' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Gaming Platform
        </RouterLink>
      </div>
      <div class="text-right">
        <RouterLink
          :to="{ name: 'portfolio' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Portfolio
        </RouterLink>
      </div>
      <div class="text-right">
        <RouterLink
          :to="{ name: 'others' }"
          class="line-animation text-nowrap text-sm text-neutral-100"
          href="#"
          >Others
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
