import React, { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Photo from "./components/Photo";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Citation from "./components/Citation";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    

  }, []);

  return (
    <div className="bg-dark text-light">
      <div className="position-fixed">{scrollTop}</div>
      <Header />
      <main>
        <Citation />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Photo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
