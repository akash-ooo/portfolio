<script lang="ts" setup></script>

<template>
  <div class="hidden lg:order-3 lg:block">
    <div class="fill-animation flex mb-4">
      <h2 class="line-animation text-left text-[22px] font-bold text-neutral-100 ">Projects</h2>
    </div>
    <div
      class="[&_a]:font-semibold [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:text-pink-600"
    >
      <RouterLink
        :to="{ name: 'intro' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Intro
      </RouterLink>
      <br />
      <RouterLink
        :to="{ name: 'ecommerce' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Complete Ecommerce </RouterLink
      ><br />
      <RouterLink
        :to="{ name: 'lc' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Call list Analyzer </RouterLink
      ><br />
      <RouterLink
        :to="{ name: 'cca' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Cross Platform App </RouterLink
      ><br />
      <RouterLink
        :to="{ name: 'gaming' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Gaming </RouterLink
      ><br />
      <RouterLink
        :to="{ name: 'portfolio' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Portfolio </RouterLink
      ><br />
      <RouterLink
        :to="{ name: 'experiments' }"
        class="line-animation text-nowrap text-sm text-neutral-100"
        href="#"
        >Experiments
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
