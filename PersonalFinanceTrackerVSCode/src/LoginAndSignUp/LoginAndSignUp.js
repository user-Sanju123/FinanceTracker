import React, { useState } from "react";
import "../LoginAndSignUp/LoginAndSignUp.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const LoginAndSignUp = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",                 
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();
  const { firstName, lastName, phoneNumber, emailId, password } =
    user;
  const onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onLoginInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      //http://localhost:5226/api/users
      const response = await axios.post("https://localhost:7050/api/FinanceApi/PostLoginDetails",
        {
          emailId,
          password
      });
      console.log(response.data);
     
      //setUsers(response.data);
      //debugger;
      // const emp = users.find(
      //   (e) =>
      //     e.emailId === user.emailId && e.password === user.password
      // );
       if (response.data !== undefined) {
      //   localStorage.setItem("id", response.data.userId);
        alert("Login successfully!!");
        setUser({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          emailId: "",
          password: "",
        });
      localStorage.setItem("UserId", response.data.userId);
      localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/dashboard");
      } else {
        alert("Not registered or invalid credential");
      }
    } catch (error) {
      alert("Login failed!!");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7050/api/Users",
        
        user
      );
      console.log(response.data);
      alert("SignUp successfully!!");
      setUser({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailId: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      alert("SignUp failed!!");
    }
  };
  return (
    <div className="bodylogin">
      <div className="main body">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              required
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter  last name"
              required
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter  cell Number"
              required
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
            />
            {/* <input
              type="text"
              name="landLine"
              placeholder="Enter landLine"
              required
              value={landLine}
              onChange={(e) => onInputChange(e)}
            /> */}
            <input
              type="email"
              name="emailId"
              placeholder="Enter Email"
              required
              value={emailId}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => onInputChange(e)}
            />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={(e) => onLogin(e)}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="emailId"
              placeholder="Enter Registered Email"
              required
              value={emailId}
              onChange={(e) => onLoginInputChange(e)}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => onLoginInputChange(e)}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
