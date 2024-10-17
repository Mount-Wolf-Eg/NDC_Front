<template>
  <div class="blog mx-auto">
    <div class="flex-col mx-auto" style="width: 90%">
      <img
        src="/src/assets/blog/blog.jpg"
        style="width: 100%"
        alt="blog iamge"
      />
      <div
        class="blog-btns w-100 py-5 px-4 flex-row justify-content-start gap-3"
        style="overflow-x: auto"
      >
        <button
          v-for="(blog, i) in allblogs"
          :key="i"
          class="blog-btn"
          @click="currentSlide = blog.id"
          :class="`${currentSlide == blog.id ? 'active' : ''}`"
        >
          {{ blog.name }}
        </button>
      </div>
      <div class="tabs w-100">
        <transition name="fade">
          <BlogTab :postCard="postsByBlog"></BlogTab>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useBlogStore } from "@/stores/blogStore";
import BlogTab from "@/components/blog/BlogTab.vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const currentSlide = ref(1);
const { allblogs, postsByBlog } = storeToRefs(useBlogStore());

onMounted(async () => {
  await useBlogStore().getAllBlogs();
  currentSlide.value = allblogs.value[0].id;
});

watch(
  () => currentSlide.value,
  async (newVal) => {
    await useBlogStore().getPostsByCategory({ category_id: newVal });
  }
);
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
    // width: 27.2rem;
    width: fit-content;
    padding: 0 0.5rem;
    height: 5.6rem;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #0477be;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
