import { CountryService, PlayerService } from "~~/services";

export default defineEventHandler(async () => {
  const countries = await CountryService.getCountries();

  return await PlayerService.getPlayers({ countries });
});
