import React, { useState } from "react";
import myContext from "./myContext";

export default function ContextMain({ children }) {
  const [theme, setTheme] = useState("light");
  const defaultTheme = { theme, setTheme };
  return (
    <myContext.Provider value={defaultTheme}>{children}</myContext.Provider>
  );
}
