<template>
  <div class="partner-sec">
    <div class="partner">
      <p class="partner-title">شركاء النجاح</p>
      <p class="partner-text w-50">
        هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
        تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
      </p>
      <div
        class="partner-card my-5 d-flex align-items-center justify-content-center gap-5"
      >
        <div class="card">
          <img src="/src/assets/images/partner2.png" alt="partner logo" />
        </div>
        <div class="card">
          <img src="/src/assets/images/partner1.png" alt="mount wolf logo" />
        </div>
      </div>
    </div>
    <div class="supplies">
      <p class="supplies-title">الموارد الرئيسية</p>
      <p class="supplies-text">
        سنعتمد على الموارد الرئيسية مثل: المستشارين الخبراء: ذوي المعرفة العميقه
        عبر مختلف معايير الاعتماد، بما في ذلك على سبيل المثال:
      </p>
      <div class="supplies-slider container-cust">
        <Carousel
          :items-to-show="9"
          :wrap-around="true"
          :autoplay="1000"
          :transition="500"
        >
          <Slide v-for="(slide, i) in slides" :key="i">
            <div class="carousel__item">
              <img :src="slide.icon" alt="supply icon" style="width: 100%" />
            </div>
          </Slide>

          <!-- <template #addons>
            <Navigation />
            <Pagination />
          </template> -->
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);
const next = () => {
  currentSlide.value++;
};
const prev = () => {
  currentSlide.value--;
};

const slides = ref([
  {
    icon: "/src/assets/images/supply1.png",
  },
  { icon: "/src/assets/images/supply2.png" },
  { icon: "/src/assets/images/supply3.png" },
  { icon: "/src/assets/images/supply4.png" },
  { icon: "/src/assets/images/supply5.png" },
  { icon: "/src/assets/images/supply6.png" },
  { icon: "/src/assets/images/supply7.png" },
]);

// const breakpoints = ref({
//   // 700px and up
//   700: {
//     itemsToShow: 2,
//     snapAlign: "center",
//   },
//   // 1024 and up
//   1024: {
//     itemsToShow: 9,
//     snapAlign: "center",
//   },
// });
</script>

<style lang="scss" scoped>
.partner-sec {
  .partner {
    background-color: #fff;
    background-image: url("/src/assets/images/Vector (2).png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    padding: 10rem 0;
    margin-bottom: 5rem;
    .partner-title {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.9rem;
      text-align: center;
      color: #121212;
    }
    .partner-text {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
      text-align: center;
      margin: 5rem auto;
      color: #444444;
    }
    .partner-card {
      .card {
        background-color: #f2f2f2;
        border-radius: 12px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 41.4rem;
        height: 19.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
      }
    }
  }
  .supplies {
    background-color: #def1ff;
    padding: 10 rem 0;
    .supplies-title {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.9rem;
      text-align: center;
    }
    .supplies-text {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: center;
      color: #444444;
      width: 28%;
      text-align: center;
      margin: 2rem auto;
    }
  }
}
</style>
