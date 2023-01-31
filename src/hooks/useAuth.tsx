import { createContext, useContext, ReactNode } from "react";

interface IAuthProvider {
  children: ReactNode;
}

interface AuthContextData {
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const isLogged = true;
  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  return ctx;
}
