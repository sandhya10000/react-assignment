import React, { useContext } from "react";
import myContext from "../../Context/myContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(myContext);

  const handleClick = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <form className="container-fluid justify-content-start">
          <p
            className="mx-3 mt-2"
            style={{ color: theme == "light" ? "black" : "white" }}
          >
            Current theme:
          </p>
          <button
            className="btn btn-outline-success me-2"
            type="button"
            onClick={handleClick}
          >
            Change Theme
          </button>
        </form>
      </nav>
    </div>
  );
}
