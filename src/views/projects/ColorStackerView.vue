<script setup lang="ts">
  import TerminalLead from '../../components/TerminalLead.vue';
  import BlinkLink from '../../components/BlinkLink.vue';
</script>

<template>
  <main class="flex flex-col px-2">
    <TerminalLead location="~/projects" cmd="cat color-stacker.txt" />
    <div>
      <p>A simple game where you pour colored liquids between bottles until you've sorted them.</p>
    </div>
    <TerminalLead location="~/projects" cmd="cd color-stacker" />
    <TerminalLead location="~/projects/color-stacker" cmd="ls" />
    <div class="grid grid-cols-4">
      <BlinkLink href="/color-stacker" class="font-bold text-term-2">play-game</BlinkLink>
      <BlinkLink href="https://github.com/samantha-sheldon/color-stacker" class="font-bold text-term-6">on-github</BlinkLink>
    </div>
    <TerminalLead location="~/projects" cmd="" />
  </main>
</template>
