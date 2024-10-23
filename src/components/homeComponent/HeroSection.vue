<template>
  <div style="height: auto; width: 100%; position: relative; overflow: hidden">
    <carousel
      :items-to-show="1"
      :wrap-around="true"
      :transition="500"
      v-model="currentSlide"
    >
      <slide v-for="(slide, i) in hero" :key="i">
        <div
          class="hero-carousel-img"
          style="
            height: 100%;
            width: 100%;
            overflow: hidden;
            background-color: #def1ff;
          "
        >
          <div style="border-bottom: 1.2rem solid #0477be">
            <img
              :src="slide.image"
              style="width: 100%; height: 100%"
              alt="slide image"
            />
          </div>
          <div class="hero-carousel-text slide-1" style="position: absolute">
            <p class="title">
              {{ slide.title }}
            </p>
            <p class="bdy">{{ slide.description }}</p>
          </div>
        </div>
      </slide>

      <template #addons>
        <pagination class="custom-pagination d-none d-sm-flex" />
      </template>
    </carousel>

    <div class="navigation-btns" style="direction: rtl !important">
      <button @click="next" style="position: relative; width: 50%">
        <svg
          class="arrow1"
          fill="#fff"
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 10px;
          "
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
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 25px;
          "
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
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 40px;
          "
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
      </button>
      <button
        @click="prev"
        style="
          height: 4rem;
          transform: scaleX(-1);
          position: relative;
          width: 50%;
        "
      >
        <svg
          class="arrow1"
          fill="#fff"
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 10px;
          "
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
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 25px;
          "
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
          style="
            height: 4rem;
            width: 4rem;
            position: absolute;
            top: 0;
            right: 40px;
          "
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
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const currentSlide = ref(0);
const next = () => {
  if (currentSlide.value == props.hero.length - 1) {
    currentSlide.value = 0;
  } else {
    currentSlide.value++;
  }
};

const prev = () => {
  if (currentSlide.value == 0) {
    currentSlide.value = props.hero.length - 1;
  } else {
    currentSlide.value--;
  }
};

const props = defineProps({
  hero: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
</script>

<style lang="scss" scoped>
.slide-1 {
  font-family: "Rubik", sans-serif !important;
  right: 15%;
  top: 20%;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
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
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  margin: 0 auto;
  overflow: hidden;
}
</style>
