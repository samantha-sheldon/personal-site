<script setup lang="ts">
  import BlinkingCursor from "./BlinkingCursor.vue";
  defineProps(['href'])
</script>

<template>
  <div class="flex flex-row items-center">
    <a :href="href" target="_blank" class="peer cursor-pointer">
      <slot />
    </a>
    <BlinkingCursor class="invisible peer-hover:visible">&nbsp;</BlinkingCursor>
  </div>
</template>
