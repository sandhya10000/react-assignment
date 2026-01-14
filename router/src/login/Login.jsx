import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const validUsers = [
  { email: "john@email.com", password: "john123" },
  { email: "alice@email.com", password: "alice123" },
  { email: "bob@email.com", password: "bob123" },
];

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [passwordReq, setPasswordRequired] = useState(false);
  const [emailReq, setEmailRequired] = useState(false);
  const [allFieldsReq, setAllFieldsReq] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user by email
    const user = validUsers.find((u) => u.email === email);

    if (!user) {
      //setIncorrectEmail(true);
      setIncorrectPassword(false);
      setAllFieldsReq(true);

      //setEmailRequired(true);
      setPasswordRequired(false);

      return;
    }
    if (user.password !== password) {
      // setIncorrectPassword(true);
      //setPasswordRequired(true);
      //setEmailRequired(false);
      //setIncorrectEmail(false);
      setAllFieldsReq(true);

      return;
    }

    // successful login

    setIncorrectEmail(false);
    setIncorrectPassword(false);
    setPasswordRequired(false);
    setEmailRequired(false);
    setAllFieldsReq(false);
    navigate("/home");
  };
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <form
        className="bg-warning p-4 rounded shadow"
        style={{ width: "350px" }}
      >
        <h4 className="text-center mb-4">Sign In</h4>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-semibold"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
              setIncorrectEmail(false);
              setEmailRequired(false);
              setAllFieldsReq(false);
            }}
          />
          {incorrectEmail && <p className="text-danger">Incorrect Email</p>}
          {emailReq && <p className="text-danger">Email fields are required</p>}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
              setIncorrectPassword(false);
              setPasswordRequired(false);
              setAllFieldsReq(false);
            }}
          />
          {incorrectPassword && (
            <p className="text-danger">Incorrect Password</p>
          )}
          {passwordReq && (
            <p className="text-danger">Password field are required</p>
          )}
        </div>
        {allFieldsReq && (
          <p className="text-danger text-center mt-2">
            All fields are required
          </p>
        )}
        <div className="d-grid mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
// if your credential is correct then only naviagte to Home page("/home")
