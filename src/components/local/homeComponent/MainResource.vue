<template>
  <div class="main-resource" style="display: none; padding: 10rem 0">
    <div class="partner-box text-center">
      <p class="partner-title">{{ $t("main-resources") }}</p>
      <p class="partner-text mx-auto">{{ $t("main-resource-body") }}:</p>
    </div>
    <div
      class="d-flex flex-row gap-5 flex-wrap justify-content-center align-items-center"
    >
      <div v-for="(img, j) in mainResources" :key="j" class="res-box">
        <img
          :src="img.image"
          class="resourc-img"
          style="
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center;
          "
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
