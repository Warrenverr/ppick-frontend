import React, { useState } from "react";
import "./TitleBanner.css";

function TitleBanner(props) {
  return (
    <div className="title-container">
      <div className="subtitle">
        <p>{props.subtitle}</p>
        {/* <img
          className="logo-img logo-img-titlebanner"
          alt="logo-image"
          src="img/logo.png"
        /> */}
        <p className="subtitle-basic">삑 해보자!</p>
      </div>
      <div className="title">
        <p>{props.maintitle}</p>
      </div>
    </div>
  );
}

export default TitleBanner;
