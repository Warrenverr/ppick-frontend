import React, { useEffect, useState } from "react";
import "./ProjectHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectHome(props) {
  const [keyword, setKeyword] = useState("");
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState("");

  function callback(project) {
    setProject(project);
  }

  useEffect(() => {
    axios({
      url: "/api/project/list",
      method: "GET",
      params : {
        limit : 4,
      }
    }).then((res) => {
      callback(res.data);
      console.log("성공1");
    });
  }, []);

  return (
    <div className="projecthome">
      <div className="projecthome-title">
        <span className="home-title">LATEST PROJECT</span>
        <span className="home-subtitle">가장 최근에 등록된 프로젝트를 PPICK 해보세요!</span>
      </div>
      <div className="projecthome-container">
        {project.map((item) => (
          <Link
            to="/project_detail"
            state={{
              projectdata:item,
            }}
          >
            <div className="projecthome-list" key={item.id}>
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
                <div className="heart-cofntainer">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <p className="heart-cnt">{item.likes.length}</p>
                </div>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="view-container">
         <Link
                to='/project_list'>
                <button className="home-view">View All</button>
              </Link>
        
      </div>
    </div>
  );
}

export default ProjectHome;