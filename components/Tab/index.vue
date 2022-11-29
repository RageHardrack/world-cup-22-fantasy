<script setup lang="ts">
interface Props {
  title: string;
  isLoading: boolean;
}

const { title } = defineProps<Props>();

const selectedTab = inject("selectedTab");
</script>

<template>
  <div class="w-full">
    <h2 v-if="isLoading">Loading...</h2>
    <section
      class="flex flex-col w-full space-y-4"
      v-else
      v-show="title === selectedTab"
    >
      <slot />
    </section>
  </div>
</template>
