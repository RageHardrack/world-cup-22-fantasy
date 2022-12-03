import {
  ITeam,
  TeamNotionResponse,
  PopulateRelationOptions,
} from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";
import { teamAdapter } from "~~/adapters";

const { teamsDB } = useRuntimeConfig();

class TeamServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly databaseId: string
  ) {}

  async getUserTeam(
    userId: string,
    populateOptions: PopulateRelationOptions
  ): Promise<ITeam> {
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

    return teamAdapter(results, populateOptions);
  }

  async createUserTeam(
    userId: string,
    populateOptions: PopulateRelationOptions
  ) {
    const results = await this.NotionClient.createPage<TeamNotionResponse>(
      this.databaseId,
      {
        Equipo: {
          title: [
            {
              text: {
                content: "Mi Equipo",
              },
            },
          ],
        },
        UserId: {
          relation: [
            {
              id: userId,
            },
          ],
        },
      }
    );

    return teamAdapter([results], populateOptions);
  }

  async updateUserTeam(userTeamId: string, options: any) {
    return await this.NotionClient.updatePage<TeamNotionResponse>(
      userTeamId,
      options
    );
  }
}

export const TeamService = new TeamServices(Notion, teamsDB);
