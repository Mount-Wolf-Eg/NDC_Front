<template>
  <div class="blog mx-auto">
    <div class="flex-col mx-auto" style="width: 90%">
      <div style="position: relative">
        <img
          src="/src/assets/blog/blogheader.jpg"
          alt="blog iamge"
          style="width: 100%; margin: 5rem 0"
        />
        <div
          class="blog-info flex-col align-items-center justify-content-between pt-5 pb-3"
        >
          <p class="blog-info-title text-center">{{ post.category?.name }}</p>
          <p class="blog-info-body w-75">
            {{ post?.title }}
          </p>
          <p class="blog-info-foot text-center">
            {{ moment(new Date(post?.created_at)).format("DD-MM-YYYY") }}
          </p>
        </div>
      </div>
      <div
        class="blog-text w-100 row px-3 d-flex flex-column-reverse flex-md-row align-items-center align-items-md-start"
        style="margin: 15rem auto 5rem"
      >
        <div class="col blog-body px-3">{{ post.content }}</div>
        <div class="col-3">
          <img :src="post?.image" alt="blog image" style="width: 100%" />
        </div>
      </div>
      <img
        :src="post.category?.image"
        alt="blog iamge"
        style="width: auto; height: 100%; margin: 5rem 0"
      />
      <!-- <img
        src="/src/assets/blog/blogheader.jpg"
        alt="blog iamge"
        style="width: 100%; margin: 5rem 0"
      /> -->
      <div class="blog-latest w-100">
        <p class="blog-latest-info">{{ $t("Recent-published") }}</p>
        <div class="blog-slider">
          <div class="d-flex flex-row align-items-center">
            <button
              class="nav-btn"
              @click="next"
              style="
                border-radius: 50%;
                background-color: #0477be;
                width: 3.4rem;
                height: 3.4rem;
              "
            >
              <svg
                style="width: 0.8rem; height: 1.2rem"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 -5.24537e-07L8 6L2 12L0.6 10.6L5.2 6L0.600001 1.4L2 -5.24537e-07Z"
                  fill="white"
                />
              </svg>
            </button>

            <div style="width: 90%; margin: 5rem">
              <carousel
                :wrap-around="true"
                :autoplay="1000"
                :transition="500"
                v-model="currentCard"
                :breakpoints="breakpoints"
              >
                <slide v-for="(slide, i) in 20" :key="i">
                  <div
                    v-for="(blog, i) in postsByBlog"
                    :key="i"
                    class="d-flex flex-row flex-wrap gap-4 align-items-center justify-content-center"
                  >
                    <div
                      class="join-card p-0"
                      v-if="blog.category_posts"
                      v-for="(post, j) in blog.category_posts"
                      :key="j"
                      @click="chagnePost(blog.id)"
                    >
                      <div
                        style="
                          overflow: hidden;
                          flex: 1;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          width: 100%;
                        "
                      >
                        <img
                          alt="blog image"
                          style="height: 100%"
                          :src="post.image"
                        />
                      </div>
                      <span
                        class="w-75 mx-auto px-1 d-flex flex-column justify-content-between algin-items-start"
                        style="flex: 1"
                      >
                        <p class="join-card-title" style="overflow: hidden">
                          {{ post.title }}
                        </p>
                        <p class="join-card-text" style="overflow: hidden">
                          {{ post.description }}
                        </p>
                        <p class="join-card-date">
                          {{
                            moment(new Date(post.created_at)).format(
                              "DD-MM-YYYY"
                            )
                          }}
                        </p>
                      </span>
                    </div>
                  </div>
                </slide>

                <!-- <template #addons>
                  <pagination class="custom-pagination" />
                </template> -->
              </carousel>
            </div>

            <button
              class="nav-btn"
              @click="prev"
              style="
                border-radius: 50%;
                width: 3.4rem;
                height: 3.4rem;
                transform: scaleX(-1);
                background-color: #0477be;
              "
            >
              <svg
                style="width: 0.8rem; height: 1.2rem"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 -5.24537e-07L8 6L2 12L0.6 10.6L5.2 6L0.600001 1.4L2 -5.24537e-07Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useBlogStore } from "@/stores/blogStore";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import moment from "moment";

const route = useRoute();
const router = useRouter();
const currentCard = ref(0);
const { post, postsByBlog } = storeToRefs(useBlogStore());

onBeforeMount(async () => {
  await useBlogStore().getPost({ id: route.query.post });
  if (post.value.length == 0) router.push({ name: "blog" });
  await useBlogStore().getPostsByCategory({ category_id: 1 });
});

const next = () => {
  currentCard.value++;
};
const prev = () => {
  currentCard.value--;
};

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});

const chagnePost = (id) => {
  router.push({
    name: "blogDetails",
    query: { post: id },
  });
};
</script>

<style lang="scss" scoped>
.blog {
  .blog-info {
    background-color: #def1ff;
    border-radius: 16px;
    width: 112.4rem;
    height: 31rem;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);

    .blog-info-title {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3.6rem;
    }
    .blog-info-body {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.9rem;
      text-align: center;
    }
    .blog-info-foot {
      width: 13.2rem;
      height: 2.7rem;
      background-color: #fff;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.673rem;
      border-radius: 8px;
    }
  }
  .blog-body {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.454rem;
    text-align: right;
  }
  .blog-latest-info {
    width: 27.2rem;
    height: 5.6rem;
    background-color: #def1ff;
    color: #444444;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    padding-right: 1rem;
    line-height: 5.6rem;
  }
  .join-card {
    margin-bottom: 3rem;
    border: 1px solid #444444;
    border-radius: 24px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin: 3rem 2rem;
    .join-card-title {
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
      height: 2.7rem;
      border-radius: 8px;
      background-color: #def1ff;
      text-align: center;
      line-height: 2.7rem;
    }
  }
}
</style>
