import React, { useState, useEffect} from "react";
import "./DeveloperDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useLocation } from "react-router-dom";
import UserModal from "./UserModal";


function DeveloperDetail(props) {
  const developerdata = useLocation().state.developerdata;
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (developerdata.likes === 'liked') setLike(true);
    setLike(false);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="DeveloperDetial-container">
      <div className="DeveloperDetail-TitleContainer">
        <img className="Developer-img" src="img/developerimg.png"></img>
        <p className="developer-Leader-name">{developerdata.nickname}</p>
        <p className="developer-Leader-date">{developerdata.date.substr(0,10)} 가입</p>
        <button className="DeveloperPPick-btnsmall">개발자 PPICK</button>
        <div className="heart-container">
            <p>좋아요</p>
            <FontAwesomeIcon
              icon={like ? solidHeart : regularHeart}
              className="detail-heart"
            />
          </div>
      </div>

      <div className="DeveloperDetail-contextContainer">
        <div className="DeveloperDetail-context">
          <h2>직무</h2>
          <ul>
            <li className="listyle">
              <span className="Developer-major">{developerdata.job}</span>
            </li>
          </ul>
        </div>
        <div className="DeveloperDetail-context">
          <h2>숙련도</h2>
          <ul>
            <li className="listyle">
              <span className="Developer-major">{developerdata.detail_category}</span>
              <span className="Developer-major-degree">중수</span>
            </li>
            
          </ul>
        </div>
        <div className="DeveloperDetail-context">
          <h2>기술 스택</h2>
          <ul>
            <li>
              {developerdata.skill.map((skills) => (
                  <img
                    className="project-language"
                    alt=""
                    src={`img/${skills}.png`}
                  />
              ))}
            </li>
          </ul>
        </div>
        <div className="DeveloperDetail-context">
          <h2>포트폴리오</h2>
          <ul>
            <li>
              <p>http://www.naver.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="DeveloperDetail-contextContainer2">
        <div className="DeveloperDetail-context2">
          <h2>개발자 소개</h2>
          <ul>
            <li>
              <span className="Developerdetail-introduce">
                동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.
                동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.
                동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="DeveloperDetail-ButtonContainer">
        <button className="DeveloperPPick-btn" onClick={openModal}>개발자 PPICK</button>
        <UserModal
            open={modalOpen}
            close={closeModal}
            developerNickname={developerdata.nickname}
            developerId={developerdata.id}
          >
            지원
        </UserModal>
      </div>
      <div className="Projcet-recommendContainer">
          <h3>[추천] 이런 프로젝트는 어때요?</h3>
          <div className="project-recommend-div">
            <span className="project-recommend-num">1</span>
            <span className="project-recommend-text">
              토이 프로젝트 같이 해요!
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">2</span>
            <span className="project-recommend-text">
              리액트 같이 공부할 사람 구..
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">3</span>
            <span className="project-recommend-text">
              팀플 매칭 웹페이지 플젝 만..
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">4</span>
            <span className="project-recommend-text">
              서울 백엔드 스터디
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">5</span>
            <span className="project-recommend-text">
              시스템 아키텍처 스터디!!
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">6</span>
            <span className="project-recommend-text">
              스프링 공부하고 플젝 하실..
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">7</span>
            <span className="project-recommend-text">
              보안 공부할사람~
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">8</span>
            <span className="project-recommend-text">
              자바 기초부터 튼튼 스터디
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">9</span>
            <span className="project-recommend-text">
              코딩 테스트 모여서 공부할..
            </span>
          </div>
          <div className="project-recommend-div">
            <span className="project-recommend-num">10</span>
            <span className="project-recommend-text">
              클론코딩 하면서 같이 공..
            </span>
          </div>
        </div>
    </div>
  );
}

export default DeveloperDetail;
