import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import DanceStyles from "./pages/DanceStyles";
import Classes from "./pages/Classes";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import PerformancePage from "./pages/PerformancePage";


// Add additional imports as you create pages (e.g., DanceStyles, Classes, etc.)

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} /> 
        <Route path="/DanceStyles" element={<DanceStyles />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/PerformancePage" element={<PerformancePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactPage" element={<ContactPage />} /> 
      </Routes>

    </Router>
  );
};

export default App;


