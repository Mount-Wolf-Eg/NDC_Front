<template>
  <div class="blog mx-auto">
    <div class="blog-box-b flex-col mx-auto" style="width: 90%">
      <img
        class="d-none d-md-block"
        src="/src/assets/blog/blog.jpg"
        style="width: 100%; border-radius: 12px"
        alt="blog iamge"
      />
      <img
        class="d-block d-md-none"
        src="/src/assets/blog/blogRes.jpg"
        style="width: 100%"
        alt="blog iamge"
      />
      <div
        class="blog-btns w-100 py-5 px-4 flex-row flex-wrap justify-content-start gap-4"
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
      <BlogTab :postCard="postsByBlog"></BlogTab>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useBlogStore } from "@/stores/blogStore";
import BlogTab from "@/components/local/blog/BlogTab.vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const currentSlide = ref(0);
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
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
