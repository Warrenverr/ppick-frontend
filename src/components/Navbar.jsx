import React from 'react';
import images from '../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
          <a href='developer'>개발자</a>
        </li>
        <li className='p__opensans'>
          <Link to='ContestList'>공모전</Link>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <div className='app__navbar-project'>
          <Link to='Project' className='app__navbar-box'>
            프로젝트 생성하기
          </Link>
        </div>
        <a href='#login' className='p__opensans'>
          가입/로그인
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
