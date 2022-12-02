import {
  IUser,
  IUserProperties,
  UserNotionResponse,
  UserNotionResponseProperties,
} from "~~/interfaces";

export const userPropertiesAdapter = (
  properties: UserNotionResponseProperties
): IUserProperties => ({
  Username: properties.Username.title[0].plain_text,
  Email: properties.Email.rich_text[0].plain_text,
  Password: properties.Password.rich_text[0].plain_text,
  Jugadores: properties.Jugadores?.relation.map((relation) => relation.id),
  Formacion: properties.Formacion?.relation.map((relation) => relation.id),
});

export const userAdapter = (results: UserNotionResponse[]): IUser[] =>
  results.map((user: UserNotionResponse) => ({
    id: user.id,
    ...userPropertiesAdapter(user.properties),
  }));
