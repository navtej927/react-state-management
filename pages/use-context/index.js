import React, { useState, createContext, useContext } from "react";

const MyContext = createContext(null);

const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={useState(0)}>{children}</MyContext.Provider>
  );
};

// This is added to refer the values easily

const useMyContext = () => {
  const [count, setCount] = useContext(MyContext);
  return {
    count,
    setCount,
  };
};

const Form = ({ setUser, user }) => {
  return (
    <div>
      <div>LogedIn: {user}</div>
      <button
        onClick={() => {
          setUser("Navtej");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setUser("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

const Container = () => {
  // container renders always
  const { setCount } = useMyContext();
  return <AddOneBttn setCount={setCount} />;
};

const Counter = () => {
  const { count } = useMyContext();
  return <div>Counter: {count}</div>;
};

const AddOneBttn = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
    </div>
  );
};

const CounterUseState = () => {
  return (
    <MyContextProvider>
      <Counter />
      <Container />
    </MyContextProvider>
  );
};

export default function Page() {
  const [user, setUser] = useState("");

  return (
    <>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <Form setUser={setUser} user={user} />
    </>
  );
}
