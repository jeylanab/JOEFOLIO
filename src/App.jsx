import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Pages/Home";
import {Work} from "./Pages/Work";

const App = () => {
  return (
    <Router>
      <div className="sm:m-5 md:m-10 lg:mx-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;