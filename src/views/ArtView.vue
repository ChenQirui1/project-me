<script lang="ts" setup>
import GalleryCard from "../components/GalleryCard.vue";
import json from "../data/testData.json";
import { onMounted, ref } from "vue";

const screenSize = ref("unknown");

const artCollection: ArtCollection | any = ref(null);

const getCurrentBreakpoint = () => {
  const breakpointUnknown: string = "unknown";
  const breakpointMobile: string | null =
    document.getElementById("breakpoint-mobile")?.offsetParent === null
      ? null
      : "mobile";
  const breakpointSM: string | null =
    document.getElementById("breakpoint-sm")?.offsetParent === null
      ? null
      : "sm";
  const breakpointMD: string | null =
    document.getElementById("breakpoint-md")?.offsetParent === null
      ? null
      : "md";
  const breakpointLG: string | null =
    document.getElementById("breakpoint-lg")?.offsetParent === null
      ? null
      : "lg";
  const breakpointXL: string | null =
    document.getElementById("breakpoint-xl")?.offsetParent === null
      ? null
      : "xl";
  const breakpoint2XL: string | null =
    document.getElementById("breakpoint-2xl")?.offsetParent === null
      ? null
      : "2xl";
  const breakpoint =
    breakpointMobile ??
    breakpointSM ??
    breakpointMD ??
    breakpointLG ??
    breakpointXL ??
    breakpoint2XL ??
    breakpointUnknown;

  return breakpoint;
};

interface ArtInfo {
  id: number;
  title: string;
  descOfMaterials: string;
  year: number;
  aspectRatio: string;
  imageSource: string;
  dimensions: string;
}

interface ArtCollection {
  col: number;
  row: Array<ArtInfo>;
}

const getColCount = (screenSize: string) => {
  interface Sizing {
    "2xl": number;
    xl: number;
    lg: number;
    md: number;
    sm: number;
    mobile: number;
  }
  const sizing: Sizing = { "2xl": 5, xl: 4, lg: 3, md: 3, sm: 2, mobile: 1 };
  return sizing[screenSize as keyof Sizing];
};

//takes in order array
const initialiseArray = (colCount: number) => {
  let newArray: Array<ArtCollection> = [];
  for (let i = 0; i < colCount; i++) {
    newArray.push({ col: i, row: [] });
  }
  return newArray;
};

const constructArray = (json: ArtInfo[], colCount: number) => {
  const newArray = initialiseArray(colCount);
  for (let i = 0; i < json.length; i++) {
    if (i < colCount) {
      newArray[i].row.push(json[i]);
    } else {
      newArray[i % colCount].row.push(json[i]);
    }
  }
  return newArray;
};

const updateScreenSize = () => {
  const newSize = getCurrentBreakpoint();
  if (screenSize.value == newSize) {
    return;
  } else {
    screenSize.value = newSize;
    artCollection.value = constructArray(json, getColCount(screenSize.value));
    // console.log(screenSize.value);
  }
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});
</script>

<template>
  <h1 class="text-center">Gallery</h1>

  <div class="flex gap-4 m-5">
    <div
      v-for="column in artCollection"
      :key="column.col"
      class="flex flex-col gap-4 flex-1"
    >
      <GalleryCard
        v-for="data in column.row"
        :key="data.id"
        v-bind="data"
      ></GalleryCard>
    </div>
  </div>
  <!-- breakpoint tracker -->
  <div>
    <div
      id="breakpoint-sm"
      class="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-0 h-0"
    ></div>
    <div
      id="breakpoint-md"
      class="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden w-0 h-0"
    ></div>
    <div
      id="breakpoint-lg"
      class="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden w-0 h-0"
    ></div>
    <div
      id="breakpoint-xl"
      class="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden w-0 h-0"
    ></div>
    <div
      id="breakpoint-2xl"
      class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block w-0 h-0"
    ></div>
    <div
      id="breakpoint-mobile"
      class="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden w-0 h-0"
    ></div>
  </div>
</template>
