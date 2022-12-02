import {
  IPlayer,
  NotionResponse,
  NumberProperty,
  RelationProperty,
  TitleProperty,
} from ".";

export interface ITeam {
  id: string;
  Equipo: string;
  Posicion1?: IPlayer;
  Posicion1_Dorsal: number;
  Posicion2?: IPlayer;
  Posicion2_Dorsal: number;
  Posicion3?: IPlayer;
  Posicion3_Dorsal: number;
  Posicion4?: IPlayer;
  Posicion4_Dorsal: number;
  Posicion5?: IPlayer;
  Posicion5_Dorsal: number;
  Posicion6?: IPlayer;
  Posicion6_Dorsal: number;
  Posicion7?: IPlayer;
  Posicion7_Dorsal: number;
  Posicion8?: IPlayer;
  Posicion8_Dorsal: number;
  Posicion9?: IPlayer;
  Posicion9_Dorsal: number;
  Posicion10?: IPlayer;
  Posicion10_Dorsal: number;
  Posicion11?: IPlayer;
  Posicion11_Dorsal: number;
  UserId: string;
}

export interface TeamNotionResponse extends NotionResponse {
  properties: TeamNotionPropertiesResponse;
}

export interface TeamNotionPropertiesResponse {
  Equipo: TitleProperty;
  Posicion1?: RelationProperty;
  Posicion1_Dorsal: NumberProperty;
  Posicion2?: RelationProperty;
  Posicion2_Dorsal: NumberProperty;
  Posicion3?: RelationProperty;
  Posicion3_Dorsal: NumberProperty;
  Posicion4?: RelationProperty;
  Posicion4_Dorsal: NumberProperty;
  Posicion5?: RelationProperty;
  Posicion5_Dorsal: NumberProperty;
  Posicion6?: RelationProperty;
  Posicion6_Dorsal: NumberProperty;
  Posicion7?: RelationProperty;
  Posicion7_Dorsal: NumberProperty;
  Posicion8?: RelationProperty;
  Posicion8_Dorsal: NumberProperty;
  Posicion9?: RelationProperty;
  Posicion9_Dorsal: NumberProperty;
  Posicion10?: RelationProperty;
  Posicion10_Dorsal: NumberProperty;
  Posicion11?: RelationProperty;
  Posicion11_Dorsal: NumberProperty;
  UserId: RelationProperty;
}

export interface ITeamProperties {
  Equipo: string;
  Posicion1?: IPlayer;
  Posicion1_Dorsal: number;
  Posicion2?: IPlayer;
  Posicion2_Dorsal: number;
  Posicion3?: IPlayer;
  Posicion3_Dorsal: number;
  Posicion4?: IPlayer;
  Posicion4_Dorsal: number;
  Posicion5?: IPlayer;
  Posicion5_Dorsal: number;
  Posicion6?: IPlayer;
  Posicion6_Dorsal: number;
  Posicion7?: IPlayer;
  Posicion7_Dorsal: number;
  Posicion8?: IPlayer;
  Posicion8_Dorsal: number;
  Posicion9?: IPlayer;
  Posicion9_Dorsal: number;
  Posicion10?: IPlayer;
  Posicion10_Dorsal: number;
  Posicion11?: IPlayer;
  Posicion11_Dorsal: number;
  UserId: string;
}
