import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import EspaceAdmin from "./components/admin/EspaceAdmin";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/espace-admin" element={<EspaceAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
