// Problemis whole tree is rendered.
import {
  useCount,
  useUser,
  useLogin,
  useLogout,
  useIncrement,
  MyContextProvider,
} from "./store";

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
