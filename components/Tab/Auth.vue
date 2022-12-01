<script setup lang="ts">
import { useUIStore } from "~~/store";

interface Props {
  tab: string;
}

defineProps<Props>();

const store = useUIStore();
</script>

<template>
  <article
    class="flex flex-col w-full p-4 border-2 rounded border-color-4 bg-color-6"
    v-show="tab === store.selectedAuthTab"
  >
    <header class="flex items-center gap-x-2">
      <div class="w-2 h-2 rounded-full bg-color-4" />
      <h3 class="text-xl">{{ tab }}</h3>
    </header>

    <section class="flex flex-col space-y-4">
      <slot />
    </section>
  </article>
</template>
