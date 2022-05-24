import React, { useState, useEffect } from 'react';
import './ContestHeader.css';
import axios from 'axios';

function ContestHeader() {
  const [title, setTitle] = useState('');

  const axios = require('axios');
  const id = 3;

  axios.get('/contest/list').then(function (res) {
    setTitle(res.data[id].title);
  });

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
