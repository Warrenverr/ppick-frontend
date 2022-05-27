import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contest.css';
import ReactTooltip from 'react-tooltip';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation,
} from 'react-router-dom';
import ContestHeader from './ContestHeader';

function ContestInfo() {
  const ContestData = useLocation().state.ContestData;
  const [content, setContent] = useState(ContestData.content);

  return (
    <>
      <div
        className='intro'
        dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
}

function OtherContest() {
  const ContestData = useLocation().state.ContestData;

  return <div className='intro'>관련 공모전</div>;
}

function Contest(props) {
  const ContestData = useLocation().state.ContestData;
  const [img, setImg] = useState(ContestData.img);
  const [host, setHost] = useState(ContestData.host);
  const [applyDate, setApplydate] = useState(ContestData.apply_date);
  const [reward, setReward] = useState(ContestData.reward);
  const [link, setLink] = useState(ContestData.link);
  const [condition, setCondition] = useState(ContestData.condition);
  const [field, setField] = useState(ContestData.field);
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

  return (
    <>
      <ContestHeader />
      <div className='main'>
        <div className='centerdiv'>
          <img className='img_div' src={ContestData.img} alt='contest image' />
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
            <div className='title'>
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
