import { ICountry } from "./Country";
import {
  DateProperty,
  NumberProperty,
  Parent,
  SelectProperty,
  TedBy,
  TitleProperty,
  RelationProperty,
} from "./Shared";
import { IStadium } from "./Stadium";

export interface IMatch {
  id: string;
  Estadio: IStadium;
  Visitante?: ICountry;
  Fecha: string;
  Grupo?: string;
  Local?: ICountry;
  Goles_Visitante: number;
  Goles_Local: number;
  Partido: string;
}

export interface MatchNotionResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover?: string;
  icon?: string;
  parent: Parent;
  archived: boolean;
  properties: MatchNotionPropertiesResponse;
  url: string;
}

export interface MatchNotionPropertiesResponse {
  Estadio: RelationProperty;
  Visitante?: RelationProperty;
  Fecha: DateProperty;
  Grupo?: SelectProperty;
  Local?: RelationProperty;
  Goles_Visitante: NumberProperty;
  Goles_Local: NumberProperty;
  Partido: TitleProperty;
}

export interface IMatchProperties {
  Estadio: IStadium;
  Visitante?: ICountry;
  Fecha: string;
  Grupo?: string;
  Local?: ICountry;
  Goles_Visitante: number;
  Goles_Local: number;
  Partido: string;
}
