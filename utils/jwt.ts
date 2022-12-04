import jwt from "jsonwebtoken";
import { RegisterUser, LoginUser } from "~~/interfaces";

const { jwtSecret } = useRuntimeConfig();

interface DecodedToken {
  data: { id: string; email: string; password: string };
  iat: number;
  exp: number;
}

/**
 * Generates a JWT using the UserData, and it longs 30 days
 */
export const generateAccessToken = (
  userData: RegisterUser | LoginUser
): string => jwt.sign({ data: userData }, jwtSecret, { expiresIn: 2592000 });

export const verifyAccessToken = (accessToken: string): DecodedToken =>
  jwt.verify(accessToken, jwtSecret) as DecodedToken;
