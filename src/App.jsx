import {Routes, Route , HashRouter} from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";

const LandingPage = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Portofolio />
    <ContactPage />
  </>
);

const ProjectPageLayout = () => <ProjectDetails />;

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;