<script setup lang="ts">
defineProps(['location', 'cmd'])
</script>

<template>
  <div><span class="font-bold"><span class="text-term-2">guest@website</span>:<span class="text-term-12">{{ location }}</span></span>$ {{ cmd }}</div>
</template>
