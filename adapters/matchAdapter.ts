import {
  MatchNotionPropertiesResponse,
  IMatchProperties,
  MatchNotionResponse,
  IMatch,
  PopulateRelationOptions,
} from "~~/interfaces";
import { findRelationById } from "~~/utils";

export const matchPropertiesAdapter = (
  properties: MatchNotionPropertiesResponse,
  populateOptions: PopulateRelationOptions
): IMatchProperties => {
  const { stadiums, countries } = populateOptions;

  return {
    Partido: properties.Partido.title[0].plain_text,
    Fecha: properties.Fecha.date.start,
    Grupo: properties.Grupo?.select.name,
    Goles_Visitante: properties.Goles_Visitante.number,
    Goles_Local: properties.Goles_Local.number,
    Local: findRelationById(countries, properties.Local.relation[0].id),
    Visitante: findRelationById(countries, properties.Visitante.relation[0].id),
    Estadio: findRelationById(stadiums, properties.Estadio.relation[0].id),
  };
};

export const matchAdapter = (
  results: MatchNotionResponse[],
  populateOptions: PopulateRelationOptions
): IMatch[] =>
  results.map((match: MatchNotionResponse) => ({
    id: match.id,
    ...matchPropertiesAdapter(match.properties, populateOptions),
  }));
