import React, { useState } from "react";
import "./Inquire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Inquire(props) {
  const [searchState, setSearchState] = useState("");
  const onSearchChange = (e) => {
    setSearchState(e.target.value);
  };
  const onSearchReset = (e) => {
    if (e.key === "Enter") {
      props.setKeyword(searchState);
      setSearchState("");
    }
  };

  return (
    <>
      <div className="inquire-container">
        <div className="inquire-text-container">
          <img className="searchimg" src="img/search.png"></img>
          <span>{props.text}</span>
        </div>
        <div className="inquire-bottom-container">
          <img className="language" alt="" src="img/java.png" />
          <img className="language" alt="" src="img/react.png" />
          <img className="language" alt="" src="img/nodejs.png" />
          <img className="language" alt="" src="img/typescript.png" />
          <img className="language" alt="" src="img/html.png" />
          <img className="language" alt="" src="img/css.png" />
          <img className="language" alt="" src="img/js.png" />
          <img className="language" alt="" src="img/vue.png" />
          <img className="language" alt="" src="img/nextjs.png" />
          <img className="language" alt="" src="img/kotlin.png" />
          <img className="language" alt="" src="img/spring.png" />
          <img className="language" alt="" src="img/mysql.png" />
          <img className="language" alt="" src="img/python.png" />
          <img className="language" alt="" src="img/django.png" />
          <img className="language" alt="" src="img/flutter.png" />
          <img className="language" alt="" src="img/swift.png" />
        </div>
        <div className="inquire-top-container">
          <div className="inquire-rightbox">
            <input
              className="search-box"
              type="text"
              onChange={onSearchChange}
              value={searchState}
              onKeyPress={onSearchReset}
              placeholder="내용을 검색하세요"
            ></input>
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inquire;
