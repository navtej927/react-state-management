// So far the mobx is very performant in terms of rendering screen

import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class CounterClass {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }
}

class FormClass {
  user = "";

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    console.log("this", this);
    this.user = "Jack";
  }

  logOut() {
    this.user = "";
  }
}

const counterStore = new CounterClass();
const formStore = new FormClass();

const DisplayUser = observer(({ form }) => {
  console.log("form", form.user);
  return <div>LogedIn: {form.user}</div>;
});

const Counter = observer(({ counter }) => {
  return <div>Counter: {counter.count}</div>;
});

const Form = () => {
  return (
    <div>
      <button onClick={() => formStore.login()}>Login</button>
      <button onClick={() => formStore.logOut()}>Logout</button>
    </div>
  );
};

const AddOneBttn = () => {
  return (
    <div>
      <button onClick={() => counterStore.increment()}>Increment</button>
    </div>
  );
};

const CounterUseState = () => {
  return (
    <div>
      <Counter counter={counterStore} />
      <AddOneBttn />
      <DisplayUser form={formStore} />
      <Form />
    </div>
  );
};

export default function Page() {
  return (
    <>
      <CounterUseState />
    </>
  );
}
