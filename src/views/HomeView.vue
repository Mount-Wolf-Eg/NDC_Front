<template>
  <main>
    <HeroSection></HeroSection>
    <Services></Services>
    <Packages></Packages>
    <Customer></Customer>
    <Questions></Questions>
    <Partners></Partners>
  </main>
</template>

<script setup>
// import { onMounted, ref } from "vue";
import HeroSection from "@/components/homeComponent/HeroSection.vue";
import Services from "@/components/homeComponent/Services.vue";
import Packages from "@/components/homeComponent/Packages.vue";
import Customer from "@/components/homeComponent/Customer.vue";
import Questions from "@/components/homeComponent/Questions.vue";
import Partners from "@/components/homeComponent/Partners.vue";

// import { useSlidersStore } from "@/stores/Sliders";
// import { useStaticPagesStore } from "@/stores/StaticPages";
// onMounted(() => {
//   useSlidersStore().getAllSliders();
//   useStaticPagesStore().getAllStatics();
// });
</script>

<style lang="scss" scoped></style>
