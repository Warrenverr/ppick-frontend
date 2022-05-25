import React, { useState } from 'react';
import './FixIcon.css';
import { Link } from 'react-router-dom';

function FixIcon() {
  return (
    <Link to='/Project'>
      <div className='fixIcon'>
        <span>프로젝트</span>
        <span>등록💡</span>
      </div>
    </Link>
  );
}

export default FixIcon;
