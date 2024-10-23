<template>
  <div class="terms_conditions package-sec" style="margin: 0rem 8rem">
    <h3 class="package-head my-5">{{ termsConditions.title }}</h3>
    <div class="d-flex flex-row gap-5">
      <div class="col package-body" style="font-size: 1.8rem">
        {{ termsConditions.content }}
      </div>
      <div class="col-4">
        <img
          v-if="termsConditions.image"
          :src="termsConditions.image"
          alt="terms and conditions image"
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStaticPagesStore } from "@/stores/staticPages";
import { storeToRefs } from "pinia";
const { termsConditions } = storeToRefs(useStaticPagesStore());

onMounted(async () => {
  await useStaticPagesStore().getAllStatics();
});
</script>

<style lang="scss" scoped></style>
