import { api } from "@config/api";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  email: string;
  _id: string;
  name?: string;
  avatar?: string;
}

interface AuthContextData {
  isLogged: boolean;
  register(infoUser: IUserRegister): void;
  authenticate(infoUser: IUserRegister): void;
  user: IUser;
  logout(): void;
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
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const userId = Cookie.get("user_id");
      const userToken = Cookie.get("user_token");
      if (userId) {
        await api
          .get(`/me/${userId}`, {
            headers: { Authorization: `Bearer ${userToken}` },
          })
          .then(({ data }) => {
            setIsLogged(true);
            setUser(data.user);
          })
          .catch(() => {
            setIsLogged(false);
            router.push("/");
          });
      }
    })();
  }, []);

  const logout = () => {
    Cookie.remove("user_id");
    Cookie.remove("user_token");
    Cookie.remove("user_email");
    setIsLogged(false);
    router.push("/");
  };

  const register = async (values: IUserRegister) => {
    try {
      const { data } = await api.post("/register", values);

      setUser(data.user);

      Cookie.set("user_token", data.token, { expires: 1 });
      Cookie.set("user_id", data.user._id, { expires: 1 });
      setIsLogged(true);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const authenticate = async (values: IUserRegister) => {
    try {
      const { data } = await api.post("/authenticate", values);

      setUser(data.user);
      Cookie.set("user_token", data.token, { expires: 1 });
      Cookie.set("user_id", data.user._id, { expires: 1 });
      setIsLogged(true);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, register, authenticate, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  return ctx;
}
