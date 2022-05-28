import React, { useState } from 'react';
import './Contest.css';
import ReactTooltip from 'react-tooltip';
import { useLocation } from 'react-router-dom';
import ContestHeader from './ContestHeader';

function ContestInfo() {
  const ContestData = useLocation().state.ContestData;
  const [content, setContent] = useState(ContestData.content);

  return (
    <>
      <div
        className='intro2'
        dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
}

function OtherContest() {
  return (
    <div className='intro2'>
      <div className='bottom_margine' />
      <p>이 공모전에 참여하는 다른 프로젝트들을 확인해보세요🏆</p>
      <div className='bottom_margine' />

      <div className='oc_div'>
        <img src='../img/mainimg.png'></img>
        <div>
          <h2>공모전 참여하고 같이 상금 1/n 나눠가져요!</h2>
          <h3>
            빅데이터 관련 경험자 우대😊 관련 대학원생 및 대학생으로 팀 구성할
            예정입니다!!
          </h3>
        </div>
      </div>
      <div className='sector' />
      <div className='sector' />
      <div className='oc_div'>
        <img src={require('../img/test2.png')}></img>
        <div>
          <h2>공모전 참여하고 같이 상금 1/n 나눠가져요!</h2>
          <h3>
            빅데이터 관련 경험자 우대😊 관련 대학원생 및 대학생으로 팀 구성할
            예정입니다!!
          </h3>
        </div>
      </div>
      <div className='sector' />
      <div className='sector' />
      <div className='oc_div'>
        <img src={require('../img/test1.png')}></img>
        <div>
          <h2>공모전 참여하고 같이 상금 1/n 나눠가져요!</h2>
          <h3>
            빅데이터 관련 경험자 우대😊 관련 대학원생 및 대학생으로 팀 구성할
            예정입니다!!
          </h3>
        </div>
      </div>
    </div>
  );
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
          textColor='black'
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
      <div className='bottom_margine' />
    </>
  );
}

export default Contest;
