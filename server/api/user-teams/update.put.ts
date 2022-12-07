import { updateUserTeamDto } from "~~/adapters";
import { TeamService } from "~~/services";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const notNullBody = updateUserTeamDto(body);

  await TeamService.updateUserTeam(body.id, notNullBody);

  return {
    statusMessage: "Has actualizado con éxito tu Equipo Fantasy",
    ok: true,
  };
});
