import React from 'react';
import images from '../constants/images';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='projectList'>프로젝트</a>
        </li>
        <li className='p__opensans'>
          <a href='develpoerList'>개발자</a>
        </li>
        <li className='p__opensans'>
          <a href='contestList'>공모전</a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <div className='app__navbar-project'>
          <a href='/Project' className='app__navbar-box'>
            프로젝트 생성하기
          </a>
        </div>
        <a href='#login' className='p__opensans'>
          가입/로그인
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
