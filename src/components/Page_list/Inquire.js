import React, { useState } from "react";
import "./Inquire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Inquire(props) {
  const [language, setLanguage] = useState([
    {skill : 'java'},
    {skill : 'React'},
    {skill : 'nodejs'},
    {skill : 'typescript'},
    {skill : 'html'},
    {skill : 'css'},
    {skill : 'js'},
    {skill : 'vue'},
    {skill : 'nextjs'},
    {skill : 'kotlin'},
    {skill : 'SpringBoot'},
    {skill : 'MySQL'},
    {skill : 'python'},
    {skill : 'django'},
    {skill : 'flutter'},
    {skill : 'swift'},
  ]);

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

  const [skill, setSkill] = useState("");

  const imageClick = (item) => {
    console.log(item);
    props.setSkill(item);
    
    console.log('click');
  } 
  

  return (
    <>
      <div className="inquire-container">
        <div className="inquire-text-container">
          <img className="searchimg" src="img/search.png"></img>
          <span>{props.text}</span>
        </div>
        <div className="inquire-bottom-container">
          {language.map((item) => (
            
            <img className="language" alt="" src={`img/${item.skill}.png`}
            onClick={() => {
              setSkill(item.skill);
              imageClick(item.skill);
            }} />
          ))}
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
