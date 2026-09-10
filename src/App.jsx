import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Journey from "./pages/Journey.jsx";

// Main layout combining single-page components
function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
