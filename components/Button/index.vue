<script setup lang="ts">
interface Props {
  isSaving?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button
    class="flex px-6 py-2 font-bold rounded-lg text-color-5 bg-color-4 disabled:cursor-not-allowed"
    :disabled="isSaving"
  >
    <Loading v-if="isSaving" />
    <slot v-else />
  </button>
</template>
