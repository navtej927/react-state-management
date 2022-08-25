import React, { createContext } from "react";
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  user: "",
  increment: () => set(({ count }) => ({ count: count + 1 })),
  login: () => set({ user: "Jack" }),
  logOut: () => set({ user: "" }),
}));

const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  return <MyContext.Provider value={useStore()}>{children}</MyContext.Provider>;
};

// This is added to refer the values easily
export const useCount = () => useStore((s) => s.count);
export const useIncrement = () => useStore((s) => s.increment);
export const useUser = () => useStore((s) => s.user);
export const useLogin = () => useStore((s) => s.login);
export const useLogout = () => useStore((s) => s.logOut);

const DisplayUser = () => {
  const user = useUser();
  return <div>LogedIn: {user}</div>;
};

const Form = () => {
  const login = useLogin();
  const logOut = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

const Container = () => {
  // container renders always
  return <AddOneBttn />;
};

const Counter = () => {
  const count = useCount();
  return <div>Counter: {count}</div>;
};

const AddOneBttn = () => {
  const increment = useIncrement();
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
      <Container />
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
