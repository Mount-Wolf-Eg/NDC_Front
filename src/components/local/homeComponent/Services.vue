<template>
  <div class="home-services-sec">
    <div class="text-center">
      <h4 class="service-title">
        {{ $t("services") }}
      </h4>
      <div class="service-cards row">
        <div class="col-6 col-md-3" v-for="(serv, i) in services" :key="i">
          <div class="card flex-c justify-content-between">
            <img
              style="width: 10.4rem; height: 10.4rem"
              :src="serv.image"
              alt="service img"
            />
            <p class="card-title">{{ serv.name }}</p>
            <p class="card-text">
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
              {{ $t("see-more") }}
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
