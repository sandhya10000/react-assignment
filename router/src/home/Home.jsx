import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="container text-center mt-5">
        <h1>Welcome</h1>
        <p className="text-muted">Simple Bootstrap home page</p>
        <a href="#" className="btn btn-primary">
          Get Started
        </a>{" "}
        <br />
        {/* Nav links */}
        <Link to={"/about"}>About Us</Link> |
        <Link to={"/services"}>Our Services</Link> |
        <Link to={"/contact"}>Contact Us</Link>
      </div>
    </div>
  );
}
