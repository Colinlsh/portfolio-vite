import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectsContainer from "./components/ProjectsContainer";
import TechStacksScroll from "./components/TechStacksScroll";
import Contact from "./components/Contact";
import Dashboard from "./components/cms/Dashboard";
import Login from "./components/cms/ui/Login";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { getProjects, getResume } from "./app/slice/portfolioSlice";
import ResumeContainer from "./components/ResumeContainer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getResume());
    dispatch(getProjects());
  }, []);
  return (
    <Routes>
      <Route
        path="/portfolio-vite/"
        element={
          <div
            className="h-full w-full
             flex flex-col font-ubuntu text-customDark dark:text-white"
          >
            <Hero />
            <ResumeContainer />
            <ProjectsContainer />
            <TechStacksScroll />
            <Contact />
          </div>
        }
      />
      <Route
        path="/cms"
        element={
          <div
            className="h-full w-full
             flex flex-col font-ubuntu text-customDark dark:text-white"
          >
            <Dashboard />
          </div>
        }
      />
      <Route path="/cms/login" element={<Login />} />
    </Routes>
  );
}

export default App;
