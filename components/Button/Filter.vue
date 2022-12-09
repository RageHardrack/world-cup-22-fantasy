<script setup lang="ts">
interface Props {
  isActive: boolean;
}
defineProps<Props>();

const emit = defineEmits(["clickButton"])

const clicked = () => {
  emit("clickButton");
}
</script>

<template>
  <button
    class="flex items-center justify-center px-4 py-1 text-sm transition duration-150 ease-in rounded-lg hover:bg-color-4 text-color-5"
    :class="[isActive ? 'bg-color-4 font-semibold' : 'bg-color-1/30']"
    @click="clicked"
  >
    <slot />
  </button>
</template>
