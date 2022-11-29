<script setup lang="ts">
defineProps();
</script>

<template>
  <button class="text-color-5 border border-color-4 rounded-lg flex py-1 px-4 min-w-[120px] font-bold items-center justify-center text-sm">
    <slot />
  </button>
</template>