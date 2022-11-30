import { ICountry } from "./Country";
import { TedBy, Parent, TitleProperty, SelectProperty, NumberProperty, RelationProperty } from "./Shared";

export interface IPlayer {
  id: string;
  Name: string;
  Posicion: string;
  Dorsal: number;
  Pais: ICountry;
}

export interface PlayerNotionResponse {
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
  properties: PlayerNotionPropertiesResponse;
  url: string;
}

export interface PlayerNotionPropertiesResponse {
  Name: TitleProperty;
  Posicion: SelectProperty;
  Dorsal: NumberProperty;
  Pais: RelationProperty;
}

export interface IPlayerProperties {
  Name: string;
  Posicion: string;
  Dorsal: number;
  Pais: ICountry;
}
