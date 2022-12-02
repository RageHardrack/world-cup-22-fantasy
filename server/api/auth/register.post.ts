import { RegisterUser } from "~~/interfaces";
import { UserService } from "~~/services";
import { hashField, generateAccessToken } from "~~/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<RegisterUser>(event);

    const existUser = await UserService.getUserByEmail(body.email);

    if (existUser) {
      return sendError(
        event,
        createError({
          statusMessage: "Ese correo ya está registrado",
          statusCode: 404,
        })
      );
    }

    body.password = hashField(body.password);

    const newUser = await UserService.registerUser(body);

    const accessToken = generateAccessToken({ id: newUser.id, ...body});

    return {
      statusMessage: "Te has registrado con éxito",
      username: body.username,
      accessToken,
      ok: true,
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusMessage: "Ha ocurrido un error al intentar registrarte",
        statusCode: 500,
      })
    );
  }
});
