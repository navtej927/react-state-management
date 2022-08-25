import React, { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const MyContext = createContext(null);

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const obj = {
    count,
    user,
    increment: useCallback(() => setCount((v) => v + 1), []),
    login: useCallback(() => setUser("Jack"), []),
    logOut: useCallback(() => setUser(""), []),
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
};

const useCount = () => useContextSelector(MyContext, (s) => s.count);
const useLogOut = () => useContextSelector(MyContext, (s) => s.logOut);
const useLogin = () => useContextSelector(MyContext, (s) => s.login);
const useUser = () => useContextSelector(MyContext, (s) => s.user);

const DisplayUser = () => {
  const user = useUser();
  return <div>LogedIn: {user}</div>;
};

const Form = () => {
  const login = useLogin();
  const logOut = useLogOut();
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

const Counter = () => {
  const count = useContextSelector(MyContext, (s) => s.count);
  return <div>Counter: {count}</div>;
};

const AddOneBttn = () => {
  const increment = useContextSelector(MyContext, (s) => s.increment);

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const CounterUseState = () => {
  return (
    <div>
      <Counter />
      <AddOneBttn />
      <DisplayUser />
      <Form />
    </div>
  );
};

export default function Page() {
  return (
    <MyContextProvider>
      <CounterUseState />
    </MyContextProvider>
  );
}
