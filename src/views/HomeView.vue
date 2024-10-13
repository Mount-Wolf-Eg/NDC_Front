<template>
  <main>
    <HeroSection :hero="headerSliders"></HeroSection>
    <Services :about="aboutUs" :services="allServices"></Services>
    <Packages></Packages>
    <Customer :metrics="successMetrics"></Customer>
    <Questions></Questions>
    <Partners></Partners>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HeroSection from "@/components/homeComponent/HeroSection.vue";
import Services from "@/components/homeComponent/Services.vue";
import Packages from "@/components/homeComponent/Packages.vue";
import Customer from "@/components/homeComponent/Customer.vue";
import Questions from "@/components/homeComponent/Questions.vue";
import Partners from "@/components/homeComponent/Partners.vue";

import { useSlidersStore } from "@/stores/Sliders";
import { useStaticPagesStore } from "@/stores/staticPages";
import { storeToRefs } from "pinia";
const {
  headerSliders,
  testimonialsSliders,
  successMetrics,
  achievementsSliders,
  partnersSliders,
  mainResources,
} = storeToRefs(useSlidersStore());
const { aboutUs, allServices } = storeToRefs(useStaticPagesStore());
onMounted(async () => {
  await useSlidersStore().getAllSliders();
  await useStaticPagesStore().getAllStatics();
  await useStaticPagesStore().getAllServices();
});
</script>

<style lang="scss" scoped></style>
