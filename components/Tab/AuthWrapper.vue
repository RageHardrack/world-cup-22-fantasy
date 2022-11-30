<script setup lang="ts">
import { useUIStore } from "~~/store";

const store = useUIStore();
</script>

<template>
  <section
    class="flex flex-col items-center justify-center w-full max-w-lg space-y-6"
  >
    <TransitionGroup name="fade" tag="section" class="w-full">
      <TabAuth tab="Iniciar Sesión">
        <p @click="store.selectAuthTab('Registarse')" class="cursor-pointer">
          ¿No tienes una cuenta? ¡Regístrarte!
        </p>
      </TabAuth>

      <TabAuth tab="Registarse">
        <p
          @click="store.selectAuthTab('Iniciar Sesión')"
          class="cursor-pointer"
        >
          ¿Ya tienes una cuenta? Inicia sesión!
        </p>
      </TabAuth>
    </TransitionGroup>
  </section>
</template>
