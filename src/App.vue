<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainLayout from "./components/layout/MainLayout.vue";
import LoadingPage from "./views/LoadingPage.vue";
import { onMounted, ref } from "vue";
import { useSlidersStore } from "./stores/Sliders";
import { storeToRefs } from "pinia";
const { start } = storeToRefs(useSlidersStore());

onMounted(() => {
  if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "ar");
});
</script>

<template>
  <main
    v-if="!start"
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      background-color: #fff;
    "
  >
    <LoadingPage></LoadingPage>
  </main>
  <main style="flex: 1">
    <MainLayout>
      <RouterView />
    </MainLayout>
  </main>
</template>

<style scoped></style>
