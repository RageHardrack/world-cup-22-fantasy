import { userAdapter } from "~~/adapters/userAdapter";
import { IUser, RegisterUser, UserNotionResponse } from "~~/interfaces";
import { Notion, NotionClient } from "~~/vendors";

const { usersDB } = useRuntimeConfig();

class UserServices {
  constructor(
    private readonly NotionClient: NotionClient,
    private readonly usersDB: string
  ) {}

  async registerUser(User: RegisterUser):Promise<IUser> {
    const response = await this.NotionClient.createPage<UserNotionResponse>(
      this.usersDB,
      {
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
      }
    );

    return userAdapter([response])[0];
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

  async getUserByEmail(email: string): Promise<IUser | undefined> {
    const users = await this.getUsers();

    return users.find((user: IUser) => user.Email === email);
  }
}

export const UserService = new UserServices(Notion, usersDB);
