import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Photo from "./components/Photo";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Citation from "./components/Citation";

class App extends React.Component {
  state = {
    uiState: {
      webMenuShown: false,
    },
  };

  webMenuHandler = (e) => {
    e.preventDefault();
    const { webMenuShown } = this.state.uiState;
    this.setState({ uiState: { webMenuShown: !webMenuShown } });
  };

  render() {
    const { webMenuShown } = this.state.uiState;
    return (
      <div className="bg-dark text-light">
        <Header
          webMenuHandler={this.webMenuHandler}
          webMenuShown={webMenuShown}
        />
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
}

export default App;
