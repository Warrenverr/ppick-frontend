import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from "../Navbar";
import Login from "../Login";
import Mypage from "../Mypage";

function Home(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <Login />
            <Mypage />
        </>
    );
}

export default Home;