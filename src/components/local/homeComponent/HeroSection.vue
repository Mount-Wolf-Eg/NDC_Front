<template>
  <div class="hero-sec" style="position: relative">
    <swiper
      style="border-bottom: 1rem solid var(--col-blue-md)"
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
      :space-between="50"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :preload-images="false"
      :Lazy="true"
    >
      <swiper-slide v-for="(slide, i) in hero" :key="i" class="w-100 h-100">
        <div class="hero-card w-100 h-100">
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
          <div
            class="hero-card-image w-100 h-100"
            style="position: relative"
            v-else
          >
            <img
              style="
                width: 100% !important;
                height: 100% !important;
                object-fit: cover;
                object-position: center;
              "
              :src="slide.image"
              alt="slide image"
            />
            <div
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 50%;
              "
              class="hero-text-box row mx-auto"
            >
              <div
                style="width: 95vw"
                class="hero-card-text flex-c align-items-start mx-auto col-12 col-lg-6"
              >
                <div class="hero-inner" style="width: 100%; padding: 1rem">
                  <p class="title">{{ slide.title }}</p>
                  <p class="body">{{ slide.description }}</p>
                </div>
              </div>
              <div class="col-6"></div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div
        class="swiper-button-next"
        :class="`${direction == 'ltr' ? 'next' : ''}`"
        style="transform: scaleX(-1)"
      >
        <svg
          class="arrow1"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
        <svg
          class="arrow2"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
        <svg
          class="arrow3"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </div>
      <div
        class="swiper-button-prev"
        :class="`${direction == 'ltr' ? 'prev' : ''}`"
      >
        <svg
          class="arrow1"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
        <svg
          class="arrow2"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
        <svg
          class="arrow3"
          fill="#fff"
          style="height: 4rem; width: 4rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </div>
      <div class="swiper-pagination"></div>
    </swiper>

    <div class="hero-about-us row">
      <div
        class="col-12 col-md-6 d-flex flex-column justify-content-between p-5 p-md-1 px-md-5"
      >
        <h3 class="hero-about-title">
          {{ about.title }}
        </h3>

        <p class="hero-about-text">
          {{ about.description }}
        </p>

        <button
          class="r-more-btn-c text-center"
          style="width: fit-content"
          @click="router.push({ name: 'about' })"
        >
          {{ $t("see-more") }}
        </button>
      </div>
      <div class="col-12 col-md-6 p-5 p-md-1 px-md-5">
        <img
          v-if="about.image"
          :src="about.image"
          alt="business img "
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const router = useRouter();
const modules = [Pagination, Navigation, Autoplay];
const show = ref(false);
const direction = ref("rtl");
onMounted(() => {
  direction.value = document.querySelector("html").getAttribute("dir");
});
const props = defineProps({
  hero: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
  about: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
watch(
  () => props.hero,
  (newVal) => {
    newVal ? (show.value = true) : (show.value = false);
  }
);
</script>

<style lang="scss" scoped>
// swiper controls
.swiper-button-next,
.swiper-button-prev {
  width: 6rem;
  margin: 1rem;

  &::after {
    font-size: 0;
  }
}

.prev {
  transform: scaleX(-1) !important;
}
.next {
  transform: scaleX(1) !important;
}

.swiper-pagination-bullets {
  bottom: 25%;
  & * {
    background-color: var(--col-white) !important;
    width: 1.5rem;
    height: 0.5rem;
    border-radius: 0.2rem;
  }
}

// slider buttons
.arrow1 {
  animation: moveArrow1 0.8s linear infinite;
}

.arrow2 {
  animation: moveArrow2 0.8s linear infinite;
}

.arrow3 {
  animation: moveArrow3 0.8s linear infinite;
}

@keyframes moveArrow1 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes moveArrow2 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes moveArrow3 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
