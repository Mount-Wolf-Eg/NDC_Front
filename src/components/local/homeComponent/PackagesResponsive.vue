<template>
  <div class="pack-res-swiper d-none" style="border-radius: 16px">
    <div class="testimonial-swiper container-cust">
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
        :Lazy="true"
      >
        <swiper-slide v-for="(slide, i) in packagesRes" :key="i">
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
              <div class="card-border">
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
                        <p class="res-box-title">
                          {{ $t("included-services") }}:
                        </p>
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
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { watch } from "vue";
const router = useRouter();
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
const show = ref(false);

const props = defineProps({
  packagesRes: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
watch(
  () => props.packagesRes,
  (newVal) => {
    newVal ? (show.value = true) : (show.value = false);
  }
);
</script>

<style lang="scss" scoped></style>
