<template>
  <div
    style="
      min-height: 86.9rem;
      background-color: #def1ff;
      border-top: 1.2rem solid #0477be;
      display: flex;
      flex-direction: column;
    "
  >
    <div style="position: relative; height: 40rem">
      <div class="float-info mx-auto d-flex flex-row gap-0 h-100">
        <div
          class="flex-col d-flex flex-column justify-content-between align-items-center"
          style="flex: 1"
        >
          <h3 class="float-head mb-5">
            {{ about.title }}
          </h3>

          <p class="float-body mb-5">
            {{ about.description }}
          </p>

          <button
            class="r-more-btn-c text-center"
            @click="router.push({ name: 'about' })"
          >
            شاهد المزيد
          </button>
        </div>

        <div
          style="
            width: 100%;
            height: 100%;
            flex: 1;
            text-align: center;
            overflow: hidden;
          "
        >
          <img
            v-if="about.image"
            :src="about.image"
            alt="business img "
            style="height: 100%; width: auto"
          />
        </div>
      </div>
    </div>

    <div
      class="container-cust h-100 text-center"
      style="padding-top: 5rem; padding-bottom: 5rem; height: 50%"
    >
      <h4
        style="
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 4.9rem;
          text-align: center;
          margin-bottom: 2rem;
        "
      >
        الخدمات
      </h4>
      <div class="serv-card w-100">
        <div class="serv-card-item">
          <div class="s-card" v-for="(serv, i) in services" :key="i">
            <img
              style="width: 10.4rem; min-width: 20rem; height: auto"
              :src="serv.image"
              alt="service img"
            />
            <p class="serv-head">{{ serv.name }}</p>
            <p class="serv-body">
              {{ serv.description }}
            </p>
            <button
              class="r-more-btn-w"
              @click="
                router.push({
                  name: 'service',
                  query: { service: serv.id },
                })
              "
            >
              شاهد المزيد
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  about: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
  services: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
