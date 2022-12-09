import * as yup from "yup";

export const RegisterUserSchema = yup.object().shape({
  registerUsername: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .max(10, "No puede tener más de 10 caracteres")
    .required("Debes crear un Username"),
  registerEmail: yup
    .string()
    .email("Email no válido")
    .required("Debes usar un email válido"),
  registerPassword: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Debes crear una contraseña"),
});

export const LoginUserSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email("Email no válido")
    .required("Debes ingresar tu email"),
  loginPassword: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Debes ingresar tu contraseña"),
});
