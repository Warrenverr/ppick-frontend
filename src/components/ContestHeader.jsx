import React, { useState, useEffect } from 'react';
import './ContestHeader.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ContestHeader() {
  const ContestData = useLocation().state.ContestData;
  const [title, setTitle] = useState(ContestData.title);

  return (
    <div className='contest__header' id='home'>
      <div>
        <div className='opensans contest__header-title'>공모전 정보</div>
        <div className='opensans contest__header-info'>{title}</div>
      </div>
    </div>
  );
}

export default ContestHeader;
