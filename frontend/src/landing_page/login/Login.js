import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3005/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodh-dash.vercel.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Unable to connect to the server. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm text-start" style={{ maxWidth: "400px", width: "100%" }}>

      <h2 className="mb-4 text-center fw-bold">Login Account</h2>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email"  className="form-label fw-medium" >Email</label>
          <input
            type="email"
            name="email"
             className="form-control"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-medium">Password</label>
          <input
            type="password"
            name="password"
             className="form-control"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>

         <div className="text-center">
        <span className="small text-muted">
             Create an account? <Link to={"/signup"} className="text-decoration-none fw-semibold">Signup</Link>
         </span>
         </div>
      </form>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;