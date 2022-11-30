import { RegisterUser } from "~~/interfaces";
import { UserService } from "~~/services";
import { hashField, generateAccessToken } from "~~/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<RegisterUser>(event);

    const existUser = await UserService.getUserByEmail(body.email);

    if (existUser) {
      return {
        message: "Ese correo ya está registrado",
        username: null,
        accessToken: null,
        ok: false,
      };
    }

    body.password = hashField(body.password);

    await UserService.registerUser(body);

    const accessToken = generateAccessToken(body);

    return {
      message: "Te has registrado con éxito",
      username: body.username,
      accessToken,
      ok: true,
    };
  } catch (error) {
    return {
      message: "Ha ocurrido un error al intentar registrarte",
      username: null,
      accessToken: null,
      ok: false,
    };
  }
});
