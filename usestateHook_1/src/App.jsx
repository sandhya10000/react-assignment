import { useState } from "react";
import "./App.css";
import Home from "./home/Home";

function App() {
  // let count = 0;
  // const handleClick = () => {
  //   count++;
  //   console.log(count)
  // }

  // state declaration
  // [state,setState] = useState(initialStateValue)
  // state -> variable, state is immutable
  // setState -> function(it'll help to update state value)
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Introduction to useState hook & Props</h2>

      <p>Count: {count}</p>
      <hr />
      <button
        className="btn btn-primary mx-1"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      {/* conditional rendering: component/element will render while certain condition is met */}
      {/* {count > 0 && <button className="btn btn-primary mx-1" onClick={() => setCount(count - 1)}>Decrease Count</button>} */}
      <button className="btn btn-danger mx-1" onClick={() => setCount(0)}>
        Reset Count
      </button>

      <hr />
      <Home appCount={count} setCount={setCount} />
    </>
  );
}

export default App;

// hook: special type of functions in react functional component
// useState(): state must be updated dynamically..

// Props: passing state to another component is called props
// Parent -> Child -> subchild
// Home:
