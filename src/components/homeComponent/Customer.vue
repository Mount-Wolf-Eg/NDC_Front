<template>
  <div class="customer-sec">
    <div style="position: relative">
      <img
        class="customer-img"
        src="/src/assets/images/customrbg.jpg"
        alt="customer image"
        style="width: 100%; height: 100%"
      />
      <img
        src="/src/assets/images/customerResponsive.jpg"
        alt="customer image"
        style="width: 100%; height: 100%"
        class="customer-img-resp"
      />
      <div class="img-bg">
        <div
          class="container-cust d-flex flex-row flex-wrap justify-content-between align-items-center"
        >
          <div class="cust-card" v-for="(metric, j) in metrics" :key="j">
            <!-- style="width: 6rem; height: 6rem" -->
            <img :src="metric.image" alt="metric img" />

            <p class="cust-text">
              {{ metric.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="customer-open">
      <div class="pt-5">
        <span class="container-cust">
          <h3 class="cust-head">أراء العملاء</h3>
          <p class="cust-body">
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص.
          </p>
        </span>
        <div style="width: 100%; overflow: hidden">
          <div class="cust-carousel">
            <carousel
              :wrap-around="true"
              :transition="500"
              :autoplay="1000"
              v-model="currentSlide"
              :breakpoints="breakpoints"
            >
              <slide v-for="(slide, i) in testimonials" :key="i">
                <div class="slide-border mx-3">
                  <div class="slide-card">
                    <img
                      :src="slide.image"
                      style="width: 11.3rem; height: 11.3rem"
                      alt="user image"
                    />
                    <p class="slide-card-title">{{ slide.title }}</p>
                    <p class="slide-card-body">
                      {{ slide.description }}
                    </p>
                  </div>
                </div>
              </slide>
            </carousel>

            <div
              class="d-flex flex-row mx-auto mt-5"
              style="gap: 10rem; direction: rtl !important"
            >
              <button
                class="nav-btn"
                @click="next"
                style="
                  border-radius: 50%;
                  background-color: #fff;
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
                    fill="#000"
                  />
                </svg>
              </button>
              <button
                class="nav-btn"
                @click="prev"
                style="
                  border-radius: 50%;
                  width: 3.4rem;
                  height: 3.4rem;
                  transform: scaleX(-1);
                  background-color: #fff;
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
                    fill="#000"
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
</script>

<style lang="scss" scoped>
.customer-sec {
  border-top: 8px solid #7aaf44;
  border-bottom: 8px solid #7aaf44;
  .customer-img-resp {
    display: none;
  }
  .img-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #07439c;
    mix-blend-mode: multiply;
    .cust-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
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
  }
  // second
  .customer-open {
    background-color: #def1ff;
    background-image: url("/src/assets/images/custGroup.png");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    div {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .cust-head {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 4.9rem;
        text-align: center;
      }
      .cust-body {
        text-align: center;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.6rem;
        text-align: center;
        color: #444444;
        width: 50%;
        margin: 0 auto;
      }
    }
    .cust-carousel {
      background-attachment: red;
      width: 90%;
      overflow: hidden;
      margin: 5rem 0;
      .slide-border {
        border: 1px solid #0477be;
        padding: 0.5rem;
        border-radius: 2.4rem;
        .slide-card {
          background-color: white;
          border-radius: 1.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem;
          gap: 0.5rem;
          height: 43.733rem;
          transition: all 0.5s ease-in-out;
          .slide-card-title {
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 3.454rem;
            color: #0477be;
            text-align: center;
            margin: 0;
            transition: all 0.5s ease-in-out;
          }
          .slide-card-body {
            transition: all 0.5s ease-in-out;
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 3.07rem;
            text-align: center;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            line-clamp: 5;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &:hover {
            background-color: #0477be;
          }
          &:hover .slide-card-title {
            display: none;
          }
          &:hover .slide-card-body {
            color: #fff;
          }
          img {
            transition: all 0.5s ease-in-out;
          }
          &:hover img {
            display: none;
          }
        }
      }
    }
  }
}
.nav-btn:hover {
  background-color: #0477be !important;
}
.nav-btn:hover svg path {
  fill: #fff !important;
}
</style>
