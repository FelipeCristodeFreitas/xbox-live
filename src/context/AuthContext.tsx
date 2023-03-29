import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
  } from "react";

  import { useProtectedPage } from "../Hooks/UseProtectedPage/useProtectedPage"
  import {api} from '../lib/axios'

  interface RegisterData {
    email: string, 
    password: string, 
    cpf: string, 
    name: string, 
    isAdmin: boolean
  }

  interface LoginData {
    email: string, 
    password: string, 
  }
  
  interface AuthContextData {
    registerUser: ({cpf,email,isAdmin, name, password}:RegisterData) => Promise<any>;
    logout: () => void;
    authenticated: boolean;
    login: ({email, password}:LoginData) => Promise<string | void>;
  }

  
  
  
  export const AuthContext = createContext({} as AuthContextData);
  
  const ACCESS_TOKEN_USER = "APP_ACCESS_TOKEN";
  
  interface IAuthProviderProps {
    children: React.ReactNode;
  }
  
  export const AuthProvider= ({ children }: IAuthProviderProps) => {
    const [token, setToken] = useState<string>();
  
    useEffect(() => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_USER);
  
      if (accessToken) {
        setToken(accessToken);
      } else {
        setToken(undefined);
      }
    }, []);
  
  
    const handleLogin = useCallback(async ({email,password}:LoginData) => {
      const response = await useProtectedPage(email, password);

      if (response instanceof Error) {
        return response.message;
      } else {
        localStorage.setItem(ACCESS_TOKEN_USER, '@xbox:state-1.0.0');
        setToken(response.accessToken);
      }
  
    }, []);
  
  
    const handleLogout = useCallback(() => {
      localStorage.removeItem(ACCESS_TOKEN_USER);
      setToken(undefined);
    }, []);
  
    const registerUser = async ({name,cpf,email,isAdmin,password}:RegisterData) => {

      try {
        const response = await api.post("/users", { email, password, cpf, name, isAdmin });

        return response.data
      } catch (error) {
        return {error: true, errorMessage: error}
      }
  
    };
  
    const authenticated = useMemo(() => !!token, [token]);
  
  
    return (
      <AuthContext.Provider
        value={{
          authenticated,
          login: handleLogin,
          logout: handleLogout,
          registerUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  
  export const useAuthContext = () => useContext(AuthContext);
  