<script setup lang="ts">
import { FOOTER_LINKS } from "~~/constantes";
</script>

<template>
  <footer class="bg-color-2 flex py-6 w-full">
    <div class="container flex items-center">
      <Logo class="w-48" />

      <ul
        class="flex flex-col items-center justify-center text-color-4 space-y-4 flex-1"
      >
        <li>
          FullStack Web Developer | Daniel Colmenares |
          <a
            class="hover:underline"
            target="_blank"
            rel="nofollow"
            :href="FOOTER_LINKS['daniel']"
            >Sitio Web</a
          >
        </li>
        <li>
          UI Designer | Selene Navas |
          <a
            class="hover:underline"
            target="_blank"
            rel="nofollow"
            :href="FOOTER_LINKS['selene']"
            >Behance</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
