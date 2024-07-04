import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import Description from "./component/Description";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Contact from "./component/Contact" 
import Skills from "./component/Skills";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router >
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Description />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;