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

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onLoadImage = (e) => {
    setImg(e.target.value);
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
