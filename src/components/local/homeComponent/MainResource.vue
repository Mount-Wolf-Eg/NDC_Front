<template>
  <div class="main-resource" style="display: none; padding: 10rem 0">
    <div
      class="d-flex flex-row gap-5 flex-wrap justify-content-center align-items-center"
    >
      <div v-for="(img, j) in mainResources" :key="j">
        <img
          :src="img.image"
          class="resourc-img"
          style="
            width: 10rem;
            height: auto;
            object-fit: cover;
            object-position: center;
            max-height: 9rem;
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
