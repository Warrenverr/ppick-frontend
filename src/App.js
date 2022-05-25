import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import project_list from './components/pages/project_list';
import developer_list from './components/pages/developer_list';
import Login from './components/pages/Login';
import Mypage from './components/pages/Mypage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/project_list' element={<project_list />} />
          <Route path='/developer_list' element={<developer_list />} />
          <Route path='/user/auth/login' element={<Login />} />
          <Route path='/mypage' element={<Mypage/>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
