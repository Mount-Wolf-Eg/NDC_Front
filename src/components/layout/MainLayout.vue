<template>
  <div style="display: flex; min-height: 100vh; flex-direction: column">
    <Header></Header>
    <div style="flex: 1">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss" scoped></style>
