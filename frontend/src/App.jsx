import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
