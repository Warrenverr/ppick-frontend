import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import ProjectHome from './ProjectHome';
import DeveloperHome from './DeveloperHome';

function Home(){
    return(
        <>
            <HeroSection />
            <ProjectHome />
            <DeveloperHome />
        </>
    );
}

export default Home;