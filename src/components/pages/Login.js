import React from 'react';
import './Login.css';
import Google from '../../img/google.png';
import Facebook from '../../img/facebook.png';
import Github from '../../img/github.png';

const KakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=355ccd66392dd483c58a75147c6dbf5a&redirect_uri=http://localhost:3000/api/user/auth/Kakao_login&response_type=code`;
const GitHubLogin = `https://github.com/login/oauth/authorize?client_id=Iv1.e91f1c5595cd0b04`;
const GoogleLogin = `https://accounts.google.com/o/oauth2/v2/auth?client_id=151434471836-i4vcjfpu0702hmj7bc8hi9tasvufflcl.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/user/auth/Google_login&response_type=code&access_type=offline&scope=profile%20email%20openid`;


function Login1(props) {
  return (
      <div className="login">
      <div className="wrapper">
          <div className="logintitle">
              <h1>PPICK에 오신 것을 환영합니다!</h1>
          </div>
          
        <div className="left">
          <a href={GoogleLogin} rel="noopener noreferrer">
            <div className="loginButton google">
              <img src={Google} alt="" className="icon"/>
              Google
            </div>
          </a>
          
          <a href={KakaoLogin} rel="noopener noreferrer">
            <div className="loginButton facebook">
              <img src={Facebook} alt="" className="icon" />
              Kakaotalk
            </div>
          </a>
          <a href={GitHubLogin} rel="noopener noreferrer">
            <div className="loginButton github">
              <img src={Github} alt="" className="icon" />
              Github
            </div>
            </a>
        </div>
          
      
        
      </div>
    </div>
  );
}

export default Login1;
