import { StadiumService } from "~~/services";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string;

  return await StadiumService.getStadiumById(id);
});
