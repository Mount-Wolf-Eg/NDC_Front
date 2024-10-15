<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainLayout from "./components/layout/MainLayout.vue";
import { onMounted } from "vue";
onMounted(() => {
  if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "ar");
});
</script>

<template>
  <main style="flex: 1">
    <MainLayout>
      <RouterView />
    </MainLayout>
  </main>
</template>

<style scoped></style>
