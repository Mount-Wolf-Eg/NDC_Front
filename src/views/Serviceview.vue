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
          v-for="(service, i) in allServices"
          :key="i"
          class="service-btn"
          @click="
            router.push({
              name: 'service',
              query: { service: service.id },
            }),
              (currentSlide = service.id)
          "
          :class="`${currentSlide == service.id ? 'active' : ''}`"
        >
          {{ service.name }}
        </button>
      </div>

      <div class="tabs w-100">
        <transition name="fade">
          <singleServicePage :service="singleService"></singleServicePage>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import singleServicePage from "@/components/service/singleServicePage.vue";
const currentSlide = ref(1);
const route = useRoute();
const router = useRouter();

import { useStaticPagesStore } from "@/stores/staticPages";
const { allServices, singleService } = storeToRefs(useStaticPagesStore());

onMounted(async () => {
  await useStaticPagesStore().getSingleService({ id: route.query.service });
  currentSlide.value = route.query.service;
});

watch(
  () => route.query.service,
  async () => {
    currentSlide.value = route.query.service;
    await useStaticPagesStore().getSingleService({ id: route.query.service });
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
