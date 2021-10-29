import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarList from './NavbarList';

function Header (props) {	
	const { webDevMenuShown } = props;
	const { dropDownHandler } = props;
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-xl">
					<a className="navbar-brand" style={{marginRight: '20rem'}} href="/">Valinka</a>
					<NavbarList dropDownHandler={dropDownHandler} webDevMenuShown={webDevMenuShown} />
				</div>
			</nav>
		</header>
	)
	
}

export default Header;
