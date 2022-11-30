import {
  IPlayer,
  NotionResponse,
  TitleProperty,
  RelationProperty,
  RichTextProperty,
} from ".";

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  Username: string;
  Jugadores?: string[];
  Formacion?: string[];
  Email: string;
  Password: string;
}

export interface UserNotionResponse extends NotionResponse {
  properties: UserNotionResponseProperties;
}

export interface UserNotionResponseProperties {
  Username: TitleProperty;
  Jugadores?: RelationProperty;
  Formacion?: RelationProperty;
  Email: RichTextProperty;
  Password: RichTextProperty;
}

export interface IUserProperties {
  Username: string;
  Jugadores?: string[];
  Formacion?: string[];
  Email: string;
  Password: string;
}
