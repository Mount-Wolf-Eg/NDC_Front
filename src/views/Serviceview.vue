<template>
  <div class="service mx-auto">
    <div class="flex-col mx-auto" style="width: 90%">
      <img
        src="/src/assets/blog/blog.jpg"
        style="width: 100%; border-radius: 12px !important"
        alt="blog iamge"
      />

      <div
        class="service-btns w-100 py-5 px-4 d-flex flex-row justify-content-start gap-5"
        style="overflow-x: auto; overflow-y: hidden; white-space: nowrap"
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
import singleServicePage from "@/components/local/service/singleServicePage.vue";
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
