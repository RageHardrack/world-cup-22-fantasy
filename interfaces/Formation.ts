import { NotionResponse, NumberProperty, TitleProperty } from ".";

export interface IFormation {
  id: string;
  Formacion: string;
  Portero: number;
  Defensas: number;
  Centrocampistas: number;
  Delanteros: number;
}

export interface FormationNotionResponse extends NotionResponse {
  properties: FormationNotionPropertiesResponse;
}

export interface FormationNotionPropertiesResponse {
  Formacion: TitleProperty;
  Portero: NumberProperty;
  Defensas: NumberProperty;
  Centrocampistas: NumberProperty;
  Delanteros: NumberProperty;
}

export interface IFormationProperties {
  Formacion: string;
  Portero: number;
  Defensas: number;
  Centrocampistas: number;
  Delanteros: number;
}
