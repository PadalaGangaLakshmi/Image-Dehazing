import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/project";  // Ensure file name is 'Project.js'
import Contact from "./pages/Contact";  // Import the Contact component
import ImageUpload from "./components/ImageUpload";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />  {/* Fixed import issue */}
        <Route path="/upload" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
