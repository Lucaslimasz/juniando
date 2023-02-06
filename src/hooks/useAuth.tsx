import { api } from "@config/api";
import { createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  email: string;
  _id: string;
}

interface AuthContextData {
  isLogged: boolean;
  register(infoUser: IUserRegister): void;
  authenticate(infoUser: IUserRegister): void;
  user: IUser;
}

interface IUserRegister {
  email: string;
  password: string;
  // confirmPassword: string;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({} as IUser);

  const isLogged = true;

  const register = async (values: IUserRegister) => {
    try {
      const { data } = await api.post("/authenticate", values);

      setUser(data.user);

      Cookie.set("@token-user", data.token, { expires: 1 });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const authenticate = async (values: IUserRegister) => {
    try {
      const { data } = await api.post("/authenticate", values);

      setUser(data.user);
      Cookie.set("token-user", data.token, { expires: 1 });

      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, register, authenticate, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  return ctx;
}
