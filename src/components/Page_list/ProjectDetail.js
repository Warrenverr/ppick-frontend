import React, { useEffect, useState } from "react";
import "./ProjectDetail.css";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown as down } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp as up} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ProjectDetail(props) {

  const projectdata = useLocation().state.projectdata;
  const [project, setproject] = useState();

  const [like, setLike] = useState(false);

  useEffect(() => {
    if (projectdata.likes === 'liked') setLike(true);
    setLike(false);
  }, []);

  // const toggleLike= () => {
  //   좋아요 누를때 플젝id랑 사용자id보내면 좋아요 값 받아오고 나는 좋아요 상태바꿔주기 true
  // }

  const [comment, setComment] = useState();
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    setCommentArray(projectdata.commentList);
  }, [])

  const handleCommentInput = (event) => {
    const text = event.target.value;
    setComment(text);
    console.log(comment);
  };

  async function handleTotalEnter(event) {
    if (event.key === "Enter") {
      try {
        //응답 성공
        event.preventDefault();
        if (event.target.value !== "") {
          const response = await axios.post("/api/comment/write/" + projectdata.id, {
          //id랑 comment보내기  
          content:comment,
        });}
        event.target.value = "";
        repostProject();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function repostProject() {
      axios({
        url: "/api/project/detail/" + projectdata.id,
        method: "GET",
      }).then((res) => {
        setCommentArray(res.data.commentList);
        projectdata.push(res.data);
        console.log("성공");
      });
  }
  

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  
  // const recruit = projectdata.recruit;

  const [ProjectModalOn, setProjectModalOn] = useState(false);

  const [open, setOpen] = useState(false);
  const [openKey, setOpenKey] = useState();

  const toggleOpen = (event) => {
    setOpenKey(0);
    setOpen(!open);
  }

  return (
    <>
      <div className="ProjectDetial-container">
        <div className="ProjectDetail-TitleContainer" key={projectdata.id}>
          <h1 className="ProjectDetail-Title">{projectdata.title}</h1>
          <div className="ProjectDetail-Leader">
            <img className="Leader-img" src="img/developerimg.png"></img>
            <p className="Leader-name">{projectdata.author.nickname}</p>
            <p className="Leader-slash">|</p>
            <p className="Project-postdate">{projectdata.createDate.substr(0,10)}</p>
            <p className="Leader-etc">게시</p>
          </div>
          <p className="Leader-ing">모집중</p>
          <div className="heart-container">
            <p>좋아요</p>
            <FontAwesomeIcon
              icon={like ? solidHeart : regularHeart}
              className="detail-heart"
            />
          </div>
        </div>

        <div className="ProjectDetail-contextContainer">
          <div className="ProjectDetail-context">
            <h2>플젝 기간</h2>
            <ul>
              <li>
                
                <span className="project-fordate">{projectdata.projectStartDate}~{projectdata.projectEndDate}</span>
              </li>
            </ul>
          </div>
          <div className="ProjectDetail-context">
            <h2>모집 현황</h2>

            <ul>
              {projectdata.recruit.subTask.map((i) => (
                <li>
                  <span className="project-major">{i}</span>
                </li>
              ))}
            </ul>
            <ul className="listyle-right">
              {projectdata.recruit.recruitment.map((i) => (
                <li>
                  <span className="project-major-partnum">{i}</span>
                  <span className="slash">명 신청 가능</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="ProjectDetail-context">
            <h2>개발 분야</h2>
            <ul>
              <li>
                <span className="project-platform">{projectdata.export}</span>
              </li>
            </ul>
          </div>
          <div className="ProjectDetail-context">
            <h2>공모전 참여</h2>
            <ul>
              <li>
                <span>공모전 참여</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectDetail-contextContainer-etc">
          <div className="ProjectDetail-context">
            <h2>기술 언어</h2>
            <ul>
              <li>
                {projectdata.skill.map((skills) => (
                  <img
                    className="project-language"
                    alt=""
                    src={`img/${skills}.png`}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectDetail-contextContainer2">
          <div className="ProjectDetail-context2">
            <h2>프로젝트 소개</h2>
            <ul>
              <li>
                <span className="projectdetail-introduce">
                  {projectdata.content}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ProjectDetail-ButtonContainer">
          <button className="ProjectPPick-btn" onClick={openModal}>
            프로젝트 PPICK
          </button>
          <Modal
            open={modalOpen}
            close={closeModal}
            projecttitle={projectdata.title}
            recruit={projectdata.recruit.subTask}
            projectId={projectdata.id}
          >
            지원
          </Modal>
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
        <div className="Project-commentContainer">
        <h2>댓글</h2>
        <input
            className="comment-input"
            type="text"
            placeholder="댓글을 입력해주세요"
            onKeyPress={(event) => {
              handleTotalEnter(event);
            }}
            onKeyUp={(event) => {
              handleCommentInput(event);
            }}
          ></input>
          <div className="comment-btndiv">
            <button className="comment-btn">댓글 등록</button>
          </div>
          
          <div className="comment-div">
            {commentArray.map((data, index) => (
              <div className="comment-bottom">
                <ul>
                  <div className="comment-open">
                    <li className="comment-line">
                      <img className="comment-img" src="img/developerimg.png"></img>
                      <span className="comment-id">1</span>
                      <span className="comment-text">{data.content}</span>
                    </li>
                    {/* <FontAwesomeIcon icon={open ? up : down} key={data.id} className="open-icon" onClick={toggleOpen}/> */}
                  </div>

                  <div className="commentReply-container">
              <p>답글 달기</p>
              <input
                className="commentReply-input"
                type="text"
                placeholder="답글을 입력해주세요"
                onKeyPress={(event) => {
                  handleTotalEnter(event);
                }}
                onKeyUp={(event) => {
                  handleCommentInput(event);
                }}
              ></input>
                </div>
                  
                
                  {data.reCommentList.map((redata, index) => (
                    <div key={data.id} className="show-menu">
                      <li className="comment-reline">
                        <span className="comment-reid">{redata.author.nickname}</span>
                        <span className="comment-retext">{redata.content} </span>
                      </li>
                    </div>
                  ))} 
                </ul>
               
              </div>
            ))}

            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
