import { NotionResponse, TitleProperty } from ".";

export interface StadiumNotionResponse extends NotionResponse {
  properties: StadiumNotionResponseProperties;
}

export interface IStadium {
  id: string;
  Name: string;
}

export interface StadiumNotionResponseProperties {
  Name: TitleProperty;
}

export interface IStadiumProperties {
  Name: string;
}
