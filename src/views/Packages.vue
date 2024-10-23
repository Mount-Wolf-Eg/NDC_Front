<template>
  <div>
    <img
      src="/src/assets/packages/package.jpg"
      style="width: 100%"
      alt="package image"
    />
    <div class="container-cust package-sec">
      <h3 class="package-head">{{ $t("packages") }}</h3>
      <p class="package-body">
        {{ $t("package-desc") }}
      </p>

      <div class="package-card">
        <div
          class="package-info"
          v-for="(packag, i) in allPackages"
          :key="i"
          :style="`${i % 2 === 0 ? 'flex-direction: row-reverse' : ''}`"
        >
          <span class="package-card-body w-100" style="flex: 1">
            <p class="package-card-title">{{ packag.name }}</p>
            <div
              class="card d-flex flex-row justify-content-start align-items-start w-100"
              style="gap: 4rem"
            >
              <span>
                <p class="card-title">{{ $t("included-services") }} :</p>
                <ul class="card-list">
                  <li v-for="(ser, j) in packag.included_services" :key="j">
                    {{ ser }}
                  </li>
                </ul>
              </span>
              <span>
                <p class="card-title">{{ $t("target-group") }} :</p>
                <ul class="card-list">
                  <li v-for="(ser, j) in packag.target_group" :key="j">
                    {{ ser }}
                  </li>
                </ul>
              </span>
            </div>
          </span>
          <div style="position: relative; flex: 1">
            <img :src="packag.image" style="width: 100%" alt="package img" />
            <button
              @click="router.push({ name: 'contact' })"
              class="r-more-btn-w"
              style="position: absolute; left: 10px; bottom: 10px"
            >
              {{ $t("contact") }}
            </button>
          </div>
        </div>
      </div>
      <div class="resp-tap">
        <PackagesResponsive :packagesRes="allPackages"></PackagesResponsive>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import PackagesResponsive from "@/components/homeComponent/PackagesResponsive.vue";
import { onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
const router = useRouter();
import { usePackagesStore } from "@/stores/packagesStore";

const { allPackages } = storeToRefs(usePackagesStore());

onMounted(async () => {
  await usePackagesStore().getAllPackages();
});

// const replaceData = (ser) => {
//   return JSON.parse(ser.replace(/'/g, '"'));
// };
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none !important;
  }
}
</style>
