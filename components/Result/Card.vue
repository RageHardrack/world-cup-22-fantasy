<script setup lang="ts">
import { IMatch } from "~~/interfaces";

interface Props {
  header: string;
  matches: IMatch[];
}

defineProps<Props>();
</script>

<template>
  <article class="flex flex-col w-full px-4 border-2 rounded border-color-4 bg-color-6">
    <header class="flex items-center py-2 gap-x-2">
      <div class="w-2 h-2 rounded-full bg-color-4" />
      <h3 class="text-xl">{{ header }}</h3>
    </header>

    <ul class="flex flex-col w-full pb-8 divide-y-2 divide-color-4/30">
      <ResultItem v-for="match in matches" :match="match" />
    </ul>
  </article>
</template>
