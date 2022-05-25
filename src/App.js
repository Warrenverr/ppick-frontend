import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contest from './components/Contest';
import ContestList from './components/ContestList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/Project' element={<Project />}></Route>
          <Route exact path='/ContestList' element={<ContestList />}></Route>
          <Route exact path='/ContestList/:id' element={<Contest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
