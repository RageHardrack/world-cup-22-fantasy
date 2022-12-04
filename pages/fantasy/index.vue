<script setup lang="ts">
import { useUserStore } from "~~/store";

const userStore = useUserStore();
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section class="container">
    <h1>Fantasy</h1>
    <h2>Próximamente</h2>

    {{ userStore.getUsername }}
  </section>
</template>
