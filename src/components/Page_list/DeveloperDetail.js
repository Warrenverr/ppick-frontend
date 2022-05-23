import React, { useState } from "react";
import "./DeveloperDetail.css";

function DeveloperDetail() {
  return (
    <div className="DeveloperDetial-container">
      <div className="DeveloperDetail-TitleContainer">
        <img className="Developer-img" src="img/developerimg.png"></img>
        <p className="developer-Leader-name">짱융지</p>
        <button className="DeveloperPPick-btnsmall">개발자 PPICK</button>
      </div>

      <div className="DeveloperDetail-contextContainer">
        <div className="DeveloperDetail-context">
          <h2>직무</h2>
          <ul>
            <li className="listyle">
              <span className="Developer-major">프론트엔드 개발자</span>
              <span className="Developer-major-degree"></span>
            </li>
            <li className="listyle">
              <span className="Developer-major">안드로이드 앱 개발</span>
              <span className="Developer-major-degree">중수</span>
            </li>
            <li className="listyle">
              <span className="Developer-major">UI/UX 디자인</span>
              <span className="Developer-major-degree">초고수</span>
            </li>
          </ul>
        </div>
        <div className="DeveloperDetail-context">
          <h2>기술 언어</h2>
          <ul>
            <li>
              <img className="Developer-language" alt="" src="img/react.png" />
              <img
                className=" Developer-language"
                alt=""
                src="img/nodejs.png"
              />
              <img
                className=" Developer-language"
                alt=""
                src="img/typescript.png"
              />
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
        <button className="DeveloperPPick-btn">개발자 PPICK</button>
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
