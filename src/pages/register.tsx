import Link from "next/link";
import Image from "next/image";
import { initialValues, RegisterSchema } from "@formik/RegisterSchema";
import { Formik, Form } from "formik";
import Button from "@components/Button";
import { Input } from "@components/Input";
import * as S from "@styles/Pages/register";

interface ISignInValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const submitForm = (values: ISignInValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {(formik) => {
        const { values, touched, handleChange } = formik;
        const errors = { email: "", password: "", confirmPassword: "" };

        if (!values.email) {
          errors.email = "E-mail é obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Verifique o e-mail digitado";
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "As senhas devem ser iguais";
        }

        const errorEmail = errors.email && touched.email;
        const errorPassword = errors.password && touched.password;
        const errorConfirmPassword = errors.confirmPassword && touched.password;

        return (
          <S.Wrapper>
            <img src="/assets/login.png" alt="Login" />
            <S.Container>
              <Form>
                <Image
                  src="/assets/icons/logo.svg"
                  alt="Juniando"
                  width={252}
                  height={202}
                />
                <h1>Registre-se</h1>
                <Input
                  icon="/assets/icons/email.svg"
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  error={errorEmail && errors.email}
                />
                <Input
                  icon="/assets/icons/password.svg"
                  placeholder="Senha"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  error={errorPassword && errors.password}
                />
                <Input
                  icon="/assets/icons/password.svg"
                  placeholder="Confirmar senha"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={errorConfirmPassword && errors.confirmPassword}
                />
                <Button title="Criar conta" type="submit" />

                <span>
                  <Image
                    src="/assets/icons/arrow-left.svg"
                    alt="Criar"
                    width={24}
                    height={24}
                  />
                  <Link href="/">Voltar para o login</Link>
                </span>
              </Form>
            </S.Container>
          </S.Wrapper>
        );
      }}
    </Formik>
  );
};

export default Register;
