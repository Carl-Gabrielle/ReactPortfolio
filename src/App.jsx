import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Profile />
              <Projects />
              <TechStack />
              <Contacts />
              <Footer />
            </>
          }
        />

        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}
