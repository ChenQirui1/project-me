<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showDetails = ref(false);

defineProps({ title: String, link: String });
</script>

<template>
  <RouterLink
    :to="link ? link : '/'"
    @mouseenter="showDetails = true"
    @mouseleave="showDetails = false"
    class="flex-1 relative"
  >
    <Transition
      ><h1
        v-if="showDetails"
        class="text-slate-950 text-center absolute bottom-2 w-full"
      >
        {{ title }}
      </h1></Transition
    >
  </RouterLink>
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
