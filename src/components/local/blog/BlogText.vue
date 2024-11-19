<template>
  <div class="blog-txt mx-auto">
    <div class="flex-c mx-auto" style="width: 90%">
      <div style="position: relative">
        <img
          class="m-img"
          src="/src/assets/blog/blogheader.jpg"
          alt="blog iamge"
          style="width: 100%; margin: 5rem 0; border-radius: 12px"
        />
        <div class="blog-info flex-c justify-content-between pt-5 pb-3 w-75">
          <p class="blog-info-title text-center">{{ post.category?.name }}</p>
          <p class="blog-info-body mx-auto w-75">
            {{ post?.title }}
          </p>
          <p class="blog-info-foot mx-auto text-center">
            {{ moment(new Date(post?.created_at)).format("DD-MM-YYYY") }}
          </p>
        </div>
      </div>
      <div
        class="blog-text w-100 row flex-column-reverse flex-sm-row"
        style="margin: 15rem auto 5rem"
      >
        <div class="col-12 col-sm-9 blog-body px-3">{{ post.content }}</div>
        <div class="col-6 my-5 mx-auto col-sm-3">
          <img
            class="mid-img"
            :src="post?.image"
            alt="blog image"
            style="
              width: 100%;
              height: 100%;
              object-fit: contain;
              object-position: top;
            "
          />
        </div>
      </div>
      <div class="row">
        <img
          :src="post.category?.image"
          alt="blog iamge"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          "
        />
      </div>
      <!-- <img
        src="/src/assets/blog/blogheader.jpg"
        alt="blog iamge"
        style="width: 100%; margin: 5rem 0"
      /> -->
      <div class="blog-latest w-100">
        <p class="blog-latest-info">{{ $t("Recent-published") }}</p>

        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="w-100 h-100"
          :modules="modules"
          :pagination="{
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
          }"
          :slides-per-view="1"
          :Autoplay="{
            delay: 1000,
            disableOnInteraction: true,
            waitForTransition: true,
          }"
          :space-between="10"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :preload-images="false"
          :breakpoints="breakpoints"
          :Lazy="true"
        >
          <swiper-slide
            v-for="(blog, i) in [
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
              ...postsByBlog,
            ]"
            :key="i"
          >
            <div class="question-card">
              <div
                class="join-cards bg-info d-flex flex-row flex-wrap gap-4 align-items-center justify-content-center"
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
                      style="
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        object-position: center;
                        max-width: 75%;
                      "
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
                        moment(new Date(post.created_at)).format("DD-MM-YYYY")
                      }}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
          <!-- <div class="swiper-pagination"></div> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
import { useBlogStore } from "@/stores/blogStore";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import moment from "moment";

const route = useRoute();
const router = useRouter();
const currentCard = ref(0);
const { post, postsByBlog } = storeToRefs(useBlogStore());

const show = ref(false);
onBeforeMount(async () => {
  await useBlogStore().getPost({ id: route.query.post });
  if (post.value.length == 0) {
    router.push({ name: "blog" });
    show.value = true;
  }
  await useBlogStore().getPostsByCategory({ category_id: 1 });
});

const chagnePost = (id) => {
  router.push({
    name: "blogDetails",
    query: { post: id },
  });
};
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  375: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  575: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1000: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss" scoped></style>
