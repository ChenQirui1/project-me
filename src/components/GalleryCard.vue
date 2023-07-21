<script lang="ts" setup>
import { ref } from "vue";
const showDetails = ref(false);

// console.log(showDetails);
defineProps({
  title: String,
  descOfMaterials: String,
  year: Number,
  dimensions: String,
  imageSource: String,
  aspectRatio: String,
});
</script>

<template>
  <div
    @mouseover="showDetails = true"
    @mouseleave="showDetails = false"
    class="bg-white relative"
  >
    <img
      class="object-cover w-full h-full"
      :class="aspectRatio"
      :src="imageSource"
      alt=""
    />

    <Transition>
      <div v-if="showDetails" class="bg-gray-600 w-full h-24 absolute bottom-0">
        <div class="p-4">
          <h1 class="text-lg">
            RUI,<i>{{ title }}</i
            >,{{ year }}
          </h1>
          <p>{{ descOfMaterials }}</p>
          <p>{{ dimensions }}</p>
        </div>
      </div>
    </Transition>
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
