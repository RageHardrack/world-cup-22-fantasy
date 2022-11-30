import jwt from "jsonwebtoken";
import { RegisterUser } from "~~/interfaces";

const { jwtSecret } = useRuntimeConfig();

/**
 * Generates a JWT using the UserData, and it longs 30 days
 */
export const generateAccessToken = (userData: RegisterUser): string =>
  jwt.sign({ data: userData }, jwtSecret, { expiresIn: 2592000 });

export const verifyAccessToken = (token: string) => {};
