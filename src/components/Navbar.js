import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo-img' alt='logo-image' src='img/logo.png' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/project_list'
                className='nav-links'
                onClick={closeMobileMenu}>
                프로젝트 삑
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/developer_list'
                className='nav-links'
                onClick={closeMobileMenu}>
                개발자 삑
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ContestList'
                className='nav-links'
                onClick={closeMobileMenu}>
                공모전
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/project_write"
                className="nav-links project-link"
                onClick={closeMobileMenu}
              >
                프로젝트 생성
              </Link>
            </li> */}
            <li className='nav-item'>
              {/* <Link to='/user/auth/login' className='nav-links' onClick={closeMobileMenu}>
                가입/로그인
              </Link> */}
              <Link
                to='/mypage'
                className='nav-links'
                onClick={closeMobileMenu}>
                마이페이지
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
