import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  function increaseCounter() {
    if (counter === 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  }
  function decreaseCounter() {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  );
}

export default App;
