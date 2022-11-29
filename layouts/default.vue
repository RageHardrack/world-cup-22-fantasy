<script setup lang="ts">
const { meta } = useRoute();

useHead({
  title: `World Cup 22' Fantasy | ${meta.title}`,
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-between min-h-screen overflow-hidden max-w-screen"
  >
    <header class="w-full">
      <Navbar />
      <Banner />
    </header>

    <main class="flex-1 w-full py-8">
      <slot />
    </main>

    <Footer />
  </div>
</template>
