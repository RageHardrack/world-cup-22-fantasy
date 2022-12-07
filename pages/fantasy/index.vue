<script setup lang="ts">
const { data, pending } = useLazyAsyncData("fantasy-team", () =>
  $fetch("/api/user-teams")
);
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section class="flex flex-col items-center justify-center w-full">
    <article
      class="flex flex-col justify-center w-full max-w-6xl p-2 space-y-2 rounded bg-color-2"
    >
      <header class="w-full py-2 text-center rounded bg-color-4">
        <h2 class="text-3xl">Formaciones</h2>
      </header>

      <section class="flex items-center justify-center gap-x-2">
        <picture class="flex-1">
          <img
            src="/img/campo_futbol.png"
            atl="Campo de Fútbol"
            class="w-full"
          />
        </picture>

        <section class="flex flex-col items-center justify-between flex-1 w-full h-full">
          <header class="flex flex-col w-full space-y-2">
            <input
              type="text"
              class="bg-transparent text-color-4 placeholder:text-color-3"
              placeholder="Mi Equipo"
            />

            <div class="flex">
              <input
                type="text"
                class="bg-transparent text-color-4 placeholder:text-color-3"
                placeholder="Buscar Jugador"
              />
              Buscar
            </div>

            <div class="flex w-full">
              <ButtonTab>Porteros</ButtonTab>
              <ButtonTab>Centrales</ButtonTab>
              <ButtonTab>Mediocampo</ButtonTab>
              <ButtonTab>Delanteros</ButtonTab>
            </div>
          </header>

          <ul class="flex-1 h-full">
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
          </ul>
        </section>
      </section>
    </article>
  </section>
</template>
