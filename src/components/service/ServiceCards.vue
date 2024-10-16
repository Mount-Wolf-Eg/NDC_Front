<template>
  <div>
    <img
      src="/src/assets/about_image/aboutimg.jpg"
      style="width: 100%; height: auto"
      alt="service image"
      class="mb-5"
    />
    <div
      class="container-cust h-100 text-center"
      style="
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-bottom: 5rem;
      "
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
      <div
        class="serv-card d-flex justify-content-between align-items-center w-100"
      >
        <div v-for="(serv, i) in allServices" :key="i">
          <img
            :src="serv.image"
            alt="service img"
            style="width: 10.4rem; height: 10.4rem"
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
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { storeToRefs } from "pinia";
import { useStaticPagesStore } from "@/stores/staticPages";
const { allServices } = storeToRefs(useStaticPagesStore());
</script>

<style lang="scss" scoped>
.serv-card {
  height: 40rem;
  div {
    width: 34.8rem;
    height: 37.2rem;
    padding: 2.8rem 3rem;
    gap: 4px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    transition: all 0.2s step-start;
    &:hover {
      background-color: #fff;
      border-radius: 12px;
      height: 40rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    &:hover .r-more-btn-w {
      background-color: #eee !important;
    }
  }

  .serv-head {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    text-align: center;
  }
  .serv-body {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3.07rem;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
