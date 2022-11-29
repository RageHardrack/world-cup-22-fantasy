import { CountryService, MatchService, StadiumService } from "~~/services";

export default defineEventHandler(async (event) => {
  const stadiums = await StadiumService.getStadiums();
  const countries = await CountryService.getCountries();

  return await MatchService.getGroupMatches({stadiums, countries});
});
