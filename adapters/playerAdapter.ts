import {
  PlayerNotionPropertiesResponse,
  IPlayerProperties,
  PlayerNotionResponse,
  IPlayer,
  PopulateRelationOptions,
} from "~~/interfaces";
import { findRelationById } from "~~/utils";

export const playerPropertiesAdapter = (
  properties: PlayerNotionPropertiesResponse,
  populateOptions: PopulateRelationOptions
): IPlayerProperties => {
  const { countries } = populateOptions;

  return {
    Name: properties.Name.title[0].plain_text,
    Posicion: properties.Posicion.select.name,
    Dorsal: properties.Dorsal.number,
    Pais: findRelationById(countries, properties.Pais?.relation[0]?.id),
  };
};

export const playerAdapter = (
  results: PlayerNotionResponse[],
  populateOptions: PopulateRelationOptions
): IPlayer[] =>
  results.map((player: PlayerNotionResponse) => ({
    id: player.id,
    ...playerPropertiesAdapter(player.properties, populateOptions),
  }));
