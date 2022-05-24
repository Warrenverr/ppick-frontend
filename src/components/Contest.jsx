import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../constants/images';
import './Contest.css';
import ReactTooltip from 'react-tooltip';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import ContestHeader from './ContestHeader';

function ContestInfo() {
  const [content, setContent] = useState('');
  const axios = require('axios');
  const id = 3;

  axios.get('/contest/list').then(function (res) {
    setContent(res.data[id].content);
  });

  return <div className='intro'>${content}</div>;
}

function OtherContest() {
  const [content, setContent] = useState('');
  const axios = require('axios');
  const id = 2;

  axios.get('/project/list').then(function (res) {
    setContent(res.data[id].content);
  });

  return (
    <div className='intro'>
      <h1>{content}</h1>
    </div>
  );
}

function Contest() {
  const [img, setImg] = useState('');
  const [host, setHost] = useState('');
  const [applyDate, setApplydate] = useState('');
  const [reward, setReward] = useState('');
  const [link, setLink] = useState('');
  const [condition, setCondition] = useState('');
  const [field, setField] = useState('');
  const [convertO, setConvertO] = useState(false);
  const [convertI, setConvertI] = useState(true);
  const onClickO = () => {
    setConvertO(true);
    setConvertI(false);
  };
  const onClickI = () => {
    setConvertI(true);
    setConvertO(false);
  };

  const axios = require('axios');
  const id = 3;

  axios.get('/contest/list').then(function (res) {
    setImg(res.data[id].img);
    setHost(res.data[id].host);
    setCondition(res.data[id].condition);
    setApplydate(res.data[id].apply_date);
    setReward(res.data[id].reward);
    setLink(res.data[id].link);
    setField(res.data[id].field);
  });

  return (
    <>
      <ContestHeader />
      <div className='main'>
        <div className='centerdiv'>
          <img className='img div' src={img} alt='contest image' />
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
                <li>{field}</li>
                <li>{condition}</li>
                <li>{host}</li>
                <li>{applyDate}</li>
                <li>{reward}</li>
                <li>
                  <a className='contest_url' href={link}>
                    {link}
                  </a>
                </li>
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
    </>
  );
}

export default Contest;
