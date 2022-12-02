import {
  TitleProperty,
  SelectProperty,
  NumberProperty,
  RelationProperty,
  NotionResponse,
  ICountry,
} from "./";

export interface IPlayer {
  id: string;
  Name: string;
  Posicion: string;
  Dorsal: number;
  Pais: ICountry;
}

export interface PlayerNotionResponse extends NotionResponse {
  properties: PlayerNotionPropertiesResponse;
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
