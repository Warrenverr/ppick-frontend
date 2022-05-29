import React, { useEffect, useState } from "react";
import Mypage from './Mypage';
import Home from './Home';
import axios from "axios";

const GithubHandler = () => {
    const nowPath = window.location.href;
    const githubCode = nowPath.split("code=");
    
    console.log(githubCode[1]);
    

    useEffect(() => {
        axios({
            url : "/api/user/auth/GitHub_login",
            method : "GET",
            params : {
                code : githubCode[1]
            }
        }).then((res) => {
            if(!localStorage.token) {
                
                localStorage.setItem('token', res.data);
            }
            
            console.log(res.data);
            
         }).catch(error => {
            console.log("This is First Time Login");
            localStorage.setItem('token', null);
        });
        
    });
    if(localStorage.getItem('token')) {
        return <Home/>;       
    }else {
        return <Mypage/>;
    }
    
};
export default GithubHandler;