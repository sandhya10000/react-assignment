import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./home/Home";

function App() {
  // let count = 0;
  // const handlButton = () => {
  //   count++;
  //   console.log(count, "countttttt----------");
  // };

  // state declaration
  // [state, setState] =useState(initialStateValue)
  // state -> variable, state is immutable
  // setState  -> function(it will help to update state value)

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Introduction to useState Hook</h1>

        <p>count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary mx-1"
        >
          Increase count
        </button>
        {/*conditional rendering : component /element will render certain condition is met* */}
        {count > 0 && (
          <button
            onClick={() => setCount(count - 1)}
            className="btn btn-primary mx-1"
          >
            Decrease count
          </button>
        )}
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-danger mx-1"
        >
          Reset count
        </button>
      </div>
      <Home />
    </>
  );
}

export default App;
