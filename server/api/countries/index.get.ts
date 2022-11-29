import { CountryService } from "~~/services";

export default defineEventHandler(async () => {
  return await CountryService.getCountries();
});
