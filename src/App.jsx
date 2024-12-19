import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { ContainerScroll } from "./Components/ScrollContainer";
import Artwork from "./Components/Artwork/Artwork";
import ArtworkGallery from "./Components/Artwork/ArtworkGallery";
import LoadingPage from "./Components/LoadingPage";
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const MainContent = () => (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-small-white/[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171d32]/50 to-transparent pointer-events-none" />
      <Navbar />
      <Home />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-white mb-10">About Me</h1>
        }
      >
        <About />
      </ContainerScroll>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-white mb-10">Experience</h1>
        }
      >
        <Experience />
      </ContainerScroll>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-white mb-10">Projects</h1>
        }
      >
        <Projects />
      </ContainerScroll>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-white mb-10">Character Artwork</h1>
        }
      >
        <Artwork />
      </ContainerScroll>
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      {loading ? <LoadingPage /> : (
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/artwork/:category" element={<ArtworkGallery />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
