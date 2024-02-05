import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
//import { useNavigate, NavLink } from "react-router-dom";

function Login({ setUserState }) {
  // const navigate = useNavigate();

  const { formErrors, setFormErrors, isSubmit, setIsSubmit } = useGlobalContext;

  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      // axios.post("http://localhost:9002/login", user).then((res) => {
      //   alert(res.data.message);
      //   setUserState(res.data.user);
      //   navigate("/", { replace: true });
      // });
    }
  }, [formErrors]);

  return (
    <LoginStyled className="login">
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className="error">{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className="error">{formErrors.password}</p>
        <button className="button_common" onClick={loginHandler}>
          Login
        </button>
      </form>
      {/* <NavLink to="/signup">Not yet registered? Register Now</NavLink> */}
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  width: 400px;
  background: #fff;
  border: 1px solid #dddfe2;
  box-shadow: 0 2px 4px rgb(0 0 10 / 64%), 0 8px 16px rgb(0 10 0 / 34%);
  border-radius: 8px;
  padding: 1rem;
  align-items: center;
  text-align: center;

  input {
    border-radius: 20px;
    border: 2px solid lightgrey;
    outline: none;
    color: #1d2129;
    margin: 2% 0;
    width: 90%;
    padding: 12px;
    font-size: 16px;
  }

  .button_common {
    background-color: olivedrab;
    color: white;
    padding: 15px 30px;
    border: none;
    font-size: 22px;
    border-radius: 15px;
    margin: 1rem;
    width: 90%;
  }

  .error {
    color: red;
    text-align: left;
    margin: auto;
    font-size: 16px;
    padding: 0px 1rem;
  }

  a {
    text-decoration: none;
    color: #0563b4;
    margin-top: 10px;
    display: block;
    font-size: 16px;
  }
`;

export default Login;
