<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="aspect-h-9 lg:aspect-h-[7] aspect-w-16">
    <iframe
      :src="url"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="h-full w-full overflow-hidden rounded-lg"
      frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin"
      title="YouTube video player"
    >
    </iframe>
  </div>
</template>