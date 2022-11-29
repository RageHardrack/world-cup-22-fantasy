import { TedBy, Parent, TitleProperty } from "./Shared";

export interface StadiumNotionResponse {
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
  properties: StadiumNotionResponseProperties;
  url: string;
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
