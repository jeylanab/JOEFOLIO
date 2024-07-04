import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import Description from "./component/Description";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Contact from "./component/Contact" 
import Skills from "./component/Skills";
import About from "./component/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router >
    <div>
      <NavBar />
      <Routes>
         <Route
            path="/"
            element={
              <>
                <Hero />
                <Description />
              </>
            }
          />
        <Route path="/" element={<Description />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;