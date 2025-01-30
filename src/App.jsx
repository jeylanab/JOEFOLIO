import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Pages/Home";
import { Work } from "./Pages/Work";
import Info from "./Pages/Info";
import Project from "./Pages/Project";

const App = () => {
  return (
    <Router>
      <div className="sm:m-5 md:m-10 lg:mx-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Work />} />
          <Route path="/contact" element={<Info />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;