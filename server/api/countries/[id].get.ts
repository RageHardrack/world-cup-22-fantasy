import { CountryService } from "~~/services";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string;

  return await CountryService.getCountryById(id);
});
