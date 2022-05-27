import React, { useEffect, useState } from 'react';
import './ContestList.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import TitleBanner from "././Page_list/TitleBanner";
import Contest from './Contest';

function ContestList() {
  const [contest, setContest] = useState([]);

  useEffect(() => {
    axios({
      url: "/api/contest/list",
      method: "GET"
    }).then((res) => {
      setContest(res.data);
      console.log("성공");
    });
  }, []);

  console.log(contest);

  return (
    <div>
      <TitleBanner
        subtitle="공모전에 함께 나갈 동료를"
        maintitle="진행중인 공모전🥇"
      />
      <div className='cl_div'>
        {contest.map((item, index) => (
          <Link
            to='/ContestList/:id'
            state={{ ContestData: item }}
            key={item.id}>
            <div className='developerlist' key={item.title}>
              <img className='cl_img' src={item.img}></img>
              <div className='cl_title'>{item.title}</div>
              <div className='cl_date'>{item.apply_date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContestList;