<template>
  <main>
    <HeroSection :hero="headerSliders"></HeroSection>
    <Services :about="aboutUs" :services="allServices"></Services>
    <Packages :packages="allPackages"></Packages>
    <Customer
      :metrics="successMetrics"
      :testimonials="testimonialsSliders"
    ></Customer>
    <Questions
      :achievements="achievementsSliders"
      :questions="allQuestions"
    ></Questions>
    <Partners :partners="partnersSliders" :resources="mainResources"></Partners>
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
import { usePackagesStore } from "@/stores/packagesStore";
import { storeToRefs } from "pinia";
const { aboutUs, allServices } = storeToRefs(useStaticPagesStore());
const { allPackages } = storeToRefs(usePackagesStore());
const {
  headerSliders,
  testimonialsSliders,
  successMetrics,
  achievementsSliders,
  partnersSliders,
  mainResources,
  allQuestions,
} = storeToRefs(useSlidersStore());
onMounted(async () => {
  Promise.all([
    await useSlidersStore().getAllSliders(),

    await useStaticPagesStore().getAllStatics(),

    await useStaticPagesStore().getAllServices(),
    await useSlidersStore().getAllQuestions(),
    await usePackagesStore().getAllPackages(),
  ]);
});
</script>

<style lang="scss" scoped></style>
