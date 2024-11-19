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
            class="col-6 last bg- col-md d-flex algn-items-start justify-content-start gap-5"
            v-for="(achiev, i) in achievements.slice(-4)"
            :key="i"
          >
            <div
              class="ac-box text-center d-flex flex-column align-items-center justify-content-start gap-2 p-5"
            >
              <img
                class="achiev-icon"
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
      <div style="position: relative" class="h-100">
        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="w-100 h-100 py-2"
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
          <swiper-slide v-for="(slide, i) in questi" :key="i" class="h-100">
            <div class="h-100 d-flex flex-column">
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

              <div class="question-card h-100" v-else>
                <div
                  class="h-100 d-flex flex-column align-items-center justify-content-start"
                  style="height: 22rem"
                >
                  <h3 class="questipon-card-title">{{ slide.title }}</h3>
                  <p class="questipon-card-text my-auto">
                    {{ slide.description }}
                  </p>
                  <button
                    @click="
                      qtitle = slide.title;
                      qdescription = slide.description;
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    class="r-more-btn-w text-center mx-auto"
                    style="width: fit-content; margin-top: auto"
                  >
                    {{ $t("see-more") }}
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swip-btns swiper-button-next"></div>
          <div class="swip-btns swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="question-bg" v-if="props.questions.length"></div>
    <div
      class="modal fade m-0 p-0"
      id="exampleModal"
      style="width: 100vw"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog mx-auto">
        <div class="modal-content mx-auto" style="width: 80% !important">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">
              {{ $t("common-faq") }}
            </h1>
            <!-- <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> -->
          </div>
          <div class="modal-body">
            <h3 class="questipon-card-title">{{ qtitle }}</h3>
            <p class="questipon-card-text">
              {{ qdescription }}
            </p>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
const show = ref(false);
const qtitle = ref("");
const qdescription = ref("");

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
  // 375: {
  //   slidesPerView: 2,
  //   spaceBetween: 20,
  // },
  575: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
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
  color: white;
  background-color: var(--col-blue-md);
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  &::after {
    font-size: 1rem;
  }
}
.modal-dialog {
  width: auto;
  height: auto;
  margin: 20rem auto;
  .modal-content {
    background-color: var(--col-bg) !important;
    border-radius: var(--brd-r-md) !important;
    overflow: hidden;
    .modal-title {
      font-weight: var(--fw-bold);
      font-size: var(--fs-24);
      line-height: var(--fs-48);
      margin: 0 auto;
    }
    .modal-body {
      background-color: var(--col-bg);
      width: 100% !important;
      text-align: start;
      padding: 2rem;

      .questipon-card-title {
        font-weight: var(--fw-bold);
        line-height: var(--fs-32);
        color: var(--col-blk);
        font-size: var(--fs-20);
        padding: 2rem 0;
      }

      .questipon-card-text {
        font-weight: var(--fw-bold);
        line-height: var(--line-h-37);
        color: var(--col-blk);
        font-size: var(--fs-16);
      }
    }
  }
}
</style>
