import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const storeTokenInLocalStorage = (token) => {
    return  localStorage.setItem("token" , token)
  };

  const [token, setToken] = useState(localStorage.getItem("token"))

  const isLoggedUser = !!token;

  const logoutUser = () => {
    setToken("")
    return localStorage.removeItem("token")
  }
  return (
    <AuthContext.Provider value={{storeTokenInLocalStorage , logoutUser , isLoggedUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}
