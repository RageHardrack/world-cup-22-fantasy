import {
  PlayerNotionResponse,
  IPlayer,
  PopulateRelationOptions,
} from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";
import { playerAdapter } from "~~/adapters";

const { playersDB } = useRuntimeConfig();

class PlayerServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly databaseId: string
  ) {}

  async getPlayers(
    populateOptions: PopulateRelationOptions
  ): Promise<IPlayer[]> {
    const results = await this.NotionClient.getDatabase<PlayerNotionResponse[]>(
      this.databaseId,
      {
        page_size: 32,
        sorts: [
          { property: "Name", direction: "ascending" },
          { property: "Pais", direction: "ascending" },
        ],
      }
    );

    const players = playerAdapter(results, populateOptions);

    return players;
  }
}

export const PlayerService = new PlayerServices(Notion, playersDB);
