<template>
  <div class="rehabilitation">
    <p class="rehabilitation-title">{{ service.name }}</p>
    <div class="rehabilitation-sec-1">
      <p class="reh-title">{{ service.description }}</p>
      <p class="reh-text">
        {{ service.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.rehabilitation {
  .rehabilitation-title {
    font-size: 3.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    line-height: 4.9rem;
    text-align: right;
    background-color: #7aaf44;
    color: #fff;
    border-inline-start: 3rem solid #0477be;
    width: fit-content;
  }
  .rehabilitation-sec-1,
  .rehabilitation-sec-2 {
    .reh-title {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
      text-align: right;
      color: #444444;
    }
    .reh-text {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: right;
      color: #121212;
    }
  }
}
</style>
