<template>
  <div class="home-packages-sec">
    <div class="home-info text-center">
      <h3 class="home-package-title">{{ $t("packages") }}</h3>
      <p class="home-package-text">
        {{ $t("package-desc") }}
      </p>
    </div>

    <div class="package-cards container-cust">
      <div
        v-for="(packag, i) in packages"
        class="cards col-12 row"
        :key="i"
        :style="`${i % 2 === 0 ? 'flex-direction: row-reverse' : ''}`"
      >
        <div class="col-12 col-md-6 p-5">
          <p class="card-title">{{ packag.name }}</p>
          <div class="d-flex flex-row algin-items-start gap-3 p-5">
            <span class="card-lists" style="flex: 1">
              <p class="pack-titl">{{ $t("included-services") }}:</p>
              <ul class="d-flex flex-column">
                <li v-for="(ser, j) in packag.included_services" :key="j">
                  {{ ser }}
                </li>
              </ul>
            </span>

            <span class="card-lists" style="flex: 1">
              <p class="pack-titl">{{ $t("target-group") }}:</p>
              <ul class="d-flex flex-column">
                <li v-for="(ser, j) in packag.target_group" :key="j">
                  {{ ser }}
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div style="position: relative" class="col-12 col-md-6 p-0">
          <img
            :src="packag.image"
            alt="package img"
            style="
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            "
          />
          <button
            style="position: absolute; bottom: 1.5rem; right: 1.5rem"
            @click="router.push({ name: 'contact' })"
            class="r-more-btn-w"
          >
            {{ $t("contact") }}
          </button>
        </div>
      </div>
    </div>
    <div class="package-resp-tap" style="display: none">
      <PackagesResponsive :packagesRes="props.packages"></PackagesResponsive>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import PackagesResponsive from "./PackagesResponsive.vue";
import { watch } from "vue";
const router = useRouter();
const props = defineProps({
  packages: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
