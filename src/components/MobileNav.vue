<script setup lang="ts">

</script>

<template>
  <div class="lg:hidden flex-col justify-start items-end gap-2 !mb-6">
    <h2
      class="flex-grow-0 flex-shrink-0 text-[18px] font-bold text-left text-neutral-100 ">
      Projects
    </h2>
    <div
      class="flex flex-row gap-x-2 flex-wrap justify-start items-end flex-grow-0 flex-shrink-0 [&_a]:font-semibold  hover:[&_a]:text-pink-600 [&_a]:transition-all [&_a]:duration-300 space-y-1"
    >
      <RouterLink
        :to="{ name: 'intro' }"
        class="line-animation relative flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Intro
      </RouterLink>
      <RouterLink
        :to="{ name: 'ecommerce' }"
        class="line-animation flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Complete e-commerce
      </RouterLink>
      <RouterLink
        :to="{ name: 'analyzer' }"
        class="line-animation flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Call & SMS analyzer
      </RouterLink>
      <RouterLink
        :to="{ name: 'gaming' }"
        class="line-animation flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Gaming platform
      </RouterLink>
      <RouterLink
        :to="{ name: 'portfolio' }"
        class="line-animation flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Portfolio
      </RouterLink>
      <RouterLink
        :to="{ name: 'others' }"
        class="line-animation flex-shrink-0 flex-grow-0 text-right text-sm text-neutral-100"
        href="#"
      >Others
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>