<template>
  <div class="home-testimonial-sec">
    <div class="metrics-sec">
      <img
        src="/src/assets/images/customerResponsive.jpg"
        alt="customer image"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        "
      />
      <div class="img-bg"></div>
      <div
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%"
      >
        <div class="row w-100 h-100">
          <div
            class="col-6 col-md-3 flex-c algn-items-center justify-content-center"
            v-for="(metric, j) in metrics.slice(-4)"
            :key="j"
          >
            <img
              :src="metric.image"
              style="width: 6rem; height: 6rem"
              alt="metric img"
            />

            <p class="metrics-title w-50 text-center">
              {{ metric.title }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="testimonial-swiper container-cust"
      v-if="props.testimonials.length"
    >
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
        <!-- testimonials -->
        <swiper-slide v-for="(slide, i) in testimonials" :key="i">
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
                <div class="flex-c card-body gap-3 text-center">
                  <img
                    :src="slide.image"
                    alt="user image"
                    style="
                      width: 11.5rem;
                      height: 11.5rem;
                      border-radius: 50%;
                      border: 0.5rem solid var(--col-blue-md);
                    "
                  />
                  <p class="slide-card-title">
                    {{ slide.title }}
                  </p>
                  <p class="slide-card-body">
                    {{ slide.description }}
                  </p>
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
import { ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
const show = ref(false);
const props = defineProps({
  metrics: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
  testimonials: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
watch(
  () => props.testimonials,
  (newVal) => {
    newVal ? (show.value = true) : (show.value = false);
  }
);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  375: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  575: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1318: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  &::after {
    font-size: 4rem;
  }
}
</style>
