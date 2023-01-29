import { Formik, Form } from "formik";

import Link from "next/link";
import Image from "next/image";

import Button from "@components/Button";
import { Input } from "@components/Input";

import * as S from "@styles/Pages";
import { initialValues, SignInSchema } from "@formik/SignInSchema";

interface ISignInValues {
  email: string;
  password: string;
}

const Login = () => {
  const submitForm = (values: ISignInValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {(formik) => {
        const { values, touched, handleChange } = formik;

        const errors = { email: "", password: "" };

        if (!values.email) {
          errors.email = "E-mail é obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Verifique o e-mail digitado";
        }

        const errorEmail = errors.email && touched.email;
        const errorPassowrd = errors.password && touched.password;

        return (
          <S.Wrapper>
            <S.Container>
              <Form>
                <Image
                  src="/assets/icons/logo.svg"
                  alt="Juniando"
                  width={252}
                  height={200}
                />
                <h1>Faça seu login</h1>
                <Input
                  type="email"
                  icon="/assets/icons/email.svg"
                  placeholder="E-mail"
                  name="email"
                  id="email"
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
                  error={errorPassowrd && errors.password}
                />
                <Button title="Entrar" type="submit" />
                <Link href="/">Esqueceu a senha?</Link>
                <span>
                  <Image
                    src="/assets/icons/create.svg"
                    alt="Criar"
                    width={24}
                    height={24}
                  />
                  <Link href="/register">Criar conta</Link>
                </span>
              </Form>
            </S.Container>
            <img src="/assets/login.png" alt="Login" />
          </S.Wrapper>
        );
      }}
    </Formik>
  );
};

export default Login;
