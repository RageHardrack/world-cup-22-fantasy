import { StadiumService } from "~~/services";

export default defineEventHandler(async (event) => {
  return await StadiumService.getStadiums();
});
