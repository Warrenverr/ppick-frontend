import React, { useEffect, useState } from "react";
import "./DeveloperHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function DeveloperHome() {
  const [heartState, setHeartState] = useState(false);
  const handlelike = (e) => {
    setHeartState(!heartState);
  };

  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState([]);


  useEffect(() => {
    axios({
      url: "/api/user/homeList",
      method: "GET",
      params:{
        limit : 4,
      }
    }).then((res) => {
      setUser(res.data);
      console.log("성공");
    });
  }, []);

  return (
    <div className="projecthome">
      <div className="projecthome-title">
        <span className="home-title">LATEST DEVELOPER</span>
        <span className="home-subtitle">가장 최근에 등록된 개발자를 PPICK 해보세요!</span>
      </div>
      <div className="developerhome-container">
        {user.map((item) => (
          <Link to="/developer_detail"
                state={{ developerdata: item, }}>
            <div className="developerhome-list" key={item.id}>
              <img className="developer-img" src="img/developerimg.png"></img>
              <div className="developerlist-name">{item.nickname}</div>
              <div className="developerlist-intro">{item.job}</div>
              <div className="developerlist-context">{item.detail_category}</div>

              <div className="developerlist-main">
                {item.skill.map((skills) => (
                  <span className="developerlist-stack">{skills}</span>
                ))}
              </div>
              <div className="developerlist-footer">
                <p className="developer-ing">참여 프로젝트 1개</p>
                <div className="heart-cofntainer">
                 
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  {/* <p className="heart-cnt">{item.likes.length}</p> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="view-container">
        <Link
                to='/developer_list'>
                <button className="home-view-developer">View All</button>
              </Link>
      </div>
    </div>
  );
}

export default DeveloperHome;