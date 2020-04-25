import React, { useContext, createContext, useState, useEffect } from "react";
import { fetchToken, getTokenFromLocalStorage, setTokenToLocalStorage } from "../actions/auth";

interface AuthInterface {
  token: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  error: string,
  doneCheckingAuth: boolean
}

const AuthContext = createContext<AuthInterface>({
  token: "",
  login: (_username: string, _password: string) => Promise.resolve(),
  logout: () => {},
  error: "",
  doneCheckingAuth: false
});

const AuthProvider: React.FC = (props) => {
  const [token, setToken] = useState<string>("");
  const [doneCheckingAuth, setDoneCheckingAuth] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const savedToken = getTokenFromLocalStorage();
    setToken(savedToken);
    setDoneCheckingAuth(true);
  }, []);

  useEffect(() => {
    setTokenToLocalStorage(token);
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const requestedToken = await fetchToken(username, password);
      setToken(requestedToken);
    } catch (e) {
      setError(e)
    }
  }

  const logout = () => {
    setToken("");
  }

  const contextValue = {
    token,
    login,
    logout,
    error,
    doneCheckingAuth
  };

  return <AuthContext.Provider value={contextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
