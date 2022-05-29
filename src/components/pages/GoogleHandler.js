import React, { useEffect, useState } from "react";
import Mypage from './Mypage';
import Home from './Home';
import axios from "axios";


const GoogleHandler = () => {
    
    const nowPath = window.location.href;
    const googleCode = nowPath.split("code=");
    const token = false;
    console.log(googleCode[1]);
    

    useEffect(() => {
        axios({
            url : "/api/user/auth/Google_login",
            method : "GET",
            params : {
                code : googleCode[1]
            }
        }).then((res) => {
            if(!localStorage.token) {
                
                localStorage.setItem('token', res.data);
            }
            
            console.log(res.data);
            
        }).catch(error => {
            console.log("This is First Time Login");
            

        });
        
    });
  
    return <Home/>;
    
};
export default GoogleHandler;