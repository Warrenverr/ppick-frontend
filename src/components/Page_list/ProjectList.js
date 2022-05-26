import React, { useEffect, useState } from "react";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import TitleBanner from "./TitleBanner";
import Inquire from "./Inquire";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectList(props) {
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
      params:{
        page : 0,
        keyword:keyword
      }
    }).then((res) => {
      callback(res.data);
      console.log("성공1");
    });
  }, [keyword]);

  // useEffect(() => {
  //   axios
  //   .all([axios.get("/api/project/list"), axios.get("/api/project/listBySkill")])
  //   .then(
  //     axios.spread((res1, res2) => {
  //       callback(res1.data);
  //       callback(res2.data);
  //     })
  //   )
  //   .catch((err) => console.log(err));
  // }, [])

  useEffect(() => {
    axios({
      url: "/api/project/listBySkill",
      method: "GET",
      params:{
        skill : skill
      } 
    }).then((res) => {
      callback(res.data);
      console.log("성공2");
    });
  }, [skill]);

  return (
    <div>
      <TitleBanner
        subtitle="하고 싶은 프로젝트를"
        maintitle="모집중인 프로젝트🤝"
      />
      <Inquire text="프로젝트 찾기" setKeyword={setKeyword} setSkill={setSkill} />
      <div className="project-container">
        {project.map((item) => (
          <Link
            to="/project_detail"
            state={{
              projectdata:item,
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
                <div className="heart-cofntainer">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <p className="heart-cnt">{item.likes.length}</p>
                </div>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
