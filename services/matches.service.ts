import { matchAdapter } from "~~/adapters";
import {
  IMatch,
  MatchNotionResponse,
  PopulateRelationOptions,
} from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";

const {
  groupMatchesDB,
  octavosMatchesDB,
  cuartosMatchesDB,
  semifinalMatchesDB,
  thirdPlaceMatchDB,
  finalMatchDB,
} = useRuntimeConfig();

class MatchServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly groupMatchesId: string,
    private readonly octavosMatchesId: string,
    private readonly cuartosMatchesId: string,
    private readonly semifinalMatchesId: string,
    private readonly thirdPlaceMatchId: string,
    private readonly finalMatchId: string
  ) {}

  async getGroupMatches(
    populateOptions: PopulateRelationOptions
  ): Promise<IMatch[]> {
    const results = await this.NotionClient.getDatabase<MatchNotionResponse[]>(
      this.groupMatchesId,
      {
        page_size: 50,
        sorts: [
          {
            property: "Fecha",
            direction: "ascending",
          },
        ],
      }
    );

    return matchAdapter(results, populateOptions);
  }

  // async getOctavosMatches(): Promise<IMatch[]> {
  //   return await this.NotionClient.getDatabase<MatchNotionResponse[]>(this.octavosMatchesId, {
  //     page_size: 8,
  //     sorts: [
  //       {
  //         property: "Fecha",
  //         direction: "descending",
  //       },
  //     ],
  //   });
  // }

  // async getCuartosMatches(): Promise<IMatch[]> {
  //   return await this.NotionClient.getDatabase<MatchNotionResponse[]>(this.cuartosMatchesId, {
  //     page_size: 4,
  //     sorts: [
  //       {
  //         property: "Fecha",
  //         direction: "descending",
  //       },
  //     ],
  //   });
  // }

  // async getSemifinalMatches(): Promise<IMatch[]> {
  //   return await this.NotionClient.getDatabase<MatchNotionResponse[]>(this.semifinalMatchesId, {
  //     page_size: 2,
  //     sorts: [
  //       {
  //         property: "Fecha",
  //         direction: "descending",
  //       },
  //     ],
  //   });
  // }

  // async getThirdPlaceMatch(): Promise<IMatch[]> {
  //   return await this.NotionClient.getDatabase<MatchNotionResponse[]>(this.thirdPlaceMatchId, {
  //     page_size: 1,
  //   });
  // }

  // async getFinalMatch(): Promise<IMatch[]> {
  //   return await this.NotionClient.getDatabase<MatchNotionResponse[]>(this.finalMatchId, {
  //     page_size: 1,
  //   });
  // }
}

export const MatchService = new MatchServices(
  Notion,
  groupMatchesDB,
  octavosMatchesDB,
  cuartosMatchesDB,
  semifinalMatchesDB,
  thirdPlaceMatchDB,
  finalMatchDB
);
