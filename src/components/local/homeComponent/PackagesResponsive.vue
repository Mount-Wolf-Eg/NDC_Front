<template>
  <div class="pack-res-swiper h-100">
    <div class="testimonial-swiper container-cust">
      <!-- :Autoplay="{
          delay: 1000,
          disableOnInteraction: true,
          waitForTransition: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" -->
      <swiper
        class="w-100 h-100"
        :modules="modules"
        :pagination="{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        }"
        :slides-per-view="1.05"
        :space-between="5"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :preload-images="false"
        :Lazy="true"
      >
        <swiper-slide
          v-for="(slide, i) in packagesRes"
          :key="i"
          style="background-color: var(--col-bg)"
        >
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

            <div class="card-res" v-else>
              <div class="card-border">
                <div
                  class="package-info-respon d-flex flex-column justify-content-between h-100"
                >
                  <div
                    style="border-radius: 1.2rem !important; overflow: hidden"
                  >
                    <img
                      :src="slide.image"
                      alt="slide img"
                      style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                      "
                    />
                  </div>

                  <div
                    style="width: 100%"
                    class="h-100 d-flex flex-column align-items-center justify-content-between gap-5"
                  >
                    <div
                      class="d-flex flex-column algin-items-start py-5 px-3 w-100"
                      style="flex: 1 !important"
                    >
                      <p class="res-head">الباقة المميزة للاعتماد</p>
                      <div class="card-lists" style="flex: 1">
                        <p class="res-box-title">
                          {{ $t("included-services") }}:
                        </p>
                        <ul class="d-flex flex-column">
                          <li
                            v-for="(ser, j) in slide.included_services"
                            :key="j"
                          >
                            {{ ser }}
                          </li>
                        </ul>
                      </div>

                      <div class="card-lists" style="flex: 1">
                        <p class="res-box-title sec">
                          {{ $t("target-group") }}:
                        </p>
                        <ul class="d-flex flex-column">
                          <li v-for="(ser, j) in slide.target_group" :key="j">
                            {{ ser }}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button
                      @click="router.push({ name: 'contact' })"
                      class="r-more-btn-w mb-3"
                      style="width: 100%"
                    >
                      {{ $t("contactu") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
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

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  &::after {
    font-size: 4rem;
  }
}
</style>
