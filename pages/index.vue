<script setup lang="ts">
import { useUIStore } from "~~/store";

const store = useUIStore();

const { data: groups, pending: groupsLoading } = useLazyAsyncData(
  "matches",
  () => $fetch("/api/matches/groups")
);

const { data: octavos, pending: octavosLoading } = useLazyAsyncData(
  "octavos",
  () => $fetch("/api/matches/octavos")
);

const { data: cuartos, pending: cuartosLoading } = useLazyAsyncData(
  "cuartos",
  () => $fetch("/api/matches/cuartos")
);

const { data: semifinals, pending: semifinalsLoading } = useLazyAsyncData(
  "semifinals",
  () => $fetch("/api/matches/semifinals")
);

const { data: thirdPlace, pending: thirdPlaceLoading } = useLazyAsyncData(
  "thirdPlace",
  () => $fetch("/api/matches/third-place")
);

const { data: final, pending: finalLoading } = useLazyAsyncData("final", () =>
  $fetch("/api/matches/final")
);

definePageMeta({
  title: "Resultados",
});
</script>

<template>
  <div
    class="container flex flex-col items-center justify-center w-full space-y-6"
  >
    <TabWrapper>
      <Tab title="Fase de Grupos" :isLoading="groupsLoading">
        <ResultCard
          header="Grupo A"
          :matches="groups!.filter((match) => match.Grupo === 'A')"
        />
        <ResultCard
          header="Grupo B"
          :matches="groups!.filter((match) => match.Grupo === 'B')"
        />
        <ResultCard
          header="Grupo C"
          :matches="groups!.filter((match) => match.Grupo === 'C')"
        />
        <ResultCard
          header="Grupo D"
          :matches="groups!.filter((match) => match.Grupo === 'D')"
        />
        <ResultCard
          header="Grupo E"
          :matches="groups!.filter((match) => match.Grupo === 'E')"
        />
        <ResultCard
          header="Grupo F"
          :matches="groups!.filter((match) => match.Grupo === 'F')"
        />
        <ResultCard
          header="Grupo G"
          :matches="groups!.filter((match) => match.Grupo === 'G')"
        />
        <ResultCard
          header="Grupo H"
          :matches="groups!.filter((match) => match.Grupo === 'H')"
        />
      </Tab>

      <Tab title="Octavos" :isLoading="octavosLoading">
        <ResultCard header="Octavos" :matches="octavos!" />
      </Tab>

      <Tab title="Cuartos" :isLoading="cuartosLoading">
        <ResultCard header="Cuartos" :matches="cuartos!" />
      </Tab>

      <Tab title="Semifinal" :isLoading="semifinalsLoading">
        <ResultCard header="Semifinal" :matches="semifinals!" />
      </Tab>

      <Tab title="3° y 4° Puesto" :isLoading="thirdPlaceLoading">
        <ResultCard header="3° y 4° Puesto" :matches="thirdPlace!" />
      </Tab>

      <Tab title="Final" :isLoading="finalLoading">
        <ResultCard header="Final" :matches="final!" />
      </Tab>
    </TabWrapper>
  </div>
</template>
