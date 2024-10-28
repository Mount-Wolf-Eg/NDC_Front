<template>
  <div class="home-partner-sec">
    <div class="partner-box text-center">
      <p class="partner-title">{{ $t("partners") }}</p>
      <p class="partner-text mx-auto">
        {{ $t("partner-body") }}
      </p>
      <div
        class="partner-card my-5 d-flex flex-wrap align-items-center justify-content-center gap-5"
      >
        <div
          class="card"
          v-for="(partner, i) in partners"
          :key="i"
          style="width: 30rem; overflow: hidden"
        >
          <img
            :src="partner.image"
            style="
              width: 75%;
              height: auto;
              object-fit: cover;
              object-position: center;
            "
            :alt="partner.Ifsah"
          />
        </div>
      </div>
    </div>

    <div class="supplies-sec text-center d-block">
      <div class="supplies-box mx-auto">
        <p class="supplies-title">{{ $t("main-resources") }}</p>
        <p class="supplies-text mx-auto">{{ $t("main-resource-body") }}:</p>
        <div class="supplies-swiper">
          <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            class="w-100 h-100"
            :modules="modules"
            :pagination="{
              el: '.swiper-pagination',
              dynamicBullets: true,
              clickable: true,
            }"
            :slides-per-view="1"
            :Autoplay="{
              delay: 1000,
              disableOnInteraction: true,
              waitForTransition: true,
            }"
            :space-between="10"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :preload-images="false"
            :breakpoints="breakpoints"
            :Lazy="true"
          >
            <!-- resources -->
            <swiper-slide v-for="(slide, i) in resources" :key="i">
              <div class="tetimonial-card w-100 h-100">
                <!-- loading placeholder -->
                <div
                  style="background-color: #868e96"
                  class="w-100 h-100 flex-r gap-3"
                  v-if="!show"
                >
                  <div class="spinner-grow text-dark" role="status"></div>
                  <div class="spinner-grow text-dark" role="status"></div>
                  <div class="spinner-grow text-dark" role="status"></div>
                  <div class="spinner-grow text-dark" role="status"></div>
                </div>
                <!-- images -->

                <div v-else>
                  <div>
                    <img
                      style="
                        width: 10rem;
                        height: 100%;
                        object-fit: contain;
                        object-position: center;
                        max-height: 9rem;
                      "
                      :src="slide.image"
                    />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <MainResource></MainResource>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
import MainResource from "./MainResource.vue";
const show = ref(false);
const props = defineProps({
  partners: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
  resources: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
watch(
  () => props.resources,
  (newVal) => {
    newVal ? (show.value = true) : (show.value = false);
  }
);
const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  375: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  575: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 8,
    spaceBetween: 30,
  },
  1318: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss" scoped></style>
