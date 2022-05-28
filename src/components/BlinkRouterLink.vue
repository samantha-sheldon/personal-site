<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import BlinkingCursor from "./BlinkingCursor.vue";
  defineProps(['href'])
</script>

<template>
  <div class="flex flex-row items-center">
    <RouterLink :to="href" class="peer cursor-pointer">
      <span class="link-active-arrow font-normal text-term-fg">&gt;</span>
      <slot />
    </RouterLink>
    <BlinkingCursor class="invisible peer-hover:visible">&nbsp;</BlinkingCursor>
  </div>
</template>
