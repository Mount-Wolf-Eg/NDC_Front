<template>
  <div style="border-radius: 16px">
    <!-- :autoplay="1000" -->
    <carousel
      :wrap-around="true"
      :transition="500"
      v-model="currentSlide"
      :breakpoints="breakpoints"
    >
      <slide v-for="(slide, i) in packagesRes" :key="i">
        <div class="package-info-respon h-100">
          <img
            :src="slide.image"
            alt="slide img"
            style="height: auto; width: 100%; margin-bottom: 2rem"
          />

          <div
            style="width: 100%"
            class="h-100 d-flex flex-column align-items-center justify-content-between gap-5"
          >
            <p class="res-head">{{ slide.name }}</p>

            <div class="w-100" style="flex: 1 !important">
              <div class="res-box">
                <p class="res-box-title">{{ $t("included-services") }}:</p>
                <ul class="res-box-list">
                  <li
                    v-for="(ser, j) in slide.included_services"
                    :key="j"
                    style="list-style: none"
                  >
                    {{ ser }}
                  </li>
                </ul>
              </div>

              <div class="res-box">
                <p class="res-box-title">{{ $t("target-group") }}:</p>
                <ul class="res-box-list" style="list-style: none">
                  <li v-for="(ser, j) in slide.target_group" :key="j">
                    {{ ser }}
                  </li>
                </ul>
              </div>
            </div>

            <button
              @click="router.push({ name: 'contact' })"
              class="r-more-btn-w w-75"
            >
              {{ $t("contact") }}
            </button>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { watch } from "vue";
const router = useRouter();
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);

const props = defineProps({
  packagesRes: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});

const breakpoints = ref({
  // 700px and up
  0: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "center",
  },
});

// const replaceData = (ser) => {
//   return JSON.parse(ser.replace(/'/g, '"'));
// };
</script>

<style lang="scss" scoped></style>
