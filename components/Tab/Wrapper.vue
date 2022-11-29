<script setup lang="ts">
import { RESULTS_TABS } from "~~/constantes";
import { useUIStore } from "~~/store";

const store = useUIStore();
</script>

<template>
  <section class="flex flex-col items-center justify-center w-full space-y-6">
    <header class="flex items-center justify-start w-full gap-x-4">
      <ButtonTab
        v-for="etapa in RESULTS_TABS"
        :key="etapa"
        @click="store.selectTab(etapa)"
        :class="{ 'bg-color-4': store.getSelectedTab.value === etapa }"
      >
        {{ etapa }}
      </ButtonTab>
    </header>

    <TransitionGroup name="fade" tag="section" class="w-full">
      <slot />
    </TransitionGroup>
  </section>
</template>
