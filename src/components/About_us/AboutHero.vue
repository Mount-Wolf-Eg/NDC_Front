<template>
  <div class="about-hero">
    <img
      src="/src/assets/about_image/aboutimg.jpg"
      alt="about us"
      style="width: 100%; height: auto"
    />
    <div class="about-hint container-cust">
      <div class="text-sec">
        <p
          style="
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 3.6rem;
            text-align: right;
            background-color: #def1ff;
            width: 27.2rem;
            height: 5.6rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 1rem;
          "
        >
          نبذه عنا
        </p>
        <p class="bdy">
          {{ aboutUs.title }}
        </p>
        <p
          style="
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 3.454rem;
            text-align: right;
            cursor: pointer;
          "
        >
          {{ aboutUs.content }}
        </p>
      </div>
      <div class="img-sec">
        <img
          src="/src/assets/about_image/bgimg.png"
          style="width: 100%; height: auto"
          alt="bg image"
        />
        <img
          :src="aboutUs.image"
          alt="about img"
          style="
            position: absolute;
            top: 20%;
            left: 50%;
            width: 100%;
            transform: translatex(-50%);
          "
        />
      </div>
    </div>
    <!-- vission -->
    <div class="vission flex-col gap-5 container-cust">
      <!-- first -->

      <div class="flex-row vission-card p-5">
        <div
          class="vission-img d-flex justify-content-center gap-5 align-items-center"
          style="width: 50%"
        >
          <img
            :src="ourVission.image"
            alt="ourvission image"
            style="width: 100%; border-radius: 16px"
          />
        </div>
        <div class="vission-text flex-col align-items-start" style="width: 50%">
          <p class="v-text mx-5">رؤيــتــنــا</p>
          <p
            class="v-text-body mx-5"
            style="height: 50rem; overflow: auto; cursor: pointer"
          >
            {{ ourVission.content }}
          </p>
        </div>
      </div>

      <div class="flex-row flex-wrap flex-md-nowrap gap-5">
        <div class="flex-col vission-card p-5">
          <div class="vission-text flex-col align-items-start" style="flex: 1">
            <p class="v-text">مهمتنا</p>
            <p
              class="v-text-body"
              style="height: 50rem; overflow: auto; cursor: pointer"
            >
              {{ ourMission.content }}
            </p>
          </div>
          <div
            class="vission-img d-flex justify-content-center align-items-center"
            style="flex: 1"
          >
            <img
              :src="ourMission.image"
              alt="about image"
              style="width: 100%"
            />
          </div>
        </div>

        <div class="flex-col vission-card p-5">
          <div class="vission-text flex-col align-items-start" style="flex: 1">
            <p class="v-text">أهدفنا</p>
            <p
              class="v-text-body"
              style="height: 50rem; overflow: auto; cursor: pointer"
            >
              {{ ourGoals.content }}
            </p>
          </div>
          <div
            class="vission-img d-flex justify-content-center align-items-center"
            style="flex: 1"
          >
            <img :src="ourGoals.image" alt="about image" style="width: 100%" />
          </div>
        </div>
      </div>

      <!-- second -->
    </div>
    <!-- our values -->
    <div class="values">
      <p class="v-text">قيمنا</p>
      <div class="value-sec container-cust">
        <!-- v -card  -->
        <div
          style="border: 1px solid #0477be; border-radius: 16px"
          v-for="(val, i) in ourValues.slice(-6)"
          :key="i"
        >
          <div class="value-card">
            <img
              :src="val.image"
              :alt="val.description"
              style="width: 5.1rem; height: 5rem"
            />

            <p class="value-title" style="cursor: pointer">{{ val.title }}</p>
            <p class="value-body" style="cursor: pointer">
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

<style lang="scss" scoped>
.about-hero {
  .about-hint {
    padding: 10rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 10rem;
    .text-sec {
      flex: 1;
      .bdy {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 4.9rem;
        text-align: right;
      }
    }
    .img-sec {
      position: relative;
    }
  }

  .vission {
    .vission-card {
      border-radius: 24px;
      background-color: #def1ff;
      .v-text {
        width: 27.2rem;
        height: 5.6rem;
        padding: 10px 16px 10px 30px;
        border-radius: 8px;
        background-color: #fff;
        font-size: 2.4rem;
        font-weight: 700;
        color: #444444;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .v-text-body {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 5rem;
        text-align: right;
        margin: 2rem 0;
      }
    }
  }

  .values {
    margin-top: 7rem;
    background-color: #def1ff;
    padding: 5rem;
    .v-text {
      cursor: pointer;
      margin: 0 auto;
      width: 27.2rem;
      height: 5.6rem;
      padding: 10px 16px 10px 30px;
      border-radius: 8px;
      background-color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      color: #444444;
      line-height: 3.6rem;
      text-align: center;
    }
    .value-sec {
      gap: 3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 5rem auto;

      .value-card {
        background-color: #fff;
        border-radius: 16px;
        margin: 1rem;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 42.8rem;
        height: 23.8rem;

        .value-title {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 3.6rem;
          text-align: center;
        }
        .value-body {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 3rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
