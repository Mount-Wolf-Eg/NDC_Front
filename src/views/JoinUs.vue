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
          <img :src="job?.image" style="width: 100%; height: auto" alt="" />
          <span class="p-3">
            <p class="join-card-title" style="overflow: hidden">
              {{ job.title }}
            </p>
            <p class="join-card-text">
              {{ job.description }}
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

<style lang="scss" scoped>
.join-us {
  .join-sec {
    margin: 5rem 0;
    .join-title {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.9rem;
      text-align: center;
    }
    .join-text {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: center;
      margin: 3rem 0;
    }
    .join-cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .join-card {
        margin-bottom: 3rem;
        border: 1px solid #444444;
        border-radius: 2.4rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        width: 41.4rem;
        height: 50.2rem;
        .join-card-title {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 3rem;
          background-color: #f6f7ff;
          color: #0477be;
          max-width: 70%;
          height: 3.9rem;
          text-align: center;
          line-height: 3.9rem;
        }
        .join-card-text {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 3.6rem;
          color: #181a2a;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .join-card-date {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 2.673rem;
          color: #444444;
          width: 13.2rem;
          height: 2.7rem;
          border-radius: 8px;
          background-color: #def1ff;
          text-align: center;
          line-height: 2.7rem;
        }
      }
    }
  }
}
</style>
