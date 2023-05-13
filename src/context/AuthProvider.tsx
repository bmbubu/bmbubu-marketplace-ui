import { createContext, useState } from "react";

type AuthUser = {
  email: string;
};

type AuthContextType = {
  auth: unknown;
  setAuth: any;
};

type AutProviderType = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AutProviderType) => {
  const [auth, setAuth] = useState<AuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
