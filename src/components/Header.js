import React from 'react';
import NavbarList from './NavbarList';

function Header (props) {	
	const { webDevMenuShown } = props;
	const { dropDownHandler } = props;
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-xl">
					<a className="navbar-brand" href="/">Valinka</a>
					<NavbarList dropDownHandler={dropDownHandler} webDevMenuShown={webDevMenuShown} />
				</div>
			</nav>
		</header>
	)
	
}

export default Header;
