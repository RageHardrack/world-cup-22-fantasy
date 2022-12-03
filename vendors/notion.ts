import { Client } from "@notionhq/client";
import { HttpAdapter } from "~~/interfaces";

const { notionSecret } = useRuntimeConfig();

export class NotionClient implements HttpAdapter {
  private notion = new Client({ auth: notionSecret });

  async getDatabase<T>(databaseId: string, options = {}): Promise<T> {
    const { results } = await this.notion.databases.query({
      database_id: databaseId,
      ...options,
    });

    return results as unknown as T;
  }

  async getPage<T>(pageId: string, options = {}): Promise<T> {
    const page = await this.notion.pages.retrieve({
      page_id: pageId,
      ...options,
    });

    return page as unknown as T;
  }

  async getPageContent<T>(blockId: string, options = {}): Promise<T> {
    const { results } = await this.notion.blocks.children.list({
      block_id: blockId,
      ...options,
    });

    return results as unknown as T;
  }

  async createPage<T>(parentId: string, properties: any): Promise<T> {
    const response = await this.notion.pages.create({
      parent: {
        type: "database_id",
        database_id: parentId,
      },
      properties,
    });

    return response as unknown as T;
  }

  async updatePage<T>(pageId: string, properties: any): Promise<T> {
    const response = await this.notion.pages.update({
      page_id: pageId,
      properties,
    });

    return response as unknown as T;
  }
}

export const Notion = new NotionClient();
