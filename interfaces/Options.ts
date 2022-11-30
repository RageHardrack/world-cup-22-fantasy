import { ICountry, IStadium, IPlayer, IFormation } from ".";

export interface PopulateRelationOptions {
  stadiums?: IStadium[];
  countries?: ICountry[];
  players?: IPlayer[];
  formations?: IFormation[];
}
