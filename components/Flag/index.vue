<script setup lang="ts">
interface Props {
  countryEN?: string;
}

defineProps<Props>();
</script>

<template>
  <img v-if="countryEN" class="w-8 h-8" :src="`/flags/${countryEN}.png`" />
  <div v-else class="w-8 h-8 border border-dashed rounded-full border-color-4/60" />
</template>
