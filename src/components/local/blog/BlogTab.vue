<template>
  <div v-for="(blog, i) in postCard" :key="i">
    <div class="join-cards" style="width: 88%; margin: 0 auto">
      <div
        v-if="blog.category_posts"
        v-for="(post, j) in blog.category_posts"
        class="join-card d-flex flex-column justify-content-start align-items-center"
        style="overflow: hidden"
        :key="j"
        @click="router.push({ name: 'blogDetails', query: { post: blog.id } })"
      >
        <img
          alt="blog image"
          class="card-img"
          style="
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: top;
          "
          :src="post.image"
        />

        <div style="flex: 1" class="card-sec">
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

<style lang="scss" scoped>
// .join-cards {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   .join-card {
//     margin-bottom: 3rem;
//     border: 1px solid #444444;
//     border-radius: 2.4rem;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     align-items: start;
//     justify-content: space-between;
//     width: 41.4rem;
//     max-height: 50.2rem;
//     height: 50.2rem;
//     .join-card-title {
//       // width: 16.2rem;
//       width: 100%;
//       word-wrap: break-word;
//       white-space: normal;
//       font-weight: var(--fw-bold);
//       padding: 0 0.5rem;
//       height: 3.9rem;
//       font-size: var(--fs-16);
//       line-height: 3rem;
//       background-color: #f6f7ff;
//       color: #0477be;

//       text-align: center;
//       line-height: 3.9rem;
//     }
//     .join-card-text {
//       font-size: 2.4rem;
//       font-weight: 700;
//       line-height: 3.6rem;
//       color: #181a2a;
//     }
//     .join-card-date {
//       font-size: 1.4rem;
//       font-weight: 400;
//       line-height: 2.673rem;
//       color: #444444;
//       width: 13.2rem;
//       height: 2.7rem;
//       border-radius: 0 8rem;
//       background-color: #def1ff;
//       text-align: center;
//       line-height: 2.7rem;
//     }
//   }
// }
</style>
