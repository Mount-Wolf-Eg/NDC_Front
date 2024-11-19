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

<style lang="scss" scoped></style>
