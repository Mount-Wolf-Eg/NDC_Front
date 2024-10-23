<template>
  <div class="main-resource">
    <div
      class="d-flex flex-row gap-5 flex-wrap justify-content-center align-items-center"
    >
      <div v-for="(img, j) in mainResources" :key="j">
        <img
          :src="img.image"
          class="resourc-img"
          style="width: 100%; height: auto; max-width: 12rem"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSlidersStore } from "@/stores/Sliders";
import { storeToRefs } from "pinia";
const { mainResources } = storeToRefs(useSlidersStore());
</script>

<style lang="scss" scoped>
.main-resource {
  display: none;
  .resourc-img {
    min-width: 5.5rem;
    min-height: 5.5rem;
    width: 20rem;
    height: 20rem;
  }
}
</style>
