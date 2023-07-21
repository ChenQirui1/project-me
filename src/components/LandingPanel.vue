<script lang="ts" setup>
import { ref } from "vue";

const showDetails = ref(false);

defineProps({ title: String });
</script>

<template>
  <div
    @mouseenter="showDetails = !showDetails"
    @mouseleave="showDetails = !showDetails"
    class="flex-1"
  >
    <Transition
      ><h1 v-if="showDetails" class="text-slate-950 text-center">
        {{ title }}
      </h1></Transition
    >
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
