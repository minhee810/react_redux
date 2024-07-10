import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { createStore } from "redux";
import { type } from "@testing-library/user-event/dist/type";

// store 안에 있는 state를 어떻게 바꿀 것인지 정의하는 것이 reducer
function reducer(currentState, action) {
  // 파라미터로 이전의 상태와 action을 받아옴
  // 1. 기본값 설정
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  // 객체의 복제본을 수정하여 불변성을 유지
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  // 2. 새로운 상태를 반환
  return newState;
}

const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Root : </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  console.log("2");
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  console.log("3");
  // function f(state) {
  //   return state.number;
  // }
  // allow function
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1 : </h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2 : </h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3 : </h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" }); // PLUS 라는 ACTION 전달 -> REDUCER 호출됨
        }}
      ></input>
    </div>
  );
}
