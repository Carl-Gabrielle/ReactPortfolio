import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
export default function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <Hero />
        <About />
      </div >
    </>
  );
}
