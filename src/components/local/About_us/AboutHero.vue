<template>
  <div class="about-us" style="overflow: hidden">
    <img
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      "
      src="/src/assets/about_image/aboutimg.jpg"
      alt="about us"
    />
    <div class="about-us-page">
      <div class="about-us-content row">
        <div class="about-us-text col-12 col-sm-6 col-md-7">
          <p class="about-head">
            {{ $t("about-us") }}
          </p>
          <p class="about-title">
            {{ aboutUs.title }}
          </p>
          <p class="about-body">
            {{ aboutUs.content }}
          </p>
        </div>

        <div class="about-us-img col-12 col-sm-6 col-md-5">
          <img
            :src="aboutUs.image"
            style="
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              padding: 3rem;
              border-radius: 12px !important;
            "
            alt="about img"
          />
        </div>
      </div>

      <div class="our-vission-content row">
        <div
          class="our-vission-img col-12 col-sm-6"
          style="padding-inline-end: 3rem"
        >
          <img
            style="
              width: 100%;
              height: 100%;
              max-height: 30rem;
              object-fit: cover;
              object-position: center;
              border-radius: 12px !important;
            "
            :src="ourVission.image"
            alt="ourvission image"
          />
        </div>
        <div class="our-vission-text col-12 col-sm-6">
          <p class="vission-head">{{ $t("vission") }}</p>
          <p class="vission-body">
            {{ ourVission.content }}
          </p>
        </div>
      </div>

      <div class="mission-goals-content row p-3 gap-4">
        <div
          class="mission-goals col-12 col-sm d-flex flex-column justify-content-between"
        >
          <div class="mission-text">
            <p class="mission-head">{{ $t("mission") }}</p>
            <p class="mission-body">
              {{ ourMission.content }}
            </p>
          </div>
          <div class="mission-img">
            <img
              style="
                width: 100%;
                height: 100%;
                max-height: 30rem;
                object-fit: cover;
                object-position: center;
                border-radius: 12px !important;
              "
              :src="ourMission.image"
              alt="about image"
            />
          </div>
        </div>

        <div
          class="mission-goals col-12 col-sm d-flex flex-column justify-content-between"
        >
          <div class="mission-text">
            <p class="mission-head">{{ $t("goals") }}</p>
            <p class="mission-body">
              {{ ourGoals.content }}
            </p>
          </div>
          <div class="mission-img">
            <img
              style="
                width: 100%;
                height: 100%;
                max-height: 30rem;
                object-fit: cover;
                object-position: center;
                border-radius: 12px !important;
              "
              :src="ourGoals.image"
              alt="about image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- our values -->
    <div class="our-values">
      <p class="values-head mx-auto">{{ $t("values") }}</p>

      <div class="our-values-content flex-r flex-wrap">
        <div
          class="values-card h-100"
          v-for="(val, i) in ourValues.slice(-6)"
          :key="i"
        >
          <div
            class="values-content flex-c justify-content-betweeen align-items-center text-center"
          >
            <img
              :src="val.image"
              style="width: 5rem; height: 5rem"
              :alt="val.description"
            />

            <p class="card-title">{{ val.title }}</p>
            <p class="card-body">
              {{ val.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStaticPagesStore } from "@/stores/staticPages";
import { useSlidersStore } from "@/stores/Sliders";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const { ourValues } = storeToRefs(useSlidersStore());
const { aboutUs, ourGoals, ourMission, ourVission } = storeToRefs(
  useStaticPagesStore()
);

onMounted(async () => {
  await useStaticPagesStore().getAllStatics();
  await useSlidersStore().getAllSliders();
});
</script>

<style lang="scss" scoped></style>
