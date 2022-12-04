<script setup lang="ts">
const { data, pending } = useLazyAsyncData("fantasy-team", () =>
  $fetch("/api/user-teams")
);
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section class="container">
    <h1>Fantasy</h1>
    <h2>Próximamente</h2>

    {{ data }}
  </section>
</template>
