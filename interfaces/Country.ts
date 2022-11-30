import {
  NotionResponse,
  TitleProperty,
  UrlProperty,
  RichTextProperty,
} from "./";

export interface CountryNotionResponse extends NotionResponse {
  properties: CountryNotionResponseProperties;
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
