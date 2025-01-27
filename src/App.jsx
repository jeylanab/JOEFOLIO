import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Pages/Home";
import {Work} from "./Pages/Work";

const App = () => {
  return (
    <Router>
      <div>
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