import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Photo from "./components/Photo";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Citation from "./components/Citation";

function App() {
  return (
    <div className="bg-dark text-light">
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
