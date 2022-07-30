import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(username, email, password);
  }


  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__title">Login to your account</h2>
        <p className="login__text">
          Don't have an account yet?
          <Link className="text-decoration-none" to="/Signup">
            <span className="login__signup ms-2">Signup</span>
          </Link>
        </p>

        <form onSubmit={() => submitHandler()} className="form">
          <div className="d-flex flex-column">
            <input
              className="form__input"
              name="username"
              required
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="form__input"
              name="email"
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form__input"
              name="password"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form__btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
