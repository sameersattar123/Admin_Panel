import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const storeTokenInLocalStorage = (token) => {
    return  localStorage.setItem("token" , token)
  };

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState("")

  const getUserData = async() => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/user` , {
      method : 'GET',
      headers : {
        "Authorization" : `Bearer ${token}`
      }       
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data.userData)
        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log("error")
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  
  const isLoggedUser = !!token;

  const logoutUser = () => {
    setToken("")
    return localStorage.removeItem("token")
  }
  return (
    <AuthContext.Provider value={{storeTokenInLocalStorage , logoutUser , isLoggedUser , user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}
