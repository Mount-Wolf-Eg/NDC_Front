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
        <div class="row w-100 h-100 mx-auto">
          <div
            class="met-item col-6 col-md-3 flex-c algn-items-center justify-content-center"
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
      class="testimonial-swiper mx-auto container-cust"
      style="position: relative; padding-bottom: 10rem !important"
      v-if="props.testimonials.length"
    >
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="w-100 h-100 py-2"
        style="position: static"
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
        :space-between="50"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :preload-images="false"
        :breakpoints="breakpoints"
        :Lazy="true"
      >
        <!-- testimonials -->
        <swiper-slide v-for="(slide, i) in testimonial" :key="i">
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
import { Pagination, Navigation, Autoplay } from "swiper";

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
const testimonial = ref([]);
watch(
  () => props.testimonials,
  (newVal) => {
    if (newVal.length > 0) {
      newVal.length > 4
        ? (testimonial.value = newVal)
        : (testimonial.value = [...newVal, ...newVal, ...newVal]);
      newVal ? (show.value = true) : (show.value = false);
    }
  }
);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  375: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  575: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-next {
  top: 93%;
  left: 40%;
  color: var(--col-blk);
  background-color: var(--col-white);
  width: 3.4rem;
  height: 3.4rem;
  min-width: 20px !important;
  min-height: 20px !important;
  border-radius: 50%;
  &::after {
    font-size: 2rem;
    font-weight: bold;
  }
}
.swiper-button-prev {
  top: 93%;
  right: 40%;
  color: var(--col-blk);
  background-color: var(--col-white);
  width: 3.4rem;
  height: 3.4rem;
  min-width: 20px !important;
  min-height: 20px !important;
  border-radius: 50%;
  &::after {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
