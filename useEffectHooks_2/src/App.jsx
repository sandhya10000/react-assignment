import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Navbar count={count} setCount={setCount} />
      <Cart />
    </>
  );
}

export default App;
