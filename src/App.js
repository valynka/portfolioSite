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
			webDevMenuShown: false,
		},
	};

  dropDownHandler = (e) => {
    e.preventDefault();
		const { webDevMenuShown } = this.state.uiState;
		this.setState({uiState: {webDevMenuShown: !webDevMenuShown}});
	}

  closeDropDownHandler = () => {
    const { webDevMenuShown } = this.state.uiState;
    if (webDevMenuShown) this.setState({uiState: {webDevMenuShown: !webDevMenuShown}});
  }

  render () {
    const { webDevMenuShown } = this.state.uiState;
    return (
        <div className='bg-dark text-light h-100' onClick={this.closeDropDownHandler}>
          <Header dropDownHandler={this.dropDownHandler} webDevMenuShown={webDevMenuShown} />
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
