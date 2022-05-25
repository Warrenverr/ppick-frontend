import React from 'react';
import '../../App.css';
import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
}

function Login1() {
    return (
        <div className="login">
        <div className="wrapper">
            <div className="logintitle">
                <h1>PPICK에 오신 것을 환영합니다!</h1>
            </div>

          <div className="left">
            <div className="loginButton google">
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook">
              <img src={Facebook} alt="" className="icon" />
              Kakaotalk
            </div>
            <div className="loginButton github">
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Login1

