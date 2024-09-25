<template>
  <div style="width: 100% !important; height: auto">
    <carousel
      :items-to-show="1"
      :wrap-around="true"
      :transition="500"
      v-model="currentSlide"
    >
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
        <pagination class="custom-pagination" />
      </template>
    </carousel>
    <div class="navigation-btns">
      <button @click="next">
        <span>
          <svg
            class="arrow1"
            fill="#fff"
            style="height: 4rem; width: 4rem"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
          <svg
            class="arrow2"
            fill="#fff"
            style="height: 4rem; width: 4rem; margin-inline-start: -18px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
          <svg
            class="arrow3"
            fill="#fff"
            style="height: 4rem; width: 4rem; margin-inline-start: -18px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </span>
      </button>
      <button @click="prev" style="transform: scaleX(-1)">
        <span>
          <svg
            class="arrow1"
            fill="#fff"
            style="height: 4rem; width: 4rem"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
          <svg
            class="arrow2"
            fill="#fff"
            style="height: 4rem; width: 4rem; margin-inline-start: -18px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
          <svg
            class="arrow3"
            fill="#fff"
            style="height: 4rem; width: 4rem; margin-inline-start: -18px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </span>
      </button>
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

.carousel__pagination {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
}

// arrow icons test
.navigation-btns {
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
}

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
