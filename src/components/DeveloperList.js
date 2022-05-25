import React, { useEffect, useState } from "react";
import "./DeveloperList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function DeveloperList() {
  const [heartState, setHeartState] = useState(false);
  const handlelike = (e) => {
    setHeartState(!heartState);
  };

  const developeraaa = [
    {
      id: 1,
      name: "김태완",
      intro: "백엔드 개발자",
      text: "세계 최강 백엔드 개발자입니다. 문의 주십시용",
    },
    {
      id: 2,
      name: "김대현",
      intro: "백엔드 개발자",
      text: "세계 최강 백엔드 개발자입니다. 문의 주십시용",
    },
    {
      id: 3,
      name: "김태완",
      intro: "백엔드 개발자",
      text: "세계 최강 백엔드 개발자입니다. 문의 주십시용",
    },
    {
      id: 4,
      name: "김대현",
      intro: "백엔드 개발자",
      text: "세계 최강 백엔드 개발자입니다. 문의 주십시용",
    },
  ];

  return (
    <div>
      <h1>PPICKER</h1>
      <h1>최근에 올라온 프로필을 확인해보세요!</h1>
      <div className="developer-container">
        {developeraaa.map((item) => (
          <Link to="/developer_detail">
            <div className="developerlist" key={item.id}>
              <img className="developer-img" src="img/developerimg.png"></img>
              <div className="developerlist-name">{item.name}</div>
              <div className="developerlist-intro">{item.intro}</div>
              <div className="developerlist-context">{item.text}</div>

              <div className="developerlist-main">
                <p className="developerlist-stack">React</p>
                <p className="developerlist-stack">Spring</p>
              </div>
              <div className="developerlist-footer">
                <div className="developerlist-footer-left">
                  <p>모집인원 : </p>
                  <p className="developerlist-count">2 / 5</p>
                </div>
                <FontAwesomeIcon
                  icon={heartState ? solidHeart : regularHeart}
                  className="heart"
                  onClick={handlelike}
                />
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
export default DeveloperList;