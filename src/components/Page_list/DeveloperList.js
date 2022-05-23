import React, { useEffect, useState } from "react";
import "./DeveloperList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import TitleBanner from "./TitleBanner";
import Inquire from "./Inquire";
import { Link } from "react-router-dom";
import axios from "axios";

function DeveloperList() {
  const [heartState, setHeartState] = useState(false);
  const handlelike = (e) => {
    setHeartState(!heartState);
  };

  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState([]);


  useEffect(() => {
    axios({
      url: "/api/user/list",
      method: "GET",
      params:{
        page : 0,
        keyword:keyword
      }
    }).then((res) => {
      setUser(res.data);
      console.log("성공");
    });
  }, [keyword]);

  return (
    <div>
      <TitleBanner
        subtitle="나와 딱 맞는 개발자를"
        maintitle="개발자 모집하기👭"
      />
      <Inquire text="개발자 찾기"  setKeyword={setKeyword}/>
      <div className="developer-container">
        {user.map((item) => (
          <Link to="/developer_detail"
                state={{ developerdata: item, }}>
            <div className="developerlist" key={item.id}>
              <img className="developer-img" src="img/developerimg.png"></img>
              <div className="developerlist-name">{item.nickname}</div>
              <div className="developerlist-intro">{item.job}</div>
              {/* <div className="developerlist-context">{item.text}</div> */}

              <div className="developerlist-main">
                {item.skill.map((skills) => (
                  <span className="developerlist-stack">{skills}</span>
                ))}
              </div>
              <div className="developerlist-footer">
               <div className="heart-cofntainer">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  {/* <p className="heart-cnt">{item.likes.length}</p> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DeveloperList;
