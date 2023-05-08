import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CurrentUserContext = createContext();

function CurrentUserContextProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", "");
  const [accountCreated, setAccountCreated] = useState(false);
  const [user, setUser] = useState({
    pseudo: "",
    email: "",
    password: "",
  });
  return (
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        accountCreated,
        setAccountCreated,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContextProvider;
