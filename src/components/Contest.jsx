import React, { useState } from 'react';
import axios from 'axios';
import images from '../constants/images';
import './Contest.css';
import ReactTooltip from 'react-tooltip';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

function ContestInfo() {
  return (
    <div className='intro'>
      <h1>내용</h1>
    </div>
  );
}

function OtherContest() {
  return (
    <div className='intro'>
      <h1>안녕하세요.</h1>
    </div>
  );
}

function Contest() {
  const [convertO, setConvertO] = useState(false);
  const [convertI, setConverI] = useState(true);
  const onClickO = () => {
    setConvertO(true);
    setConverI(false);
  };
  const onClickI = () => {
    setConverI(true);
    setConvertO(false);
  };

  return (
    <Router>
      <div className='main'>
        <div className='centerdiv'>
          <img src={images.sample} alt='contest image' />
          <div className='sector'></div>
          <div className='contents'>
            <div className='title'>
              <ul className='info_list'>
                <li>분야</li>
                <li>응모대상</li>
                <li>주최</li>
                <li>접수 기간</li>
                <li>상금</li>
                <li>홈페이지</li>
              </ul>
            </div>
            <div className='info'>
              <ul className='info_list'>
                <li>분야</li>
                <li>응모대상</li>
                <li>주최</li>
                <li>접수 기간</li>
                <li>상금</li>
                <li>홈페이지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='proj'>
        <a href='/Project' data-for='tooltip' data-tip className='project'>
          프로젝트 생성하기
        </a>
        <ReactTooltip
          id='tooltip'
          getContent={(dataTip) => '공모전에 참여하고 상금을 PPICK하세요!'}
          place='top'
          backgroundColor='#CECECE'
        />
      </div>
      <div className='sub'>
        <div className='bar'>
          <button onClick={onClickI} className='contest_info'>
            상세내용
          </button>
          <button onClick={onClickO} className='other_contest'>
            해당 공모전 팀원 모집
          </button>
        </div>
        <div className='show_contents'>
          {convertO ? <OtherContest /> : <ContestInfo />}
        </div>
      </div>
      <div className='garbage'></div>
    </Router>
  );
}

export default Contest;
