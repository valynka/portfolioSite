import React from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Photo from './components/Photo';
import Frontend from './components/Frontend';
import GetCourse from './components/GetCourse';

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
    const { webMenuShown } = this.state.uiState;
    return (
        <div>
          <Header webMenuHandler={this.webMenuHandler} webMenuShown={webMenuShown} />
          <AboutMe />
          <Frontend />
          <GetCourse />
          <Photo />
          <Footer />
        </div>
      );
  }
  
}

export default App;
