import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import mainimg from '../img/mainimg.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img
        src='img/mainimg.png' className='maingimg'
      />
      <div className='hero-btns'>
        <button className='btns-left'>프로젝트 PPICK하기</button>
        <button className='btns-right'>개발자 PPICK하기</button>
      </div>
    </div>
  );
}

export default HeroSection;
