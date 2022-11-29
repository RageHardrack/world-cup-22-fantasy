import { stadiumAdapter } from "~~/adapters";
import { IStadium, StadiumNotionResponse } from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";

const { stadiumsDB } = useRuntimeConfig();

class StadiumServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly databaseId: string
  ) {}

  async getStadiums(): Promise<IStadium[]> {
    const results = await this.NotionClient.getDatabase<
      StadiumNotionResponse[]
    >(this.databaseId, {
      page_size: 8,
    });

    return stadiumAdapter(results);
  }

  async getStadiumById(id: string):Promise<IStadium>  {
    const stadiums = await this.getStadiums();

    return stadiums.find((stadium) => stadium.id === id) || stadiums[0];
  }
}

export const StadiumService = new StadiumServices(Notion, stadiumsDB);
