<script setup lang="ts">
import { IMatch } from "~~/interfaces";
const { $dayjs } = useNuxtApp();

interface Props {
  match: IMatch;
}

defineProps<Props>();
</script>

<template>
  <li class="grid items-center grid-cols-4 py-4">
    <div class="grid items-center justify-center grid-cols-3 col-span-2">
      <div class="flex items-center justify-end gap-x-2">
        <p>{{ match.Local?.Country || 'Pendiente' }}</p>
        <Flag :countryEN="match.Local?.EN" />
      </div>

      <div class="flex items-center justify-center gap-x-4">
        <span class="flex items-center justify-center w-8 h-8 bg-color-3">
          {{ match.Goles_Local }}
        </span>

        <div class="w-4 h-[1px] bg-black" />

        <span class="flex items-center justify-center w-8 h-8 bg-color-3">
          {{ match.Goles_Visitante }}
        </span>
      </div>

      <div class="flex items-center justify-start gap-x-2">
        <Flag :countryEN="match.Visitante?.EN" />
        <p>{{ match.Visitante?.Country || 'Pendiente' }}</p>
      </div>
    </div>

    <div class="flex items-center justify-center">
      {{ $dayjs(match.Fecha).format("DD MMM YYYY. HH:mm") }} hrs.
    </div>

    <div class="flex items-center justify-center">
      Estadio {{ match.Estadio.Name }}
    </div>
  </li>
</template>
