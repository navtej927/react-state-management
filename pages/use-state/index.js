import React, { useState } from "react";

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

const Board = ({ count, user }) => {
  return (
    <div>
      <div>Board</div>
      <ul>
        <li>counter: {count}</li>
        <li>user: {user}</li>
      </ul>
    </div>
  );
};

const Container = ({ setCount }) => {
  // container renders always
  return <AddOneBttn setCount={setCount} />;
};

const Counter = ({ count }) => {
  return <div>Counter: {count}</div>;
};

const AddOneBttn = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
    </div>
  );
};

export default function Page() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  return (
    <>
      <Counter count={count} />
      <Container setCount={setCount} />
      <Board count={count} user={user} />
      <Form setUser={setUser} user={user} />
    </>
  );
}
