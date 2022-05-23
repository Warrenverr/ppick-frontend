import React from 'react';
import ContestHeader from './components/ContestHeader';
import Navbar from './components/Navbar';
import Contest from './components/Contest';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <ContestHeader />
    <div className='app__main'></div>
    <Contest />
  </div>
);

export default App;
