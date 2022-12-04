import { TeamService, PlayerService, CountryService } from "~~/services";
import { verifyAccessToken } from "~~/utils";

export default defineEventHandler(async (event) => {
  const user = getCookie(event, "WC22F_user");

  if (!user) {
    return sendError(
      event,
      createError({
        statusMessage:
          "No tienes accesso al Equipo Fantasy. Por favor, inicia sesión",
        statusCode: 401,
      })
    );
  }

  const { accessToken } = JSON.parse(user);
  const { data: decodedToken } = verifyAccessToken(accessToken);
  const { id } = decodedToken;

  const countries = await CountryService.getCountries();
  const players = await PlayerService.getPlayers({ countries });

  return await TeamService.getUserTeam(id, { countries, players });
});
