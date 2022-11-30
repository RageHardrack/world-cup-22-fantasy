<script setup lang="ts">
useHead({
  title: "World Cup 22' Fantasy | Auth",
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-between min-h-screen overflow-hidden max-w-screen"
  >
    <header class="w-full">
      <Navbar />
    </header>

    <main class="flex-1 w-full py-8">
      <slot />
    </main>

    <Footer />
  </div>
</template>
