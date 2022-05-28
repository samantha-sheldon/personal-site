<script setup lang="ts">
  import TerminalLead from '../components/TerminalLead.vue';
</script>

<template>
  <main class="flex flex-col px-2">
    <TerminalLead location="~" cmd="cat index.txt" />
    <div>
      <p>Hi. I'm Sam. I program websites.</p>
    </div>
    <TerminalLead location="~" cmd="" />
  </main>
</template>
