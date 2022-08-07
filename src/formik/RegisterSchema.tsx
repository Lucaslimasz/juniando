import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required("Email é obrigatório"),

  password: Yup.string().required("Senha é obrigatória"),

  confirmPassword: Yup.string().required("Senha é obrigatória"),
});

export const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
