import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3005/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
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
      handleError("Something went wrong. Please try again.");
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm text-start" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="mb-4 text-center fw-bold">Signup Account</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-medium">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Submit
          </button>
          
          {/* Toggle Link */}
          <div className="text-center">
            <span className="small text-muted">
              Already have an account? <Link to={"/login"} className="text-decoration-none fw-semibold">Login</Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
