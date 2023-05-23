import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const submit = async(e)=>{
e.preventDefault();
try{
     await axios.post("http://localhost:8000/",{username,email,password})
}
catch{
console.log(e)
}
}
  return (
    <>
      <div className="login-container">
        <form type="POST">
          <h1>Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              Enter Your Username Here !
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
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

          <button type="submit" className="btn btn-prime ">
            Register Now
          </button>
        <Link to="/login">Login Now</Link>
        </form>
      </div>
    </>
  );
}

export default Register;
