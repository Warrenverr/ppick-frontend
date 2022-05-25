import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, projecttitle, recruit, projectId } = props;

  const [applyState, setApplyState] = useState("");
  const [contentValue, setContentValue] = useState("");
  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };

  async function send() {
    try {
      //응답 성공
      const response = await axios.post("/api/project/ppick/" + projectId, {
        //보내고자 하는 데이터
        field: applyState,
        motive: contentValue,
      });
      close()
      setApplyState('');
      setContentValue('');
      alert("제출되었습니다!")
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="apply-container">
            <FontAwesomeIcon icon={faTimes} className="times" onClick={close} />
            <div className="apply-title">
              <p>[{projecttitle}] 프로젝트는 당신을 기다려요!</p>
            </div>
            <div className="apply-major">
              <span className="apply-major-text">지원 분야</span>
              <select
                className="apply-select"
                value={applyState}
                onChange={(e) => {
                  const selectedArea = e.target.value;
                  setApplyState(selectedArea);
                }}
              >
                <option>지원 분야</option>
                {recruit.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="apply-motive">
              <span className="apply-motive-text">지원 동기</span>
              <textarea
                cols="50"
                rows="10"
                className="apply-box"
                type="text"
                placeholder="프로젝트에 참여하는 각오 또는 간단한 자기소개를 작성해주세요"
                onChange={onContentChange}
                value={contentValue}
              ></textarea>
            </div>
            <div className="apply-notice">
              <span>*유의사항*</span>
              <span>-프로젝트 리더에게 연락처가 제공됩니다.</span>
              <span>-프로젝트 분쟁사항은 PPICK에서 책임지지 않습니다.</span>
              <span>
                -리더가 일주일동안 승인하지 않으면 지원이 자동으로 취소됩니다.
              </span>
            </div>
            <div className="apply-btncontainer">
              <button className="apply-btn" onClick={send}>
                제출 PPICK
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};



export default Modal;
