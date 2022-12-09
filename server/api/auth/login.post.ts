import { LoginUser } from "~~/interfaces";
import { UserService } from "~~/services";
import { compareHash, generateAccessToken } from "~~/utils";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<LoginUser>(event);

    const existUser = await UserService.getUserByEmail(body.email);

    if (!existUser) {
      return sendError(
        event,
        createError({
          statusMessage: "No se ha encontrado a nadie con ese correo",
          statusCode: 404,
        })
      );
    }

    if (!compareHash(body.password, existUser.Password)) {
      return sendError(
        event,
        createError({
          statusMessage: "Usuario o contraseña incorrecta",
          statusCode: 401,
        })
      );
    }

    const accessToken = generateAccessToken({
      id: existUser.id,
      ...body,
      password: existUser.Password,
    });

    return {
      statusMessage: "Has iniciado sesión con éxito",
      username: existUser.Username,
      formacion: existUser.Formacion,
      jugadores: existUser.Jugadores,
      accessToken,
      ok: true,
    };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusMessage: "Ha ocurrido un error al intentar iniciar sesión",
        statusCode: 500,
      })
    );
  }
});
