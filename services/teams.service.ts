import { ITeam, TeamNotionResponse, PopulateRelationOptions } from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";
import {teamAdapter} from "~~/adapters";

const { teamsDB } = useRuntimeConfig();

class TeamServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly databaseId: string
  ) {}

  async getUserTeam(userId: string, populateOptions: PopulateRelationOptions): Promise<ITeam> {
    const results = await this.NotionClient.getDatabase<TeamNotionResponse[]>(
      this.databaseId,
      {
        page_size: 1,
        filter: {
          property: "UserId",
          relation: {
            contains: userId,
          },
        },
      }
    );

    const team = teamAdapter(results, populateOptions)

    return team;
  }
}

export const TeamService = new TeamServices(Notion, teamsDB);
