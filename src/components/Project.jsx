import React, { useState } from 'react';
import './Project.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import axios from 'axios';
import ProjectHeader from './ProjectHeader';

function Project() {
  const [projName, setName] = useState('');
  const [projImg, setImg] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isContest, setIsContest] = useState(true);
  const [buttonText, setText] = useState('공모전에 참여합니다🤙');
  const [endDate, setEndDate] = useState(new Date());
  const [skill, setSkill] = useState([]);
  const flatformOptions = [
    { value: 'none', label: '미정' },
    { value: 'androidApp', label: '안드로이드 앱' },
    { value: 'iosApp', label: 'IOS 앱' },
    { value: 'responsiveWeb', label: '반응형 웹' },
    { value: 'desktopApp', label: '데스크톱 앱' },
    { value: 'etc', label: '기타' },
  ];
  const otherOptions = [
    { value: 'none', label: '없음' },
    { value: 'uiuxplan', label: 'UI/UX 기획' },
    { value: 'projectmanager', label: '프로젝트 매니저' },
    { value: 'uiuxdesign', label: 'UI/UX 디자인' },
    { value: 'graphic', label: '그래픽 디자인' },
    { value: 'backetc', label: '기타' },
  ];
  const BackOptions = [
    { value: 'none', label: '없음' },
    { value: 'webserver', label: '웹 서버' },
    { value: 'ai', label: 'AI' },
    { value: 'gameserver', label: '게임 서버' },
    { value: 'db', label: 'DB' },
    { value: 'bigdata', label: '빅데이터' },
    { value: 'backetc', label: '기타' },
  ];
  const FrontOptions = [
    { value: 'none', label: '없음' },
    { value: 'ios', label: 'IOS' },
    { value: 'android', label: '안드로이드' },
    { value: 'web', label: '웹 프론트엔드' },
    { value: 'backetc', label: '기타' },
  ];
  const languageOptions = [
    { value: 'none', label: '미정' },
    { value: 'js', label: 'javaScript' },
    { value: 'typescript', label: 'typeScript' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'typescript', label: 'spring' },
    { value: 'nodejs', label: 'nodejs' },
    { value: 'java', label: 'Java' },
    { value: 'go', label: 'Go' },
    { value: 'python', label: 'Python' },
    { value: 'swift', label: 'Swift' },
    { value: 'django', label: 'Django' },
    { value: 'reactnative', label: 'ReactNative' },
    { value: 'graphql', label: 'GraphQL' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'backetc', label: '기타' },
  ];
  const [projContent, setContent] = useState('');

  const contestOptions = [
    { value: '1', label: '[데이콘] 탄소중립을 위한 기후기술 시각화 경진대회' },
    { value: '2', label: '2022년 제4회 공군 창의·혁신 아이디어 공모 해커톤' },
    {
      value: '3',
      label: '네이버 CLOVA AI RUSH 2022 프로젝트 챌린지(개발/기획 분야)',
    },
    {
      value: '4',
      label:
        '[피우다 프로젝트] 2022 SW개발 공모전(장애인 생활개선 및 복지향상) 참가자 모집',
    },
    { value: '5', label: '제9회 해양수산 정보서비스·비즈니스 아이디어 공모전' },
    { value: '6', label: '제40회 서울특별시 건축상' },
    {
      value: '7',
      label: '[과기부/NIPA] 2022 인공지능 온라인 경진대회 참가자 모집',
    },
    { value: '8', label: '2022년 현대모비스 알고리즘 경진대회' },
    { value: '9', label: '2022 경기도 공공데이터 활용·분석 아이디어 공모전' },
    { value: '10', label: '마이 핀테크 서비스 개발경진대회' },
    {
      value: '11',
      label: '「2022년 동북권 ICT이노베이션스퀘어」청년 창업 아이디어 경진대회',
    },
    { value: '12', label: '전국 대학생 앱 개발 챌린지 제10회 K-해커톤' },
    { value: '13', label: '[슈퍼센트] 하이퍼 캐주얼 게임 챌린지' },
    { value: '14', label: '[데이콘] 수화 이미지 분류 경진대회' },
    {
      value: '15',
      label:
        '비전공자도 해커톤대회 준비하는 [4차산업 사물인터넷(iot) 시스템 개발자 양성] 과정 모집',
    },
    { value: '16', label: '제3회 AI·블록체인 아이디어 경진대회' },
    { value: '17', label: '제1회 철강 영상 공모전' },
    { value: '18', label: '제1회 CJ Feed&Care CUBE 아이디어 공모전' },
    { value: '19', label: '제24회 전국학생 통계활용대회' },
    { value: '20', label: '영천시 공공데이터 활용 경진대회' },
  ];

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onLoadImage = (e) => {
    setImg(e.target.value);
  };

  const handleContest = (e) => {
    setIsContest(!isContest);
    !isContest
      ? setText('공모전에 참여합니다🤙')
      : setText('공모전에 참여하지 않습니다😢');
  };

  const submit = async (e) => {
    try {
      const response = await axios.post('/api/project/write', {
        title: projName,
        type: '웹 개발\n',
        export: '웹 어플리케이션',
        skill: ['SpringBoot', 'React', 'MySQL', 'C++'],
        area: '온라인\n',
        content: '누구든 참여 가능합니다.',
        image: 'sample.jpg',
        projectStartDate: startDate,
        projectEndDate: endDate,
        mainTask: ['기획', '백엔드 개발'],
        subTask: ['UI/UX기획', '서버'],
        recruitment: [2, 2],
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ProjectHeader />
      <div className='intro'>
        <form>
          <div className='intro__title'>프로젝트 명</div>
          <div className='intro__form'>
            <input
              className='intro__form-projName'
              onChange={handleChange}
              type='text'
              name='projName'
              vlaue={projName}
              placeholder='프로젝트의 이름을 입력하세요'
            />
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>대표 이미지</div>
          <div className='intro__form'>
            <input
              className='intro__form-img'
              onChange={onLoadImage}
              type='file'
              name='projImg'
              vlaue={projImg}
            />
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>프로젝트 일정</div>
          <div className='intro__form'>
            <div className='selectBack'>시작일 ~ 마감일</div>
            <div className='mini_padding'></div>
            <div className='intro__from-prodate'>
              <div className='intro__form-startdate'>
                <DatePicker
                  className='date-css'
                  selected={startDate}
                  onChange={setStartDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
              <div className='intro__form-enddate'>
                <DatePicker
                  className='date-css'
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>출시 플랫폼</div>
          <div className='intro__form'>
            <Select
              isMulti
              name='flatforms'
              placeholder='출시할 플랫폼을 선택하세요..'
              options={flatformOptions}
              className='basic-multi-select'
              classNamePrefix='select'
            />
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>공모전 참여</div>
          <div className='intro__form'>
            <button
              className='contestbtn'
              type='button'
              onClick={handleContest}>
              {buttonText}
            </button>
            <div className='mini_padding'></div>
            {isContest ? (
              <div className='contestInput'>
                <Select
                  name='Contests'
                  placeholder='참가할 공모전을 선택하세요!'
                  options={contestOptions}
                  className='basic-multi-select'
                  classNamePrefix='select'
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>모집 인원</div>
          <div className='intro__form'>
            <div className='selectBack'>기획/디자인</div>
            <Select
              isMulti
              placeholder='백엔드 스택을 선택해주세요..'
              name='otherposition'
              options={otherOptions}
              className='basic-multi-select'
              classNamePrefix='select'
            />
            <div className='intro__padding'></div>
            <div className='selectBack'>백엔드</div>
            <Select
              isMulti
              placeholder='백엔드 스택을 선택해주세요..'
              name='backforms'
              options={BackOptions}
              className='basic-multi-select'
              classNamePrefix='select'
            />
            <div className='intro__padding'></div>
            <div className='selectBack'>프론트엔드</div>
            <Select
              isMulti
              placeholder='프론트엔드 스택을 선택해주세요..'
              name='frontforms'
              options={FrontOptions}
              className='basic-multi-select'
              classNamePrefix='select'
            />
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>기술 / 언어</div>
          <div className='intro__form'>
            <Select
              isMulti
              name='language'
              placeholder='사용할 언어와 기술 스택을 선택하세요..'
              options={languageOptions}
              className='basic-multi-select'
              classNamePrefix='select'
            />
          </div>
          <div className='intro__padding'></div>
          <div className='intro__title'>프로젝트 설명</div>
          <div className='intro__form'>
            <input
              className='intro__form-projContent'
              onChange={handleChangeContent}
              type='text'
              name='projContent'
              vlaue={projContent}
              placeholder='프로젝트의 설명을 입력하세요'
            />
          </div>
          <div className='intro__end-div'>
            <button type='submit' onClick={submit} className='intro__submit'>
              글 등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Project;
