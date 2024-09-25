<template>
  <main>
    <div style="position: absolute; top: 0; left: 0">
      <carousel :items-to-show="1" :wrap-around="true" :transition="500">
        <slide v-for="(slide, i) in slides" :key="i">
          <div style="position: relative">
            <img :src="slide.img" style="width: 100%" alt="slide image" />
            <div :class="`${slide.styl}`" style="position: absolute">
              <p class="title">
                {{ slide.title }}
              </p>
              <p class="bdy">{{ slide.bdy }}</p>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation class="custom-nav" />
          <pagination class="custom-pagination" />
        </template>
      </carousel>
    </div>
    <div class="bg-info">
      <svg
        class="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="50"
        viewBox="0 0 100 50"
      >
        <polygon
          points="10,25 50,5 50,20 90,20 90,30 50,30 50,45"
          fill="black"
        />
      </svg>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = ref([
  {
    img: `/src/assets/banner/banner1.jpg`,
    title: "حلول التدريب",
    bdy: "تدرب لتحقيق النجاح باستخدام حلول التدريب ذات المستوى العالمي، وتنمية الخبرة في مختلف الصناعات.",
    styl: "slide-1",
  },
  {
    img: `/src/assets/banner/banner2.jpg`,
    title: "حلول الاعتماد",
    bdy: "مسارات الاعتماد المخصصة، وضمان الامتثال السلس والاعتراف العالمي.  ",
    styl: "slide-1",
  },
]);
</script>

<style lang="scss" scoped>
.slide-1 {
  font-family: "Rubik", sans-serif !important;
  right: 10%;
  top: 35%;
  width: 25%;
  .title {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 9.211rem;
    text-align: right;
    color: #fff;
  }
  .bdy {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.9rem;
    text-align: right;
    color: #fff;
  }
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: yellow !important;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.arrow {
  animation: moveArrow 0.5s linear infinite;
}

@keyframes moveArrow {
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
