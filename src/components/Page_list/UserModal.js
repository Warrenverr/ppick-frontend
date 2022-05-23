import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, projectId } = props;

  const [contentValue, setContentValue] = useState("");
  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };

  async function send() {
    try {
      //응답 성공
      const response = await axios.post("/api/project/ppick/" + projectId, {
        //보내고자 하는 데이터
        motive: contentValue,
      });
      close()
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
              <p>[{projectId}] 님을 PPICK 하시겠어요?</p>
            </div>

            <div className="apply-motive">
              <span className="apply-motive-text">전송 내용</span>
              <textarea
                cols="50"
                rows="10"
                className="apply-box"
                type="text"
                placeholder="개발자님에게 전송할 내용을 작성해주세요"
                onChange={onContentChange}
                value={contentValue}
              ></textarea>
            </div>
            <div className="apply-notice">
              <span>*유의사항*</span>
              <span>-PPICK한 개발자에게 프로필 정보가 제공됩니다.</span>
              <span>-프로젝트 분쟁사항은 PPICK에서 책임지지 않습니다.</span>
              <span>
                -상대방이 일주일동안 승인하지 않으면 프로필 정보는 자동으로 삭제됩니다.
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


const UserModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, projectId } = props;

  const [contentValue, setContentValue] = useState("");
  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value);
  };

  async function send() {
    try {
      //응답 성공
      const response = await axios.post("/api/project/ppick/" + projectId, {
        //보내고자 하는 데이터
        motive: contentValue,
      });
      close()
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
              <p>[{projectId}] 님을 PPICK 하시겠어요?</p>
            </div>

            <div className="apply-motive">
              <span className="apply-motive-text">전송 내용</span>
              <textarea
                cols="50"
                rows="10"
                className="apply-box"
                type="text"
                placeholder="개발자에게 전송할 내용을 적어주세요."
                onChange={onContentChange}
                value={contentValue}
              ></textarea>
            </div>
            <div className="apply-notice">
              <span>*유의사항*</span>
              <span>-해당 개발자에게 프로필 정보가 제공됩니다.</span>
              <span>-프로젝트 분쟁사항은 PPICK에서 책임지지 않습니다.</span>
              <span>
                -개발자가 일주일동안 승인하지 않으면 프로필 정보는 자동으로 삭제됩니다.
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

export default UserModal;
