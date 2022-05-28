<script setup lang="ts">
  import TerminalLead from '../components/TerminalLead.vue';
  import BlinkLink from '../components/BlinkLink.vue';
</script>

<template>
  <main class="flex flex-col px-2">
    <TerminalLead location="~" cmd="cd projects" />
    <TerminalLead location="~" cmd="cat projects.txt" />
    <div>
      <p>Here's some of the stuff I make:</p>
    </div>
    <TerminalLead location="~" cmd="cd projects" />
    <TerminalLead location="~/projects" cmd="ls" />
    <div class="grid grid-cols-4">
      <BlinkLink href="https://github.com/samantha-sheldon/personal-site" class="font-bold text-term-6">personal-site</BlinkLink>
    </div>
    <TerminalLead location="~/projects" cmd="" />
  </main>
</template>
