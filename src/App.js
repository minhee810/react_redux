import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number}></Left1>
        <Right1
          onIncrease={() => {
            setNumber(number + 1);
          }}
        ></Right1>
      </div>
    </div>
  );
}

export default App;

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1 : {props.number}</h1>
      <Right2
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2 : {props.number}</h1>
      <Right3
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right3>
    </div>
  );
}

function Right3(props) {
  return (
    <div>
      <h1>Right3 : {props.number}</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          props.onIncrease();
        }}
      ></input>
    </div>
  );
}
