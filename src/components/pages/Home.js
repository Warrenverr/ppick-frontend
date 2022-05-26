import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import ProjectHome from './ProjectHome';
// import DeveloperList from '../DeveloperList';

function Home(){
    return(
        <>
            <HeroSection />
            <ProjectHome /> 
        </>
    );
}

export default Home;