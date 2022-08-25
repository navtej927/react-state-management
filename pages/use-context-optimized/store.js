import React, { useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const useStore = () => {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);

  return {
    count,
    user,
    increment: useCallback(() => setCount((v) => v + 1), []),
    login: () => setUser("Navtej"),
    logOut: () => setUser(""),
  };
};

const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  return <MyContext.Provider value={useStore()}>{children}</MyContext.Provider>;
};

// This is added to refer the values easily
export const useCount = () => useContextSelector(MyContext, (s) => s.count);
export const useIncrement = () =>
  useContextSelector(MyContext, (s) => s.increment);
export const useUser = () => useContextSelector(MyContext, (s) => s.user);
export const useLogin = () => useContextSelector(MyContext, (s) => s.login);
export const useLogout = () => useContextSelector(MyContext, (s) => s.logOut);
