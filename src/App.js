import React from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

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
        <div onClick={this.closeDropDownHandler}>
          <Header dropDownHandler={this.dropDownHandler} webDevMenuShown={webDevMenuShown} />
          <AboutMe />
          <Skills />
          <Portfolio />
        </div>
      );
  }
  
}

export default App;
