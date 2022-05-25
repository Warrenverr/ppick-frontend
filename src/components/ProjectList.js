import React, { useEffect, useState } from "react";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ProjectList(props) {
  const [keyword, setKeyword] = useState("");
  const [project, setProject] = useState([
    {
      id: 2,
      title: "타입스크립트 스터디 같이 하실 개발자님들 모집합니다!!",
      type: "웹 개발\n",
      export: "웹 어플리케이션",
      skill: [
        "SpringBoot",
        "React",
        "MySQL",
        "JAVA",
        "TypeScript",
        "NodeJS",
        "C++",
      ],
      area: "온라인\n",
      content: "누구든 참여 가능합니다.",
      image: "photo.jpg",
      projectStartDate: "2022-04-23",
      projectEndDate: "2022-04-25",
      createDate: "2022-05-17T21:29:34.025",
      modifyDate: "2022-05-17T21:29:34.025",
      views: 0,
      likes: [],
      author: {
        id: 1,
        snsid: "108275157600555211654",
        email: "ktykty0722@gmail.com",
        nickname: "개구리왕눈이",
        skill: ["JAVA", "C", "MYSQL"],
        job: "student",
        category: "개발",
        detail_category: "백엔드 개발",
        image: null,
        date: "2022-05-13T23:52:18.034",
        agree: "동",
        role: null,
        portfolio: ["naver", "github", "youtube"],
      },
      commentList: [],
      recruit: {
        id: 2,
        mainTask: ["기획", "백엔드 개발\n"],
        subTask: ["UI/UX기획", "서버\n"],
        recruitment: [2, 2],
      },
      applyList: [],
      projectMember: [],
    },
    {
      id: 3,
      title: "플젝2",
      type: "웹 개발\n",
      export: "웹 어플리케이션",
      skill: ["SpringBoot", "React", "MySQL", "C++"],
      area: "온라인\n",
      content: "누구든 참여 가능합니다.",
      image: "photo.jpg",
      projectStartDate: "2022-04-23",
      projectEndDate: "2022-04-25",
      createDate: "2022-05-17T21:29:53.53",
      modifyDate: "2022-05-17T21:29:53.53",
      views: 0,
      likes: [],
      author: {
        id: 1,
        snsid: "108275157600555211654",
        email: "ktykty0722@gmail.com",
        nickname: "",
        skill: ["JAVA", "C", "MYSQL"],
        job: "student",
        category: "개발",
        detail_category: "백엔드 개발",
        image: null,
        date: "2022-05-13T23:52:18.034",
        agree: "동",
        role: null,
        portfolio: ["naver", "github", "youtube"],
      },
      commentList: [],
      recruit: {
        id: 3,
        mainTask: ["기획", "백엔드 개발\n"],
        subTask: ["UI/UX기획", "서버\n"],
        recruitment: [2, 2],
      },
      applyList: [],
      projectMember: [],
    },
    {
      id: 4,
      title: "플젝3",
      type: "웹 개발\n",
      export: "웹 어플리케이션",
      skill: ["SpringBoot", "React", "MySQL", "C++"],
      area: "온라인\n",
      content: "누구든 참여 가능합니다.",
      image: "photo.jpg",
      projectStartDate: "2022-04-23",
      projectEndDate: "2022-04-27",
      createDate: "2022-05-17T21:30:05.063",
      modifyDate: "2022-05-17T21:30:05.063",
      views: 0,
      likes: [],
      author: {
        id: 1,
        snsid: "108275157600555211654",
        email: "ktykty0722@gmail.com",
        nickname: "",
        skill: ["JAVA", "C", "MYSQL"],
        job: "student",
        category: "개발",
        detail_category: "백엔드 개발",
        image: null,
        date: "2022-05-13T23:52:18.034",
        agree: "동",
        role: null,
        portfolio: ["naver", "github", "youtube"],
      },
      commentList: [],
      recruit: {
        id: 4,
        mainTask: ["기획", "백엔드 개발\n"],
        subTask: ["UI/UX기획", "서버\n"],
        recruitment: [2, 2],
      },
      applyList: [],
      projectMember: [],
    },
    {
      id: 5,
      title: "플젝4",
      type: "웹 개발\n",
      export: "웹 어플리케이션",
      skill: ["SpringBoot", "React", "MySQL", "C++"],
      area: "온라인\n",
      content: "누구든 참여 가능합니다.",
      image: "photo.jpg",
      projectStartDate: "2022-04-23",
      projectEndDate: "2022-04-27",
      createDate: "2022-05-17T21:30:10.147",
      modifyDate: "2022-05-17T21:30:10.147",
      views: 0,
      likes: [],
      author: {
        id: 1,
        snsid: "108275157600555211654",
        email: "ktykty0722@gmail.com",
        nickname: "",
        skill: ["JAVA", "C", "MYSQL"],
        job: "student",
        category: "개발",
        detail_category: "백엔드 개발",
        image: null,
        date: "2022-05-13T23:52:18.034",
        agree: "동",
        role: null,
        portfolio: ["naver", "github", "youtube"],
      },
      commentList: [],
      recruit: {
        id: 5,
        mainTask: ["기획", "백엔드 개발\n"],
        subTask: ["UI/UX기획", "서버\n"],
        recruitment: [2, 2],
      },
      applyList: [],
      projectMember: [],
    },
  ]);

  // function callback(project) {
  //   setProject(project);
  // }

  // useEffect(() => {
  //   axios({
  //     url: "/project/list",
  //     method: "GET",
  //     params:{
  //       page : 0,
  //       keyword:keyword
  //     }
  //   }).then((res) => {
  //     callback(res.data);
  //   });
  // }, [keyword]);

  return (
    <div>
        <h1>LATEST PROJECT</h1>
        <h1 className="project-list"> 가장 최근에 올라온 프로젝트를 PPICK해보세요!</h1>
      {props.search}
      
      <div className="project-container">
        {project.map((item) => (
          <Link
            to="/project_detail"
            state={{
              projectdata: item,
            }}
          >
            <div className="projectlist" key={item.id}>
              <div className="projectlist-platform">{item.export}</div>
              <div className="projectlist-title">{item.title}</div>

              <div className="projectlist-main">
                {item.skill.map((skills) => (
                  <span className="projectlist-stack">{skills}</span>
                ))}
              </div>
              <div className="projectlist-date">
                <p>플젝 기간</p>
                <p>
                  {item.projectStartDate}~{item.projectEndDate}
                </p>
              </div>
              <div className="projectlist-footer">
                <div className="projectlist-left">
                  <img
                    className="Leader-img-list"
                    src="img/developerimg.png"
                  ></img>
                  <p className="projectlist-nickname">{item.author.nickname}</p>
                </div>
                <FontAwesomeIcon icon={faHeart} className="heart" />
              </div>
            </div>
          </Link>
        ))}
        <div className="viewall">
          
        <Button variant="contained" disableElevation>View all</Button>
          
          </div>
      </div>
      
    </div>
  );
}



export default ProjectList;