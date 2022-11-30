<script setup lang="ts">
interface Props {
  route: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="route" class="flex px-6 py-2 font-bold rounded-lg text-color-5 bg-color-4">
    <slot />
  </NuxtLink>
</template>
