<script setup lang="ts">
  import TerminalLead from '../components/TerminalLead.vue';
  import BlinkLink from '../components/BlinkLink.vue';
</script>

<template>
  <main class="flex flex-col px-2">
    <TerminalLead location="~" cmd="cd links" />
    <TerminalLead location="~/links" cmd="cat findme.txt" />
    <div>
      <p>Here are places you can find me on the internet:</p>
    </div>
    <TerminalLead location="~/links" cmd="ls findme" />
    <div class="grid grid-cols-4">
      <BlinkLink href="https://github.com/samantha-sheldon" class="font-bold text-term-6">github</BlinkLink>
    </div>
    <TerminalLead location="~/links" cmd="" />
  </main>
</template>
