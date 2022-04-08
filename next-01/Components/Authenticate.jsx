import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "../styles/Home.module.css";

const Authenticate = () => {
  const [isLogin, sIL] = useState(true);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {isLogin ? <Login sIL={sIL} /> : <Register />}
    </div>
  );
};

function Login({ sIL }) {

  const apiUrl = useSelector(state => state.all.apiUrl)
  function change(e) {
    console.log(e.value);
    e.preventDefault();
    sIL(false);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    try {
      const data = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value,
        }),
      });

      const json = await data.json();
      if (json.user) {
        localStorage.setItem("token", json.token);
        window.location.href = "/";
      } else {
        alert("Invalid credentials");
        // show error
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className={style.login} onSubmit={(e) => onSubmit(e)}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary me-4">
        Sign in
      </button>
      <button var onClick={change} className="btn btn-outline-info">
        Register
      </button>
    </form>
  );
}

function Register() {
  // const [error, sE] = useState(false);

  const apiUrl = useSelector(state => state.all.apiUrl)
  const onSubmit = async (e) => {
    e.preventDefault();
   
    if(e.target[2].value !== e.target[3].value){
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        }),
      });

      const json = await data.json();
      // console.log(json);
      if (json.user) {
        localStorage.setItem("token", json.token);
        window.location.href = "/";
      } else {
        alert("something went wrong");
        // show error
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={`${style.login}`} onSubmit={onSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputname" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="email"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            name="email"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            name="password2"
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary me-4">
        Sign up
      </button>
    </form>
    
  );
}

export default Authenticate;
