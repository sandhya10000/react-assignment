import { useState } from "react";

import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}

export default App;
