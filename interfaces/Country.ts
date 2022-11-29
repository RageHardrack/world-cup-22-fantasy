import {
  TedBy,
  Parent,
  TitleProperty,
  UrlProperty,
  RichTextProperty,
} from "./Shared";

export interface CountryNotionResponse {
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
  properties: CountryNotionResponseProperties;
  url: string;
}

export interface CountryNotionResponseProperties {
  Country: TitleProperty;
  Flag: UrlProperty;
  EN: RichTextProperty;
}

export interface ICountry {
  id: string;
  Country: string;
  Flag: string;
  EN: string;
}

export interface ICountryProperties {
  Country: string;
  Flag: string;
  EN: string;
}
