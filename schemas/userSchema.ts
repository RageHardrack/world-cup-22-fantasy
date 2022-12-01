import * as yup from "yup";

export const RegisterUserSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .max(10, "No puede tener más de 10 caracteres")
    .required("Debes crear un Username"),
  email: yup
    .string()
    .email("Email no válido")
    .required("Debes usar un email válido"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Debes crear una contraseña"),
});

export const LoginUserSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email no válido")
    .required("Debes ingresar tu email"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Debes ingresar tu contraseña"),
});
