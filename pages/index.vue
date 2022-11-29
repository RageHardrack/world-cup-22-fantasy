<script setup lang="ts">
const { data: groups, pending: groupsLoading } = useLazyAsyncData(
  "matches",
  () => $fetch("/api/matches/groups")
);

const { data: octavos, pending: octavosLoading } = useLazyAsyncData(
  "matches",
  () => $fetch("/api/matches/octavos")
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

      <Tab title="Cuartos" :isLoading="false">Cuartos</Tab>

      <Tab title="Semifinal" :isLoading="false">Semifinal</Tab>

      <Tab title="3° y 4° Puesto" :isLoading="false">
        Tercer y cuarto puesto
      </Tab>

      <Tab title="Final" :isLoading="false">Final</Tab>
    </TabWrapper>
  </div>
</template>
