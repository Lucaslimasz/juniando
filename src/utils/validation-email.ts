export const validationEmail = (
  values: { email: string },
  errors: { email: string }
) => {
  if (!values.email) {
    errors.email = "E-mail é obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Verifique o e-mail digitado";
  }
};
