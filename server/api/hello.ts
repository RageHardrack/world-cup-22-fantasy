import { StadiumService } from "~~/services";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string;
  const data = await StadiumService.getStadiumById(id);
  
  return {
    data,
  };
});
