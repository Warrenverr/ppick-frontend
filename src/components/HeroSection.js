import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import mainimg from '../img/mainimg.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img
        src={mainimg}
        /*
        width='1620'
        height='650'
        */
        alt='testA'
      />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn-primary'
          buttonSize='btn-large'>
          개발자 PPICK하기
        </Button>
        <Button
          className='btns'
          buttonStyle='btn-primary'
          buttonSize='btn-large'>
          프로젝트 PPICK하기
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
