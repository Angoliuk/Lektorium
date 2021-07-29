import React, { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = React.useState({
    email: "",
    password: "",
  })

  function login() {

    let expEmail = /^[^\s@]+@[^\s@]+$/;
    let expPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (expEmail.test(data.email) && expPassword.test(data.password)) {
      alert("Все вірно")
    }else{
      alert("Помилка")
    }
  }

  return (
    <div className="App">

      <div className="main">

      <h1 className="textPosition">Stackfindover</h1>

      <div className="loginBlock">
        <h2>Sign in to your account</h2>
        <label htmlFor="emailInput"><b>Email</b></label>
        <input onChange={(e)=>{setData({...data, email: e.target.value})}} className="loginInputs" type="email" id="emailInput" />
        <div className="twoLabelsInLine">
          <label htmlFor="passwordInput"><b>Password</b></label>
          <label htmlFor="passwordInput"><a href="https://www.google.com"><b>Forgot your password?</b></a></label>
        </div>
        <input onChange={(e)=>{setData({...data, password: e.target.value})}} className="loginInputs" type="password" id="passwordInput" />
        <div>
          <input  type="checkbox" id="checkbox" />
          <label htmlFor="check"><b>Stay signed for a week</b></label>
        </div>
        <button onClick={login} className="submitButton"><b>Continue</b></button>
        <a className="textPosition" href="https://www.google.com/maps"><b>Use single sign-on (Google) instead</b></a>
      </div>

      <p className="textPosition">Don`t have an account? <a href="https://www.facebook.com"> Sign up</a></p> 

      </div>

    </div>
  );
}

export default App;
