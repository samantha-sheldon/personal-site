<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import HeaderText from './components/HeaderText.vue';
  import TerminalLead from './components/TerminalLead.vue';
  import BlinkLink from './components/BlinkLink.vue';
  import BlinkRouterLink from './components/BlinkRouterLink.vue';
</script>

<template>
  <div class="container mx-auto h-screen">
    <header class="flex flex-col">
      <HeaderText />
      <nav class="px-2">
        <TerminalLead location="~" cmd="ls" />
        <div class="grid grid-cols-2 md:grid-cols-4">
          <BlinkRouterLink href="/" class="">home</BlinkRouterLink>
          <BlinkRouterLink href="/links" class="font-bold text-term-12">links</BlinkRouterLink>
          <BlinkRouterLink href="/projects" class="font-bold text-term-12">projects</BlinkRouterLink>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
