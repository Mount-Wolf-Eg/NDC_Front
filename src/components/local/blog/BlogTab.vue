<template>
  <div v-for="(blog, i) in postCard" :key="i" class="join-cards gap-4">
    <div
      v-if="blog.category_posts"
      v-for="(post, j) in blog.category_posts"
      class="join-card"
      style="overflow: hidden"
      :key="j"
      @click="router.push({ name: 'blogDetails', query: { post: blog.id } })"
    >
      <div class="card-img">
        <img alt="blog image" :src="post.image" />
      </div>

      <div class="card-sec">
        <p class="join-card-title" style="overflow: hidden">
          {{ post.title }}
        </p>
        <p class="join-card-text">
          {{ post.description }}
        </p>
        <p class="join-card-date">
          {{ moment(new Date(post.created_at)).format("DD-MM-YYYY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  postCard: {
    type: Object,
    default: () => ({}),
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
