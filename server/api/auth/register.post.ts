import { RegisterUser } from "~~/interfaces";
import { UserService } from "~~/services";
import { hashField } from "~~/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<RegisterUser>(event);

    const existUser = await UserService.getUserByEmail(body.email);

    if (existUser) {
      return {
        message: "Ese correo ya existe",
        accessToken: null,
        ok: false,
      };
    }

    body.password = hashField(body.password);

    await UserService.registerUser(body);

    return { message: "Te has registrado con éxito", accessToken: null, ok: true };
  } catch (error) {
    return {
      message: "Ha ocurrido un error al intentar registrarte",
      accessToken: null,
      ok: false,
    };
  }
});
