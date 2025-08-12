import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Contacts from "./components/Contacts";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <Hero />
        <About />
        <Profile />
        <Projects />
        <TechStack />
        <Contacts />
      </div >
    </>
  );
}
