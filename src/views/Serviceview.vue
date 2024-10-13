<template>
  <div class="service mx-auto">
    <div class="flex-col mx-auto" style="width: 90%">
      <img
        src="/src/assets/blog/blog.jpg"
        style="width: 100%"
        alt="blog iamge"
      />
      <div
        class="service-btns w-100 py-5 px-4 flex-row justify-content-center gap-5"
      >
        <button
          class="service-btn"
          @click="currentSlide = 1"
          :class="`${currentSlide == 1 ? 'active' : ''}`"
        >
          إعادة تأهيل وتطوير مراكز التدريب
        </button>
        <button
          class="service-btn"
          @click="currentSlide = 2"
          :class="`${currentSlide == 2 ? 'active' : ''}`"
        >
          قطاع خدمات التدريب
        </button>
        <button
          class="service-btn"
          @click="currentSlide = 3"
          :class="`${currentSlide == 3 ? 'active' : ''}`"
        >
          قطاع الاستشارات المالية
        </button>
        <button
          class="service-btn"
          @click="currentSlide = 4"
          :class="`${currentSlide == 4 ? 'active' : ''}`"
        >
          تطوير البرمجيات والتسويق الالكتروني
        </button>
        <button
          class="service-btn"
          @click="currentSlide = 5"
          :class="`${currentSlide == 5 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
      </div>
      <div class="tabs w-100">
        <transition name="fade">
          <RehabilitationTab v-if="currentSlide == 1"></RehabilitationTab>
        </transition>
        <transition name="fade">
          <Training v-if="currentSlide == 2"></Training>
        </transition>
        <transition name="fade">
          <Finance v-if="currentSlide == 3"></Finance>
        </transition>
        <transition name="fade">
          <Development v-if="currentSlide == 4"></Development>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import RehabilitationTab from "@/components/service/RehabilitationTab.vue";
import Training from "@/components/service/Training.vue";
import Finance from "@/components/service/Finance.vue";
import Development from "@/components/service/Development.vue";
const currentSlide = ref(1);
const route = useRoute();
onMounted(() => {
  route.query.service == "rehabilitation"
    ? (currentSlide.value = 1)
    : route.query.service == "training"
    ? (currentSlide.value = 2)
    : route.query.service == "finance"
    ? (currentSlide.value = 3)
    : route.query.service == "development"
    ? (currentSlide.value = 4)
    : (currentSlide.value = 1);
});

watch(
  () => route.query.service,
  () => {
    route.query.service == "rehabilitation"
      ? (currentSlide.value = 1)
      : route.query.service == "training"
      ? (currentSlide.value = 2)
      : route.query.service == "finance"
      ? (currentSlide.value = 3)
      : route.query.service == "development"
      ? (currentSlide.value = 4)
      : (currentSlide.value = 1);
  }
);
</script>

<style lang="scss" scoped>
.service {
  margin: 5rem 0 3rem;
  .service-btns {
    background-color: #def1ff;
    border-radius: 15px;
    margin: 2rem 0;

    .service-btn {
      color: #121212;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: center;
    }
    .active {
      border: none;
      color: #0477be;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
