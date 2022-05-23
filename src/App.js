import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import ProjectList from "./components/Page_list/ProjectList";
import FixIcon from "./components/Page_list/FixIcon";
import DeveloperList from "./components/Page_list/DeveloperList";
import ProjectDetail from "./components/Page_list/ProjectDetail";
import DeveloperDetail from "./components/Page_list/DeveloperDetail";
import ScrollToTop from "./components/Page_list/index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/project_list" element={<ProjectList />}></Route>
        <Route exact path="/developer_list" element={<DeveloperList />}></Route>  
        <Route exact path="/project_detail" element={<ProjectDetail />}></Route>
        <Route exact path="/developer_detail" element={<DeveloperDetail />}></Route>
      </Routes>
      <FixIcon />
    </BrowserRouter>
  );
}

export default App;