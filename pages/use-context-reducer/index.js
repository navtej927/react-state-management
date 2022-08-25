import React, { useState, createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

const MyContext = createContext(null);

const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </MyContext.Provider>
  );
};

// This is added to refer the values easily

const useMyContext = () => {
  const [count, dispatch] = useContext(MyContext);
  return {
    count,
    dispatch,
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
  return <AddOneBttn />;
};

const Counter = () => {
  const { count } = useMyContext();
  return <div>Counter: {count}</div>;
};

const AddOneBttn = () => {
  const { dispatch } = useMyContext();
  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>Increment</button>
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
      <Form setUser={setUser} user={user} />
    </>
  );
}
