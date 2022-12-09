<script setup lang="ts">
import { IPlayer } from "~~/interfaces";
import { POSITION_FANTASY, PositionFantasy } from "~~/constantes";

interface Props {
  jugador: IPlayer;
}

defineProps<Props>();
</script>

<template>
  <li class="flex items-center px-6 py-2 rounded text-color-2 bg-color-3">
    <div class="flex items-center justify-start gap-x-4">
      <div
        class="flex items-center justify-center w-6 h-6 font-bold rounded bg-color-4"
      >
        {{ POSITION_FANTASY[jugador.Posicion as keyof PositionFantasy] }}
      </div>
      <p class="text-2xl">{{ jugador.Name }}</p>
    </div>
  </li>
</template>
