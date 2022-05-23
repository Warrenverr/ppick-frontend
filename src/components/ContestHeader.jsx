import React, { useState, useEffect } from 'react';
import './ContestHeader.css';
import axios from 'axios';

function ContestHeader() {
  const [title, setTitle] = useState('2022 Azure Virtual Hackathon');

  return (
    <div className='app__header' id='home'>
      <div>
        <div className='p_opensans app__header-title'>공모전 정보</div>
        <div className='p_opensans app__header-info'>{title}</div>
      </div>
    </div>
  );
}

export default ContestHeader;
