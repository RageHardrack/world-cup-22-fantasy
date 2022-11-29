<script setup lang="ts">
import { useUIStore } from "~~/store";

interface Props {
  title: string;
  isLoading: boolean;
}

const { title } = defineProps<Props>();

const store = useUIStore();
</script>

<template>
  <div class="w-full">
    <Loading v-if="isLoading" />

    <section
      class="flex flex-col w-full space-y-4"
      v-else
      v-show="title === store.selectedTab"
    >
      <slot />
    </section>
  </div>
</template>
