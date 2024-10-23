<template>
  <div style="display: flex; min-height: 100vh; flex-direction: column">
    <Header v-if="!showResponsiveHeader"></Header>
    <ResponsiveHeader v-if="showResponsiveHeader"></ResponsiveHeader>
    <div style="flex: 1">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Header from "./Header.vue";
import ResponsiveHeader from "./ResponsiveHeader.vue";
import Footer from "./Footer.vue";

const showResponsiveHeader = ref(false);

onMounted(() => {
  window.innerWidth <= 992
    ? (showResponsiveHeader.value = true)
    : (showResponsiveHeader.value = false);
}),
  (window.onresize = () => {
    window.innerWidth <= 992
      ? (showResponsiveHeader.value = true)
      : (showResponsiveHeader.value = false);
  });
</script>

<style lang="scss" scoped></style>
