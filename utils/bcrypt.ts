import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export const hashField = (fieldToProtect: string) =>
  bcrypt.hashSync(fieldToProtect, salt);

export const compareHash = (original: string, hash: string) =>
  bcrypt.compareSync(original, hash);
