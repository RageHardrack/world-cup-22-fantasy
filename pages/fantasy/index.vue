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
      class="flex flex-col justify-center w-full max-w-6xl p-2 space-y-2 overflow-hidden rounded bg-color-2"
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

        <section
          class="flex flex-col items-center justify-between flex-1 w-full h-full space-y-4 overflow-hidden"
        >
          <header class="flex flex-col w-full space-y-4">
            <input
              type="text"
              class="text-4xl bg-transparent text-color-4 placeholder:text-color-3"
              placeholder="Mi Equipo"
            />

            <input
              type="text"
              class="w-full px-4 py-2 text-xl border rounded bg-color-3/30 text-color-4 placeholder:text-color-6/30 border-color-4"
              placeholder="Buscar Jugador"
            />

            <div class="flex items-center justify-between w-full">
              <ButtonFilter :isActive="false">Porteros</ButtonFilter>
              <ButtonFilter :isActive="false">Centrales</ButtonFilter>
              <ButtonFilter :isActive="false">Mediocampo</ButtonFilter>
              <ButtonFilter :isActive="false">Delanteros</ButtonFilter>
              <ButtonFilter :isActive="true">Todos</ButtonFilter>
            </div>
          </header>

          <ul
            class="flex space-y-2 flex-col flex-1 w-full max-h-[680px] min-h-[680px] overflow-hidden over"
          >
            <FantasyJugadorItem />
          </ul>
        </section>
      </section>
    </article>
  </section>
</template>
