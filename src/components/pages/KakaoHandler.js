import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import Home from './Home';

const KakaoHandler = () => {
    const navigate = useNavigate();
    const nowPath = window.location.href;
    const kakaoCode = nowPath.split("code=");
    console.log(kakaoCode[1]);
    

    useEffect(() => {
        axios({
            url : "/api/user/auth/Kakao_login",
            method : "GET",
            params : {
                code : kakaoCode[1]
            }
        }).then((res) => {
            console.log(res.data);
            if(!localStorage.token) {
                localStorage.setItem('token', res.data);
            }
            
            //navigate('/');
        }).catch(error => {
            console.log("This is First Time Login");
        });
        
    });
    return <div>이거 왜안떠!!!</div>;
    
};
export default KakaoHandler;