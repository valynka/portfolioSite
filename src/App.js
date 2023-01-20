import React from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Photo from './components/Photo';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Citation from './components/Citation';

class App extends React.Component {
  state = {
		uiState: {
			webMenuShown: false,
		},
	};

  webMenuHandler = (e) => {
    e.preventDefault();
		const { webMenuShown } = this.state.uiState;
		this.setState({uiState: {webMenuShown: !webMenuShown}});
	}

  render () {
    const { dropdownOpened } = this.state.uiState;
    const { webMenuShown } = this.state.uiState;
    return (
        <div className='bg-dark text-light h-100' onClick={this.closeDropDownHandler}>
          <Header webMenuHandler={this.webMenuHandler} webMenuShown={webMenuShown} />
          <Citation />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Photo />
          <Footer />
        </div>
      );
  }
  
}

export default App;
