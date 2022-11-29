import {
  CountryNotionResponse,
  CountryNotionResponseProperties,
  ICountry,
  ICountryProperties,
} from "~~/interfaces";

export const countryPropertiesAdapter = (
  properties: CountryNotionResponseProperties
): ICountryProperties => ({
  Country: properties.Country.title[0].plain_text,
  Flag: properties.Flag.url,
  EN: properties.EN.rich_text[0].plain_text,
});

export const countryAdapter = (results: CountryNotionResponse[]): ICountry[] =>
  results.map((country: CountryNotionResponse) => ({
    id: country.id,
    ...countryPropertiesAdapter(country.properties),
  }));
