<script setup lang="ts">
import { FILTER_FANTASY_OPTIONS } from "~~/constantes";

const { data, pending } = useLazyAsyncData("fantasy-team", () =>
  $fetch("/api/user-teams")
);

const { data: jugadores, pending: jugadoresLoading } = useLazyAsyncData(
  "jugadores",
  () => $fetch("/api/players/user-players")
);

const myTeamName = ref(data!.value!.Equipo);
const selectedFilter = ref("Todos");

const myPlayerList = computed(() =>
  jugadores.value?.filter((jugador) => {
    return selectedFilter.value === "Todos"
      ? jugador
      : jugador.Posicion === selectedFilter.value;
  })
);
const myFormation = ref();

const selectFilter = (newValue: string) => {
  selectedFilter.value = newValue;
};

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section class="flex flex-col items-center justify-center w-full">
    <Loading v-if="pending" />

    <article
      class="flex flex-col justify-center w-full max-w-6xl p-2 space-y-2 overflow-hidden rounded bg-color-2"
      v-else
    >
      <header class="w-full py-2 text-center rounded bg-color-4">
        <h2 class="text-3xl">Formaciones</h2>
      </header>

      <section class="flex items-center justify-center gap-x-2">
        <picture class="relative flex-1">
          <img
            src="/img/campo_futbol.png"
            atl="Campo de Fútbol"
            class="w-full"
          />

          <div class="absolute -translate-x-1/2 bottom-10 left-1/2">
            <FantasyJugadorTitular />
          </div>

          <div
            class="absolute flex w-full -translate-x-1/2 justify-evenly bottom-1/4 left-1/2"
          >
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
          </div>

          <div
            class="absolute flex w-full -translate-x-1/2 justify-evenly bottom-2/4 left-1/2"
          >
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
          </div>

          <div
            class="absolute flex w-full -translate-x-1/2 justify-evenly bottom-3/4 left-1/2"
          >
            <FantasyJugadorTitular />
            <FantasyJugadorTitular />
          </div>
        </picture>

        <section
          class="flex flex-col items-center justify-between flex-1 w-full h-full space-y-4 overflow-hidden"
        >
          <header class="flex flex-col w-full space-y-4">
            <input
              type="text"
              class="text-4xl bg-transparent text-color-4 placeholder:text-color-3"
              placeholder="Mi Equipo"
              v-model="myTeamName"
            />

            <input
              type="text"
              class="w-full px-4 py-2 text-xl border rounded bg-color-3/30 text-color-4 placeholder:text-color-6/30 border-color-4"
              placeholder="Buscar Jugador"
            />

            <div class="flex items-center justify-between w-full">
              <ButtonFilter
                v-for="option in FILTER_FANTASY_OPTIONS"
                :key="option"
                :isActive="selectedFilter === option"
                @clickButton="selectFilter(option)"
              >
                {{ option }}
              </ButtonFilter>
            </div>
          </header>

          <ul
            class="flex space-y-2 flex-col flex-1 w-full max-h-[680px] min-h-[680px] overflow-hidden overscroll-auto"
          >
            <Loading v-if="jugadoresLoading" />

            <FantasyJugadorItem
              v-for="jugador in myPlayerList"
              :key="jugador.id"
              :jugador="jugador"
              v-else
            />
          </ul>
        </section>
      </section>
    </article>
  </section>
</template>
