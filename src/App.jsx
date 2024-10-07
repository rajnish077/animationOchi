import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
