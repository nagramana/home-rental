import React, { useState } from "react";

import "./Login.css";

import API from "../../services/api";

const Login = () => {

  const [formData, setFormData] = useState({

    email:"",
    password:""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", formData);

      alert("Login Successful");

      console.log(res.data);

      localStorage.setItem(
        "userInfo",
        JSON.stringify(res.data)
      );

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
};

export default Login;