import { userAdapter } from "~~/adapters/userAdapter";
import {
  IUser,
  PopulateRelationOptions,
  RegisterUser,
  UserNotionResponse,
} from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";

const { usersDB } = useRuntimeConfig();

class UserServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly usersDB: string
  ) {}

  async registerUser(User: RegisterUser) {
    const response = await this.NotionClient.createPage(this.usersDB, {
      Username: {
        title: [
          {
            text: {
              content: User.username,
            },
          },
        ],
      },
      Email: {
        rich_text: [
          {
            text: {
              content: User.email,
            },
          },
        ],
      },
      Password: {
        rich_text: [
          {
            text: {
              content: User.password,
            },
          },
        ],
      },
    });

    return response;
  }

  async getUsers(): Promise<IUser[]> {
    const results = await this.NotionClient.getDatabase<UserNotionResponse[]>(
      this.usersDB,
      {
        page_size: 1000,
      }
    );

    return userAdapter(results);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const users = await this.getUsers();

    return users.find((user: any) => user.Email === email) || null;
  }
}

export const UserService = new UserServices(Notion, usersDB);
