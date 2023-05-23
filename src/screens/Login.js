import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const submit = async(e)=>{
e.preventDefault();
try{
     await axios.post("http://localhost:8000/",{email,password})
}
catch{
console.log(e)
}
}
  return (
    <>
      <div className="login-container">
        <form action="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              Enter Your Email Here !
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              Enter Your Password Here !
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-prime  " onClick={submit}>
            Login
          </button>
        <Link to="/register">SignUp Now</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
