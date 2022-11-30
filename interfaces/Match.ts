import {
  ICountry,
  DateProperty,
  NumberProperty,
  SelectProperty,
  TitleProperty,
  RelationProperty,
  NotionResponse,
  IStadium,
} from ".";

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

export interface MatchNotionResponse extends NotionResponse {
  properties: MatchNotionPropertiesResponse;
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
