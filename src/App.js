import React from 'react';
import Header from './components/Header'

class App extends React.Component {
  state = {
		uiState: {
			webDevMenuShown: false,
		},
	};

  dropDownHandler = () => {
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
        </div>
      );
  }
  
}

export default App;
