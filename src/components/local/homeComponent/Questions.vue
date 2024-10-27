<template>
  <div class="home-question-sec">
    <div class="achiement-sec">
      <img
        src="/src/assets/images/faq-image.jpg"
        alt="question background"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        "
      />
      <div class="img-q-bg"></div>
      <div
        class="achieve-box"
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%"
      >
        <div class="row achiv-lyout mx-auto h-100">
          <div
            class="col-6 last col-md flex-c algn-items-start justify-content-start gap-5"
            v-for="(achiev, i) in achievements.slice(-5)"
            :key="i"
          >
            <div class="text-center flex-c gap-4 p-5">
              <img
                style="width: 4.5rem; height: 4.5rem"
                :src="achiev.image"
                alt="achivement icon"
              />

              <p class="achievment-count" v-if="achiev.description">
                <span>+</span>
                <span>
                  {{ achiev.description }}
                </span>
              </p>
              <p class="achievment-title">{{ achiev.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-cust question-sec" v-if="props.questions.length">
      <h3 class="question-sec-title mb-5">{{ $t("common-faq") }}</h3>
      <div style="position: relative">
        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="w-100 h-100"
          style="position: static"
          :modules="modules"
          :pagination="{
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
          }"
          :loop="true"
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
          <swiper-slide v-for="(slide, i) in questi" :key="i">
            <div>
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

              <div class="question-card" v-else>
                <div>
                  <h3 class="questipon-card-title">{{ slide.title }}</h3>
                  <p class="questipon-card-text">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="question-bg" v-if="props.questions.length"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
const show = ref(false);

const props = defineProps({
  achievements: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
  questions: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
const questi = ref([]);
watch(
  () => props.questions,
  (newVal) => {
    newVal.length > 3
      ? (questi.value = newVal)
      : (questi.value = [...newVal, ...newVal, ...newVal]);
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
  // 575: {
  //   slidesPerView: 3,
  //   spaceBetween: 20,
  // },
  800: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination-bullets {
  bottom: -3rem;
  & * {
    background-color: var(--col-blue-md) !important;
    width: 4rem;
    height: 1.1rem;
    border-radius: 1rem;
  }
}

.swiper-button-next {
  left: -5rem !important;
  color: white;
  background-color: var(--col-blue-md);
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  &::after {
    font-size: 1rem;
  }
}
.swiper-button-prev {
  right: -5rem !important;
  color: white;
  background-color: var(--col-blue-md);
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  &::after {
    font-size: 1rem;
  }
}
</style>
