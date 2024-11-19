<template>
  <div class="join-us">
    <img
      src="/src/assets/joinUs/join-us.jpg"
      alt="join us"
      style="width: 100%; height: auto"
    />
    <div class="join-sec mx-auto">
      <div class="container-cust">
        <p class="join-title">{{ $t("join-family") }}</p>
        <p class="join-text">
          {{ $t("join-family-desc") }}
        </p>
      </div>

      <div class="join-cards" style="width: 88%; margin: 0 auto">
        <div
          v-for="(job, i) in allCareers"
          :key="i"
          class="join-card"
          style="overflow: hidden"
          @click="router.push({ name: 'joinForm', query: { job: job.id } })"
        >
          <img
            :src="job?.image"
            class="card-img"
            style="
              width: 100%;
              height: auto;
              object-fit: cover;
              object-position: center;
            "
            alt="job image"
          />
          <span
            class="p-3 card-sec d-flex flex-column justify-content-between align-items-start"
          >
            <p class="join-card-title" style="overflow: hidden">
              {{ $t("job-name") }}
            </p>
            <p class="join-card-text">
              {{ job.title }}
            </p>
            <p class="join-card-date">
              {{ moment(new Date(job?.created_at)).format("DD-MM-YYYY") }}
            </p>
          </span>
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
