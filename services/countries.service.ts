import { CountryNotionResponse, ICountry } from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";
import { countryAdapter } from "~~/adapters";

const { countriesDB } = useRuntimeConfig();

class CountryServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly databaseId: string
  ) {}

  async getCountries(): Promise<ICountry[]> {
    const results = await this.NotionClient.getDatabase<
      CountryNotionResponse[]
    >(this.databaseId, {
      page_size: 32,
      sorts: [{ property: "Country", direction: "ascending" }],
    });

    const countries = countryAdapter(results);

    return countries;
  }

  async getCountryById(id: string) {
    const countries = await this.getCountries();

    return countries.find((country) => country.id === id);
  }
}

export const CountryService = new CountryServices(Notion, countriesDB);
