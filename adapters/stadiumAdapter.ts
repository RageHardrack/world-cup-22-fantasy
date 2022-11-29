import {
  StadiumNotionResponseProperties,
  IStadium,
  StadiumNotionResponse,
  IStadiumProperties,
} from "~~/interfaces";

/**
 * Transform the response properties from Notion to a simplified version of properties for better use
 */
export const stadiumPropertiesAdapter = (
  properties: StadiumNotionResponseProperties
): IStadiumProperties => ({
  Name: properties.Name.title[0].plain_text,
});

/**
 * Takes the original Notion Response and converts it in a object with simplified properties
 */
export const stadiumAdapter = (results: StadiumNotionResponse[]): IStadium[] =>
  results.map((stadium: StadiumNotionResponse) => ({
    id: stadium.id,
    ...stadiumPropertiesAdapter(stadium.properties),
  }));
