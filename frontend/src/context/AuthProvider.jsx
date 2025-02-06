import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const user = Cookies.get('user');
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : user ? JSON.parse(user) : undefined
  );

  
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);