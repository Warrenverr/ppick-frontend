
import React, { useState } from "react";
import './Mypagelist.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';



<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// const [convertI,setConvertI] = React.useState(true);
  // const [convertP, setConvertP] = React.useState(false);
  // const onClickI = () =>{
  //   setConvertI(true);
  //   setConvertP(false);
  // };
  // const onClickP = () =>{
  //   setConvertI(false);
  //   setConvertP(true);
  // };



function Project(){

  const [value, setValue] = React.useState(1);
  const handleChange0 = (event, newValue) => {
    setValue(newValue);
  };

  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <info className="info">

    <div className="nav">
        <div className="mypage">
        <h1>👩‍💻MY PROJECT👨‍💻</h1></div>
        
        <Tabs value={value} onChange={handleChange0} aria-label="icon label tabs example">
        <li className="nav-item">
        <Link
            to="/mypage"
            className="nav-links"
            onClick={closeMobileMenu}>
            <Tab icon={<PersonPinIcon />} label="개인정보" />
            </Link>
        </li>
        <Tab icon={<FavoriteIcon />} label="프로젝트"/>  
        
        </Tabs>
    </div>
    
    <div>
        <div className="title"><h1>👻등록한 프로젝트👻</h1></div>
        <div className="data">
            <div style={{ height: 320, width: '150%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                    columns={[{ field: "id", hide: true },
                    { field: "col1", headerName: "등록일자", width: 200 },
                    { field: "col2", headerName: "프로젝트 명", width: 300 },
                    { field: "col3", headerName: "신청자 현황", width: 300 }]}
                    
                    rows={[
                        { id: 1, col1: "2022-05-05", col2: "스케이트보드 함께타요! 커뮤니티 앱개발", col3:"(2 /5명)" },
                        { id: 2, col1: "2022-05-11", col2: "배달 및 음식 쉐어 서비스 웹 개발자 구해요", col3:"(5 /5명)" },
                        { id: 3, col1: "2022-05-30", col2: "2022 IT 테크톤 함께 나가실문 모집합니다", col3:"(5 /4명)" },
                    ]}
                    />  
                </div>
            </div>
        </div>
        </div>


        <div className="title"><h1>🤞지원한 프로젝트🤞</h1></div>
        <div className="data">
        <div style={{ height: 220, width: '150%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                    columns={[{ field: "id", hide: true },
                    { field: "col1", headerName: "신청 일자", width: 200 },
                    { field: "col2", headerName: "프로젝트 명", width: 300 },
                    { field: "col3", headerName: "신청 현황", width: 200 }]}
                    
                    rows={[
                        { id: 1, col1: "2022-04-20", col2: "Python 교육 프로그램 소프트웨어 제작", col3: "신청완료" },
                        { id: 2, col1: "2022-05-01", col2: "공유 킥보드 수거를 위한 IOS앱개발", col3: "검토중" },
                        
                    ]}
                    />  
                </div>
            </div>
        </div>
        </div>

        <div className="title"><h1>🎈관심 프로젝트🎈</h1></div>
        <div className="data">
        <div style={{ height: 320, width: '150%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                    columns={[{ field: "id", hide: true },
                    { field: "col1", headerName: "등록일자", width: 200 },
                    { field: "col2", headerName: "프로젝트 명", width: 300 }]}
                    
                    
                    rows={[
                        { id: 1, col1: "2022-05-05", col2: "2023 world IT idea contest 공모전 개발자모집" },
                        { id: 2, col1: "2022-05-11", col2: "실시간 사진 공유 및 연동 서비스 제작" },
                        { id: 3, col1: "2022-05-30", col2: "파워P들을 위한 여행 계획표 앱제작" },
                        
                    ]}
                    />  
                </div>
            </div>
        </div>
        </div>
    </div>
    </info>
  );
}

export default Project;

// export default function App() {
//   return (
//     <Profile></Profile>
//     <Footer></Footer>
//   );
// }