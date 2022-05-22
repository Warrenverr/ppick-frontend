import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import ProjectList from '../ProjectList';
import DeveloperList from '../DeveloperList';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <HeroSection />
            <ProjectList />
            <DeveloperList />
            <Footer />
        </>
    );
}

export default Home;