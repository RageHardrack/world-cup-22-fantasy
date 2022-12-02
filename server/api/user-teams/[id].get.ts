import { TeamService, PlayerService, CountryService } from "~~/services";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string;

  const countries = await CountryService.getCountries();
  const players = await PlayerService.getPlayers({ countries });

  return await TeamService.getUserTeam(id, { countries, players });
});
