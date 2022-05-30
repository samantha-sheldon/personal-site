<script setup lang="ts">
  import TerminalLead from '../components/TerminalLead.vue';
  import BlinkLink from '../components/BlinkLink.vue';
  import BlinkRouterLink from '../components/BlinkRouterLink.vue';
</script>

<template>
  <main class="flex flex-col px-2">
    <TerminalLead location="~" cmd="cat projects.txt" />
    <div>
      <p>Here's some of the stuff I make:</p>
    </div>
    <TerminalLead location="~" cmd="cd projects" />
    <TerminalLead location="~/projects" cmd="ls" />
    <div class="grid grid-cols-4">
      <BlinkLink href="https://github.com/samantha-sheldon/personal-site" class="font-bold text-term-6">personal-site</BlinkLink>
      <BlinkRouterLink href="/projects/color-stacker" class="font-bold text-term-12">color-stacker</BlinkRouterLink>
    </div>
    <TerminalLead location="~/projects" cmd="" />
  </main>
</template>
