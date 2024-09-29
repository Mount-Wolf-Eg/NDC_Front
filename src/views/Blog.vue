<template>
  <div class="blog mx-auto">
    <div class="flex-col mx-auto" style="width: 90%">
      <img src="/src/assets/blog/blog.jpg" alt="blog iamge" />
      <div
        class="blog-btns w-100 py-5 px-4 flex-row justify-content-start gap-3"
      >
        <button
          class="blog-btn"
          @click="currentSlide = 1"
          :class="`${currentSlide == 1 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
        <button
          class="blog-btn"
          @click="currentSlide = 2"
          :class="`${currentSlide == 2 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
        <button
          class="blog-btn"
          @click="currentSlide = 3"
          :class="`${currentSlide == 3 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
        <button
          class="blog-btn"
          @click="currentSlide = 4"
          :class="`${currentSlide == 4 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
        <button
          class="blog-btn"
          @click="currentSlide = 5"
          :class="`${currentSlide == 5 ? 'active' : ''}`"
        >
          اسم القسم رقم واحد
        </button>
      </div>
      <div class="tabs w-100">
        <transition name="fade">
          <BlogTab v-if="currentSlide == 1"></BlogTab>
        </transition>
        <transition name="fade">
          <BlogTab v-if="currentSlide == 2"></BlogTab>
        </transition>
        <transition name="fade">
          <BlogTab v-if="currentSlide == 3"></BlogTab>
        </transition>
        <transition name="fade">
          <BlogTab v-if="currentSlide == 4"></BlogTab>
        </transition>
        <transition name="fade">
          <BlogTab v-if="currentSlide == 5"></BlogTab>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogTab from "@/components/blog/BlogTab.vue";
const currentSlide = ref(1);
</script>

<style lang="scss" scoped>
.blog {
  margin: 5rem 0 3rem;
  .blog-btn {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    text-align: right;
    color: #121212;
    width: 27.2rem;
    height: 5.6rem;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0477be;
  }
  .active {
    background-color: #def1ff;
    border: none;
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
