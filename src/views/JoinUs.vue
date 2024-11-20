<template>
  <div class="join-us">
    <img
      src="/src/assets/joinUs/join-us.jpg"
      alt="join us"
      style="
        width: 100%;
        height: auto;
        max-height: 50vh;
        object-fit: cover;
        object-position: center;
      "
    />
    <div class="join-sec mx-auto">
      <div class="container-cust">
        <p class="join-title">{{ $t("join-family") }}</p>
        <p class="join-text">
          {{ $t("join-family-desc") }}
        </p>
      </div>

      <div class="join-cards gap-4" style="width: 90%; margin: 0 auto">
        <div
          v-for="(job, i) in allCareers"
          :key="i"
          class="join-card"
          style="overflow: hidden"
          @click="router.push({ name: 'joinForm', query: { job: job.id } })"
        >
          <div class="card-img">
            <img :src="job?.image" alt="job image" />
          </div>

          <div class="card-sec">
            <p class="join-card-title" style="overflow: hidden">
              {{ $t("job-name") }}
            </p>
            <p class="join-card-text">
              {{ job.title }}
            </p>
            <p class="join-card-date">
              {{ moment(new Date(job?.created_at)).format("DD-MM-YYYY") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCareersStore } from "@/stores/careersStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { allCareers } = storeToRefs(useCareersStore());

import moment from "moment";

onMounted(async () => {
  await useCareersStore().getAllCareers();
});
const router = useRouter();
</script>

<style lang="scss" scoped></style>
