import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Contacts from "./components/Contacts";
import ProjectPage from "./components/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Profile />
                <Projects />
                <TechStack />
                <Contacts />
              </>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <>
                <ScrollToTop />
                <ProjectPage />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
