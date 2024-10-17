<template>
  <div class="join-cards" style="margin: 3rem auto">
    <div
      class="join-card"
      v-for="(blog, i) in postCard"
      :key="i"
      @click="router.push({ name: 'blogDetails', query: { post: blog.id } })"
    >
      <img
        style="width: 100%; height: auto"
        alt="blog image"
        :src="blog.image"
      />
      <span class="px-1">
        <p class="join-card-title" style="overflow: hidden">{{ blog.name }}</p>
        <p class="join-card-text" style="overflow: hidden">
          {{ blog.description }}
        </p>
        <p class="join-card-date">
          {{ moment(new Date(blog.created_at)).format("DD-MM-YYYY") }}
        </p>
      </span>
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
watch(
  () => props.postCard,
  () => {
    console.log(props.postCard[0].image);
  }
);
</script>

<style lang="scss" scoped>
.join-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .join-card {
    margin-bottom: 3rem;
    border: 1px solid #444444;
    border-radius: 24px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 41.4rem;
    height: 50.2rem;
    .join-card-title {
      // width: 16.2rem;
      width: fit-content;
      padding: 0 0.5rem;
      height: 3.9rem;

      font-size: 1.6rem;
      font-weight: 700;
      line-height: 3rem;
      background-color: #f6f7ff;
      color: #0477be;

      text-align: center;
      line-height: 3.9rem;
    }
    .join-card-text {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
      color: #181a2a;
    }
    .join-card-date {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.673rem;
      color: #444444;
      width: 13.2rem;
      height: 2.7rem;
      border-radius: 8px;
      background-color: #def1ff;
      text-align: center;
      line-height: 2.7rem;
    }
  }
}
</style>
