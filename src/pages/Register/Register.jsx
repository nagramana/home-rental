import React, { useState } from "react";

import "./Register.css";

import API from "../../services/api";

const Register = () => {

  const [formData, setFormData] = useState({

    name:"",
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

      const res = await API.post("/auth/register", formData);

      alert("Registration Successful");

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

        <h1>Register</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>

  );
};

export default Register;