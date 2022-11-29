import { CountryService, MatchService, StadiumService } from "~~/services";

export default defineEventHandler(async () => {
  const stadiums = await StadiumService.getStadiums();
  const countries = await CountryService.getCountries();

  return await MatchService.getSemifinalMatches({ stadiums, countries });
});
