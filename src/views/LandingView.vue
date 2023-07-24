<script setup lang="ts">
import LandingPanel from "../components/LandingPanel.vue";
// import IntroText from "../components/IntroText.vue";
</script>

<template>
  <div class="flex h-screen">
    <LandingPanel class="bg-slate-800" title="Code" link="/"></LandingPanel>
    <LandingPanel
      class="bg-slate-600"
      title="In-Betweens"
      link="/"
    ></LandingPanel>
    <LandingPanel class="bg-slate-400" title="Art" link="/art"></LandingPanel>
  </div>

  <!-- <IntroText class="z-10"></IntroText> -->
</template>
