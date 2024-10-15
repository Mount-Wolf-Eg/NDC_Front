<template>
  <div class="question-sec">
    <div style="position: relative">
      <img
        src="/src/assets/images/faq-image.jpg"
        alt="question background"
        style="width: 100%"
      />
      <div class="img-bg"></div>
      <div
        style="position: absolute; top: 20%; left: 0; width: 100%"
        class="container-cust d-flex justify-content-center align-items-center"
      >
        <div
          class="cust-card"
          v-for="(achiev, i) in achievements.slice(-5)"
          :key="i"
        >
          <img
            :src="achiev.image"
            style="width: 4rem; height: 4.2rem"
            alt="achivement icon"
          />

          <p class="cust-text m-0 text-center">{{ achiev.description }}+</p>
          <p class="cust-text text-center w-75">{{ achiev.title }}</p>
        </div>
      </div>
    </div>
    <!-- second -->
    <div class="common-ques">
      <div
        class="float-ques d-flex flex-row justify-content-between align-items-start mx-auto"
        style="
          border-radius: 12px;
          padding: 4rem 2rem;
          gap: 5rem;
          width: 70%;
          background-color: white;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -35%);
        "
      >
        <div style="width: 100%">
          <h3 class="float-head mb-5">الأسئله الشائعة</h3>
          <div>
            <div
              class="d-flex flex-row align-items-center"
              style="direction: rtl !important"
            >
              <button
                class="nav-btn"
                @click="next"
                style="
                  border-radius: 50%;
                  background-color: #0477be;
                  width: 3.4rem;
                  height: 3.4rem;
                "
              >
                <svg
                  style="width: 0.8rem; height: 1.2rem"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 -5.24537e-07L8 6L2 12L0.6 10.6L5.2 6L0.600001 1.4L2 -5.24537e-07Z"
                    fill="white"
                  />
                </svg>
              </button>

              <div style="width: 95%">
                <carousel
                  :autoplay="1000"
                  :wrap-around="true"
                  :transition="500"
                  v-model="currentSlide"
                  :breakpoints="breakpoints"
                >
                  <slide v-for="(slide, i) in questions" :key="i">
                    <div class="slide-border">
                      <div class="slide-card">
                        <p class="slide-card-title">{{ slide.title }}</p>
                        <p class="slide-card-body">
                          {{ slide.description }}
                        </p>
                      </div>
                    </div>
                  </slide>

                  <template #addons>
                    <pagination class="custom-pagination" />
                  </template>
                </carousel>
              </div>

              <button
                class="nav-btn"
                @click="prev"
                style="
                  border-radius: 50%;
                  width: 3.4rem;
                  height: 3.4rem;
                  transform: scaleX(-1);
                  background-color: #0477be;
                "
              >
                <svg
                  style="width: 0.8rem; height: 1.2rem"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 -5.24537e-07L8 6L2 12L0.6 10.6L5.2 6L0.600001 1.4L2 -5.24537e-07Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);
const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
};

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

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});
</script>

<style lang="scss" scoped>
.question-sec {
  .img-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #07439c;
    mix-blend-mode: multiply;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cust-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 27.2rem;
    padding: 0 4.3rem;
    .cust-text {
      text-align: center;
      color: #fff;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 3.2rem;
      text-align: center;
    }
  }
  .common-ques {
    position: relative;
    background-color: #def1ff;
    width: 100%;
    height: 42.3rem;

    .float-head {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.9rem;
      text-align: center;
    }
  }

  .slide-border {
    height: 21.8rem;
    background-color: #def1ff;
    width: 100%;
    border-radius: 9px;
    margin: 0 1rem;
    padding: 3rem;
    .slide-card {
      .slide-card-title {
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 3.454rem;
        text-align: right;
        color: #121212;
      }
      .slide-card-body {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 3.07rem;
        text-align: right;
        color: #444444;
      }
    }
  }
}
</style>
