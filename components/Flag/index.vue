<script setup lang="ts">
interface Props {
  countryEN: string;
}

defineProps<Props>();
</script>

<template>
  <img class="w-8 h-8" :src="`/flags/${countryEN}.png`" />
</template>
